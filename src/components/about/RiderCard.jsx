export default function RiderCard({ rider }) {
  return (
    <article className="rider-card">
      <span className="rider-card__number" aria-hidden="true">{rider.number}</span>
      <div className="rider-card__photo-wrap">
        <img
          src={rider.photo}
          alt={rider.name}
          className="rider-card__photo"
          style={{ objectPosition: rider.photoPosition }}
        />
      </div>
      <div className="rider-card__body">
        <div>
          <h3 className="rider-card__name">{rider.name}</h3>
          <p className="rider-card__pronouns">{rider.pronouns}</p>
        </div>
        <p className="rider-card__bio">{rider.bio}</p>
        <div className="rider-card__tags">
          {rider.disciplines.map(d => (
            <span key={d} className="tag tag--filled tag--green">{d}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
