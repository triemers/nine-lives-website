import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { POSTS } from '../data/blog'
import '../styles/blog.scss'

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)

  if (!post) {
    return (
      <main className="page">
        <section className="blog-post section">
          <div className="container">
            <p>Post not found.</p>
            <Link to="/blog">&larr; The Scratching Post</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="blog-post section">
        <div className="container">
          <Link to="/blog" className="blog-post__back">&larr; The Scratching Post</Link>
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__meta">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            {post.author && <span> · {post.author}</span>}
          </div>
          {(post.tags || post.disciplines) && (
            <div className="blog-post__tags">
              {post.disciplines?.map(discipline => (
                <span key={discipline} className="tag tag--filled tag--green">{discipline}</span>
              ))}
              {post.tags?.map(tag => (
                <span key={tag} className="tag tag--filled tag--purple">{tag}</span>
              ))}
            </div>
          )}
          {post.cover && (
            <img src={post.cover} alt="" className="blog-post__cover" />
          )}
          <div
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: marked.parse(post.body) }}
          />
        </div>
      </section>
    </main>
  )
}
