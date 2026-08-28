import fm from 'front-matter'

const modules = import.meta.glob('/content/blog/*.md', { eager: true, query: '?raw', import: 'default' })

// Pulls a short excerpt from the first substantial paragraph of a post, skipping
// image lines and short photo-credit blocks (e.g. "Courtesy of So-and-so").
function extractExcerpt(markdown, { minBlockLength = 60, sentenceCount = 2, maxLength = 280 } = {}) {
  const blocks = markdown.split(/\n\s*\n/)

  for (const block of blocks) {
    const text = block
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/^#{1,6}\s+/, '')
      .replace(/[*_`]/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    if (text.length < minBlockLength) continue

    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]
    const excerpt = sentences.slice(0, sentenceCount).join(' ').trim()
    return excerpt.length > maxLength ? `${excerpt.slice(0, maxLength).trim()}…` : excerpt
  }

  return ''
}

export const POSTS = Object.entries(modules)
  .map(([path, raw]) => {
    const { attributes, body } = fm(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')
    return { slug, body, excerpt: extractExcerpt(body), ...attributes }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))
