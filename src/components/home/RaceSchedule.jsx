import { schedule } from '../../data/schedule'
import '../../styles/home.css'

const upcoming  = schedule.filter((r) => r.status === 'upcoming')
const completed = schedule.filter((r) => r.status === 'completed')

export default function RaceSchedule() {
  return (
    <section className="schedule section">
      <div className="container">

        <div className="schedule__header">
          <p className="schedule__label">2026 Race Calendar</p>
        </div>
        <ul className="schedule__list">
          {upcoming.map((race) => <RaceRow key={race.id} race={race} />)}
        </ul>

        <div className="schedule__header" style={{ marginTop: 'var(--space-16)' }}>
          <p className="schedule__label">Past Races</p>
        </div>
        <ul className="schedule__list">
          {completed.map((race) => <RaceRow key={race.id} race={race} past />)}
        </ul>

      </div>
    </section>
  )
}

function RaceRow({ race, past = false }) {
  return (
    <li className={`schedule__race${past ? ' schedule__race--past' : ''}`}>
      <span className="schedule__date">{race.date}</span>
      <span className="schedule__name">{race.name}</span>
      <span className="schedule__location">{race.location}</span>
      <span className={`tag tag--${past ? 'default' : 'green'}`}>
        {race.discipline}
      </span>
      {race.blogPostUrl && (
        <a
          href={race.blogPostUrl}
          className="btn btn--ghost"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          Read Recap →
        </a>
      )}
    </li>
  )
}
