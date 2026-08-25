import logo from '../../assets/logo.png'
import '../../styles/home.css'

export default function Hero() {
  return (
    <section className="hero grain grain--heavy scanlines">
      <img
        src={logo}
        alt="Nine Lives Cycling Collective"
        className="hero__logo"
      />
      <p className="hero__tagline">
        We were tired of fighting for a seat at the table,<br />
        so we built our own.
      </p>
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
