import RiderCard from '../components/about/RiderCard'
import { RIDERS } from '../data/riders'
import '../styles/about.scss'

export default function About() {
  return (
    <main className="page">

      <section className="about-hero">
        <p className="label about-hero__label">Est. 2025 — Portland, OR</p>
        <h1 className="display-xl about-hero__title">Who Is<br />Nine Lives?</h1>
        <p className="about-hero__intro">Nine Lives was founded to give a voice to those who aren't typically handed a mic.</p>
      </section>

      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__sidebar">
            <p className="label">Our Story</p>
          </div>
          <div className="about-story__text">
            <p>Our riders are highly engaged in the cycling community. They work hard and play even harder. We fight not just for podiums, but for representation in the field. It's more important than ever to champion diversity.</p>
            <p>We know that we win races in training, not on race day. Rain or shine you can find us out on the trails and roads less traveled. The gnarliest rides often leave us with the best memories.</p>
            <p>Not only do we strive to be fast, but we want to make the whole field faster! Join us for a clinic or ask us a question any time, we're happy to share our collective knowledge. Together we've won everything from 100 mile MTB races to Cyclocross national championships.</p>
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

      <section className="about-values">
        <div className="about-values__inner">
          <div className="about-values__sidebar">
            <p className="label">Inclusivity</p>
          </div>
          <div className="about-values__text">
            <p>We believe competitive cycling is for everyone; all bodies, all backgrounds, all walks of life. It is our goal to foster an environment where all athletes can grow and succeed, and we take this mission beyond our own training to the events we attend and the sponsors we partner with.</p>
            <p>We believe inclusive racing is the future of cycling and the only way to grow and foster the sport. We are committed to showcasing athletes who have traditionally been dismissed by the mainstream cycling world.</p>
          </div>
        </div>
      </section>

    </main>
  )
}
