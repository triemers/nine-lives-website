import imgBtd    from '../../assets/images/nine-lives-btd-020.jpg'
import imgMid2   from '../../assets/images/midsouth-2.jpg'
import imgMidNb  from '../../assets/images/midsouth-nb-17.webp'
import vid1      from '../../assets/videos/foco-shakeout-01.mp4'
import vid2      from '../../assets/videos/foco-shakeout-02.mp4'
import '../../styles/media-strip.scss'

// Row 1: portrait, video, landscape
// Row 2: video, landscape
// Flex values match each item's natural aspect ratio so the row is always full-width
const ROW_1 = [
  { type: 'image', src: imgBtd,   alt: 'Nine Lives Cycling x BTD team portrait', ratio: 1.5   },
  { type: 'video', src: vid1,                                                       ratio: 0.8   },
  { type: 'image', src: imgMid2,  alt: 'Nine Lives riders at MidSouth',            ratio: 1.25  },
]

const ROW_2 = [
  { type: 'video', src: vid2,                                                       ratio: 0.8   },
  { type: 'image', src: imgMidNb, alt: 'MidSouth Nonbinary Pro Race',              ratio: 1.5   },
]

function MediaCell({ item }) {
  const style = { flex: item.ratio }
  if (item.type === 'video') {
    return (
      <div className="media-strip__cell" style={style}>
        <video className="media-strip__video" autoPlay muted loop playsInline>
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
    )
  }
  return (
    <div className="media-strip__cell" style={style}>
      <img className="media-strip__img" src={item.src} alt={item.alt} />
    </div>
  )
}

export default function MediaStrip() {
  return (
    <section className="media-strip" aria-hidden="true">
      <div className="media-strip__row media-strip__row--1">
        {ROW_1.map((item, i) => <MediaCell key={i} item={item} />)}
      </div>
      <div className="media-strip__row media-strip__row--2">
        {ROW_2.map((item, i) => <MediaCell key={i} item={item} />)}
      </div>
    </section>
  )
}
