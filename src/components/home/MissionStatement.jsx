import { Link } from 'react-router-dom'
import '../../styles/mission.scss'

export default function MissionStatement() {
  return (
    <section className="mission section">
      <div className="container mission__inner">

        <div className="mission__quote-block">
          <blockquote className="mission__quote">
            We were tired of fighting for a seat at the table, so we built our own.
          </blockquote>
          <p className="mission__attribution">Chloe Spritz, Team Director</p>
        </div>

        <div className="mission__body-block">
          <p className="mission__body">
            Nine Lives is an elite women's and non-binary gravel and XC team,
            founded to give a voice to those who aren't typically handed a mic.
          </p>
          <p className="mission__body">
            We fight for representation in cycling. Competitive racing is for
            everyone, across all bodies, backgrounds, and walks of life.
          </p>
          <Link to="/about" className="btn btn--gradient">
            <span>Who We Are →</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
