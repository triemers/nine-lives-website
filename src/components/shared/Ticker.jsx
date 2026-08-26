import fishbone from '../../assets/decorative/fishbone.png'
import '../../styles/tokens.css'

/*
  Reusable scrolling ticker.
  items    — array of strings OR objects { logo, name } for sponsor logos
  inverted — white background, black text
  speed    — animation duration in seconds (higher = slower)

  Loop gap fix: spacing lives in padding-right on each item (not gap on the track)
  so translateX(-50%) lands exactly at the start of copy 2 every time.
*/
export default function Ticker({ items, inverted = false, speed = 22 }) {
  const logoFilter   = inverted ? 'brightness(0)'          : 'brightness(0) invert(1)'
  const boneFilter   = inverted ? 'brightness(0)'          : 'invert(1)'

  return (
    <div
      className={`ticker${inverted ? ' ticker--inverted' : ''}`}
      aria-hidden="true"
    >
      <div
        className="ticker__track"
        style={{ animationDuration: `${speed}s`, gap: 0 }}
      >
        {[0, 1].map((copyIndex) =>
          items.map((item, itemIndex) => (
            <span
              key={`${copyIndex}-${itemIndex}`}
              style={{
                display:      'flex',
                alignItems:   'center',
                gap:          'var(--space-6)',
                paddingRight: 'var(--space-8)',
                flexShrink:   0,
              }}
            >
              {typeof item === 'string' ? (
                <span className="ticker__item">{item}</span>
              ) : (
                <img
                  src={item.logo}
                  alt={item.name}
                  style={{
                    height: '22px',
                    width:  'auto',
                    filter: logoFilter,
                    opacity: 0.8,
                  }}
                />
              )}
              <img
                src={fishbone}
                alt=""
                style={{
                  height:    '18px',
                  width:     'auto',
                  filter:    boneFilter,
                  opacity:   0.45,
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
