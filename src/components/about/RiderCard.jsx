import '../../styles/rider-card.scss'

// Riders without a photo (the ones still to be announced) get a "?" over the
// artwork; pronouns, bio and disciplines only show when the rider has them.
export default function RiderCard({ rider }) {
  return (
    <article className="rider-card">
      <span className="rider-card__number" aria-hidden="true">{rider.number}</span>
      <div className="rider-card__photo-wrap">
        {rider.photo ? (
          <img
            src={rider.photo}
            alt={rider.name}
            className="rider-card__photo"
            style={{ objectPosition: rider.photoPosition }}
          />
        ) : (
          <div className="rider-card__photo rider-card__photo--tba" aria-hidden="true">?</div>
        )}
      </div>
      <div className="rider-card__body">
        <div>
          <h3 className="rider-card__name">{rider.name}</h3>
          {rider.pronouns && <p className="rider-card__pronouns">{rider.pronouns}</p>}
        </div>
        {rider.bio && <p className="rider-card__bio">{rider.bio}</p>}
        {rider.disciplines?.length > 0 && (
          <div className="rider-card__tags">
            {rider.disciplines.map(d => (
              <span key={d} className="tag tag--lime">{d}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
