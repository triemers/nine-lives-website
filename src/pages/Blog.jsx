import BlogCard from '../components/blog/BlogCard'
import { POSTS } from '../data/blog'
import '../styles/blog.scss'

export default function Blog() {
  return (
    <main className="page">
      <section className="blog section">
        <div className="container">
          <h1 className="display-xl">The Scratching Post</h1>
          <div className="blog__subhead">
            <p>Here you’ll find tips, race reports, thoughts and reflections about cycling, training, and fun. Updated regularly.</p>
            <p>Anything you’d like to hear about specifically? DM us on instagram @ninelivescycling.</p>
          </div>

          <div className="blog__list">
            {POSTS.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="blog-subscribe section">
        <div className="container">
          <div className="blog-subscribe__inner">
            <h2>Want more stories and tips?</h2>
            <p>Subscribe to get notified when we write something new. No spam, we promise.</p>
            <form className="blog-subscribe__form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                aria-label="Email address"
                required
              />
              <button type="submit" className="btn btn--gradient">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
