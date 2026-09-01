import RiderCard from '../components/about/RiderCard'
import Ticker from '../components/shared/Ticker'
import { RIDERS } from '../data/riders'
import storyPhoto from '../assets/images/midsouth-2.jpg'
import '../styles/about.scss'

// Repeated 3x so one "copy" of the marquee track comfortably exceeds
// viewport width — see the same fix/comment in Blog.jsx.
const INCLUSIVITY_WORDS_ONCE = [
  'All Bodies',
  'All Backgrounds',
  'All Walks of Life',
]
const INCLUSIVITY_WORDS = [...INCLUSIVITY_WORDS_ONCE, ...INCLUSIVITY_WORDS_ONCE, ...INCLUSIVITY_WORDS_ONCE]

export default function About() {
  return (
    <main className="page">

      <section className="about-hero">
        <img
          src={storyPhoto}
          alt="A Nine Lives rider in team kit watching a racer roll through the MidSouth course"
          className="about-hero__photo"
        />
        <div className="container about-hero__container">
          <div className="about-hero__box">
            <h1 className="about-hero__title">Our Story</h1>
            <div className="about-hero__text">
              <p>Our riders are highly engaged in the cycling community. They work hard and play even harder. We fight not just for podiums, but for representation in the field. It's more important than ever to champion diversity.</p>
              <p>We know that we win races in training, not on race day. Rain or shine you can find us out on the trails and roads less traveled. The gnarliest rides often leave us with the best memories.</p>
              <p>Not only do we strive to be fast, but we want to make the whole field faster! Join us for a clinic or ask us a question any time, we're happy to share our collective knowledge. Together we've won everything from 100 mile MTB races to Cyclocross national championships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-riders">
        <div className="about-riders__header">
          <h2>Meet the Team</h2>
        </div>
        <div className="about-riders__grid">
          {RIDERS.map(rider => (
            <RiderCard key={rider.name} rider={rider} />
          ))}
        </div>
      </section>

      <section className="about-values about-values--panel grain grain--heavy scanlines">
        <h2 className="about-values__title">Inclusivity</h2>

        <div className="about-values__marquee">
          <Ticker items={INCLUSIVITY_WORDS} speed={30} />
        </div>

        <div className="about-values__bottom">
          <div className="about-values__box">
            <p>We believe competitive cycling is for everyone; all bodies, all backgrounds, all walks of life. It is our goal to foster an environment where all athletes can grow and succeed, and we take this mission beyond our own training to the events we attend and the sponsors we partner with.</p>
            <p>We believe inclusive racing is the future of cycling and the only way to grow and foster the sport. We are committed to showcasing athletes who have traditionally been dismissed by the mainstream cycling world.</p>
          </div>
        </div>
      </section>

    </main>
  )
}
