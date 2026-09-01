import { Link } from 'react-router-dom'
import { schedule } from '../../data/schedule'
import '../../styles/schedule.scss'

const sorted = [
  ...schedule.filter((r) => r.status === 'upcoming'),
  ...schedule.filter((r) => r.status === 'completed'),
]

export default function RaceSchedule() {
  return (
    <section className="schedule section">
      <div className="container">

        <h2 className="schedule__heading">Race Schedule</h2>
        <ul className="schedule__list">
          {sorted.map((race) => (
            <RaceRow key={race.id} race={race} past={race.status === 'completed'} />
          ))}
        </ul>

      </div>
    </section>
  )
}

function RaceRow({ race, past = false }) {
  return (
    <li className={`schedule__race${past ? ' schedule__race--past' : ''}`}>
      <span className="schedule__date">{race.date}</span>
      <div className="schedule__name-group">
        <span className="schedule__name">{race.name}</span>
        {race.links.length > 0 && (
          <div className="schedule__links">
            {race.links.map((link) =>
              link.url ? (
                link.url.startsWith('http') ? (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost btn--sm"
                  >
                    {link.label} →
                  </a>
                ) : (
                  <Link key={link.label} to={link.url} className="btn btn--ghost btn--sm">
                    {link.label} →
                  </Link>
                )
              ) : (
                <span key={link.label} className="schedule__link--pending">
                  {link.label}
                </span>
              )
            )}
          </div>
        )}
      </div>
      <span className="schedule__location">{race.location}</span>
      <span className={`schedule__tag tag tag--${past ? 'default' : 'green'}`}>
        {race.discipline}
      </span>
    </li>
  )
}
