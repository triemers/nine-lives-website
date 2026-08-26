import { sponsors } from '../../data/sponsors'
import '../../styles/sponsors.scss'

export default function SponsorSection() {
  return (
    <section className="sponsors section">
      <div className="container">
        <h2 className="sponsors__heading display-lg">Supported By</h2>
        <div className="sponsors__row">
          {sponsors.map((sponsor) => (
            <SponsorLogo key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SponsorLogo({ sponsor }) {
  const content = sponsor.logo ? (
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      className={`sponsors__logo${sponsor.filterMode === 'invert' ? ' sponsors__logo--invert' : ''}`}
    />
  ) : (
    <span className="sponsors__name-fallback">{sponsor.name}</span>
  )

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        className="sponsors__item"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={sponsor.name}
      >
        {content}
      </a>
    )
  }

  return <div className="sponsors__item">{content}</div>
}
