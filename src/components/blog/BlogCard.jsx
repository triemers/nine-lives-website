import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card__photo-wrap">
        {post.cover && (
          <img
            src={post.cover}
            alt=""
            className="blog-card__photo"
            style={{ objectPosition: post.coverPosition }}
          />
        )}
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__date">
            {new Date(post.date).toLocaleDateString()}
          </span>
          {post.disciplines?.map(discipline => (
            <span key={discipline} className="tag tag--green">{discipline}</span>
          ))}
          {post.tags?.map(tag => (
            <span key={tag} className="tag tag--purple">{tag}</span>
          ))}
        </div>
        <h2>{post.title}</h2>
        {post.author && <span className="blog-card__author">By {post.author}</span>}
        {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
        <Link to={`/blog/${post.slug}`} className="btn btn--secondary blog-card__cta">
          Read More
        </Link>
      </div>
    </article>
  )
}
