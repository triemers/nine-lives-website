import logo from '../../assets/logo.png'
import '../../styles/home.css'

export default function Hero() {
  return (
    <section className="hero grain grain--heavy scanlines">
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
