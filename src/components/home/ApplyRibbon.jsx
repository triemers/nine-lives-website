import { APPLICATION_URL, APPLICATION_YEAR, APPLICATION_DEADLINE, APPLICATION_SPOTS_OPEN } from '../../data/application'
import '../../styles/apply-ribbon.scss'

export default function ApplyRibbon() {
  return (
    <a
      href={APPLICATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="apply-ribbon"
    >
      <span className="apply-ribbon__text">
        {APPLICATION_YEAR} Team Applications Open — {APPLICATION_SPOTS_OPEN} Spots Left — Closes {APPLICATION_DEADLINE}
      </span>
      <span className="apply-ribbon__cta">Apply Now →</span>
    </a>
  )
}
