import fm from 'front-matter'
import recapCover from '../assets/images/hero-abstract-sm.webp'

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

// Posts that live on their own page instead of a markdown file. `href` is
// where the card links to.
const PAGE_POSTS = [
  {
    slug: 'recap-2026',
    href: '/recap-2026',
    title: '2026 Season Recap',
    date: '2026-11-10',
    tags: ['Season Recap'],
    cover: recapCover,
    excerpt: "Two world titles and one very good year. Here's what our women and non-binary riders did in 2026, and where we're headed next.",
  },
]

export const POSTS = [
  ...Object.entries(modules).map(([path, raw]) => {
    const { attributes, body } = fm(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')
    return { slug, body, excerpt: extractExcerpt(body), ...attributes }
  }),
  ...PAGE_POSTS,
]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
