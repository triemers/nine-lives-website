// One-off migration: converts scripts/wp-migration/wp-posts.json (pulled from the
// WordPress REST API at ninelivescycling.com) into content/blog/*.md files, downloading
// referenced images into public/images/blog/. Run with: node scripts/wp-migration/convert.js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import TurndownService from 'turndown'
import he from 'he'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..', '..')

const POSTS_JSON = path.join(__dirname, 'wp-posts.json')
const CONTENT_DIR = path.join(ROOT, 'content', 'blog')
const IMAGES_DIR = path.join(ROOT, 'public', 'images', 'blog')

fs.mkdirSync(CONTENT_DIR, { recursive: true })
fs.mkdirSync(IMAGES_DIR, { recursive: true })

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' })

const posts = JSON.parse(fs.readFileSync(POSTS_JSON, 'utf8'))

const imageCache = new Map() // remote url -> local /images/blog/<file>

async function downloadImage(url) {
  if (imageCache.has(url)) return imageCache.get(url)

  const cleanUrl = url.split('?')[0]
  let filename = decodeURIComponent(path.basename(cleanUrl))
  let localPath = path.join(IMAGES_DIR, filename)

  // avoid clobbering same-named files from different posts
  let counter = 1
  while (fs.existsSync(localPath) && !imageCache.has(url)) {
    const seen = [...imageCache.values()].some(v => v === `/images/blog/${filename}`)
    if (!seen) break
    const ext = path.extname(filename)
    const base = path.basename(filename, ext)
    filename = `${base}-${counter}${ext}`
    localPath = path.join(IMAGES_DIR, filename)
    counter++
  }

  const res = await fetch(url)
  if (!res.ok) {
    console.warn(`  ! failed to download ${url}: ${res.status}`)
    return url
  }
  const buffer = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(localPath, buffer)

  const publicPath = `/images/blog/${filename}`
  imageCache.set(url, publicPath)
  return publicPath
}

function yamlString(value) {
  return `"${String(value).replace(/"/g, '\\"')}"`
}

async function convertPost(post) {
  const title = he.decode(post.title.rendered)
  const slug = post.slug
  const date = post.date.slice(0, 10)
  const rawAuthor = post._embedded?.author?.[0]?.name || 'Nine Lives'
  const author = he.decode(rawAuthor)

  const tags = (post._embedded?.['wp:term']?.[0] || [])
    .map(term => term.name)
    .filter(name => name && name.toLowerCase() !== 'uncategorized')

  console.log(`Converting: ${title}`)

  let cover = null
  const featuredUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  if (featuredUrl) {
    cover = await downloadImage(featuredUrl)
  }

  // download every <img> referenced in the body and rewrite src attributes before
  // handing off to turndown, so the resulting markdown points at local files
  let html = post.content.rendered
  const imgUrls = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1])
  for (const url of [...new Set(imgUrls)]) {
    const localPath = await downloadImage(url)
    html = html.split(url).join(localPath)
  }

  const markdownBody = turndown.turndown(html)

  const frontmatter = [
    '---',
    `title: ${yamlString(title)}`,
    `date: ${date}`,
    `author: ${yamlString(author)}`,
    tags.length ? `tags:\n${tags.map(t => `  - ${yamlString(t)}`).join('\n')}` : null,
    cover ? `cover: ${cover}` : null,
    '---',
  ].filter(Boolean).join('\n')

  const fileContents = `${frontmatter}\n\n${markdownBody}\n`
  fs.writeFileSync(path.join(CONTENT_DIR, `${slug}.md`), fileContents)
}

for (const post of posts) {
  await convertPost(post)
}

console.log(`\nDone — ${posts.length} post(s) written to content/blog/`)
console.log('NOTE: author fields came through as email addresses from the WP API — review and replace with display names.')
