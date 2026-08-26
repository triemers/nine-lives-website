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
      <span className="schedule__name">{race.name}</span>
      <span className="schedule__location">{race.location}</span>
      <span className={`tag tag--${past ? 'default' : 'green'}`}>
        {race.discipline}
      </span>
      {race.blogPostUrl && (
        <a
          href={race.blogPostUrl}
          className="btn btn--ghost btn--sm"
        >
          Read Recap →
        </a>
      )}
    </li>
  )
}
