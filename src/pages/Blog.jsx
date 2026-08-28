import BlogCard from '../components/blog/BlogCard'
import { POSTS } from '../data/blog'
import '../styles/blog.scss'

export default function Blog() {
  return (
    <main className="page">
      <section className="blog section">
        <div className="container">
          <h1 className="display-xl">The Scratching Post</h1>

          <div className="blog__list">
            {POSTS.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
