import { schedule } from '../../data/schedule'
import '../../styles/home.css'

export default function RaceSchedule() {
  return (
    <section className="schedule section">
      <div className="container">

        <div className="schedule__header">
          <p className="schedule__label">2026 Race Calendar</p>
        </div>

        <ul className="schedule__list">
          {schedule.map((race) => (
            <RaceRow key={race.id} race={race} />
          ))}
        </ul>

      </div>
    </section>
  )
}

function RaceRow({ race }) {
  const inner = (
    <>
      <span
        className={`schedule__status-dot schedule__status-dot--${race.status}`}
        aria-label={race.status}
      />
      <span className="schedule__date">{race.date}</span>
      <span className="schedule__name">{race.name}</span>
      <span className="schedule__location">{race.location}</span>
      <span className={`tag tag--${race.status === 'upcoming' ? 'green' : 'default'}`}>
        {race.discipline}
      </span>
    </>
  )

  return (
    <li className="schedule__race">
      {race.url ? (
        <a
          href={race.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'contents' }}
          aria-label={`${race.name} — ${race.date}`}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  )
}
