import fishbone from '../../assets/decorative/fishbone.png'
import '../../styles/tokens.css'

/*
  Reusable scrolling ticker / marquee.
  items    — array of strings to display
  inverted — white background, black text
  speed    — animation duration in seconds (higher = slower)
*/
export default function Ticker({ items, inverted = false, speed = 22 }) {
  return (
    <div
      className={`ticker${inverted ? ' ticker--inverted' : ''}`}
      aria-hidden="true"
    >
      <div
        className="ticker__track"
        style={{ animationDuration: `${speed}s` }}
      >
        {[0, 1].map((copyIndex) =>
          items.map((item) => (
            <span
              key={`${copyIndex}-${item}`}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexShrink: 0 }}
            >
              <span className="ticker__item">{item}</span>
              <img
                src={fishbone}
                alt=""
                style={{
                  height: '20px',
                  width:  'auto',
                  filter: inverted ? 'none' : 'invert(1)',
                  opacity: 0.6,
                  flexShrink: 0,
                }}
              />
            </span>
          ))
        )}
      </div>
    </div>
  )
}
