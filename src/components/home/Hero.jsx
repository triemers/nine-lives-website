import logo from '../../assets/logo.png'
import '../../styles/hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__bg hero__bg--flow" aria-hidden="true" />
      <div className="hero__logo-wrap">
        <img
          src={logo}
          alt="Nine Lives Cycling Collective"
          className="hero__logo"
        />
      </div>
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
