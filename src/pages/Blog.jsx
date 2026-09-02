import BlogCard from '../components/blog/BlogCard'
import Ticker from '../components/shared/Ticker'
import { POSTS } from '../data/blog'
import '../styles/blog.scss'

// Ticker repeats these 4 names into itself so one "copy" is comfortably
// wider than any viewport — otherwise the loop runs out of content and
// visibly jumps/gaps instead of scrolling continuously (Ticker duplicates
// whatever array it's given exactly once for the seamless-loop math).
const TICKER_NAMES = [
  'Nine Lives Cycling Collective',
  'Bike Tires Direct',
  'Castelli',
  'The Athletic Community',
]
const TICKER_ITEMS = [...TICKER_NAMES, ...TICKER_NAMES, ...TICKER_NAMES]

const MINOR_ACCENTS = ['purple', 'pink']

export default function Blog() {
  const [featuredPost, ...otherPosts] = POSTS

  return (
    <main className="page">
      <section className="blog section">
        <div className="page-header__title-wrap">
          <h1 className="page-header__title">The Scratching Post</h1>
        </div>

        <div className="container blog__header">
          <div className="page-header__subhead">
            <p>Here you’ll find tips, race reports, thoughts and reflections about cycling, training, and fun.</p>
            <p>Anything you’d like to hear about specifically? DM us on instagram @ninelivescycling.</p>
          </div>
        </div>

        <Ticker items={TICKER_ITEMS} variant="thin" speed={85} />

        <div className="container">
          <div className="blog__list">
            {featuredPost && (
              <div className="blog__featured">
                <BlogCard post={featuredPost} featured accent="green" />
              </div>
            )}
            <div className="blog__minor-list">
              {otherPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} accent={MINOR_ACCENTS[index % MINOR_ACCENTS.length]} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blog-subscribe section">
        <div className="container">
          <h2 className="blog-subscribe__heading">Want more stories and tips?</h2>
          <div className="blog-subscribe__inner">
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
