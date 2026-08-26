import fishbone from '../../assets/decorative/fishbone.png'
import '../../styles/ticker.scss'

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
          items.map((item, itemIndex) => (
            <span key={`${copyIndex}-${itemIndex}`} className="ticker__item-wrap">
              {typeof item === 'string' ? (
                <span className="ticker__item">{item}</span>
              ) : item.crop ? (
                <span className="ticker__logo-wrap">
                  <img src={item.logo} alt={item.name} className="ticker__logo" />
                </span>
              ) : (
                <img
                  src={item.logo}
                  alt={item.name}
                  className={`ticker__logo${item.size ? ` ticker__logo--${item.size}` : ''}`}
                />
              )}
              <img src={fishbone} alt="" className="ticker__fishbone" />
            </span>
          ))
        )}
      </div>
    </div>
  )
}
