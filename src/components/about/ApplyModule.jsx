import { APPLICATION_URL } from '../../data/application'

export default function ApplyModule() {
  return (
    <section className="apply-module section">
      <div className="container">
        <div className="apply-module__box">
          <h2 className="apply-module__title">Team Applications Open!</h2>
          <div className="apply-module__body">
            <p>Want to join our squad of elite Femmes and Themmes for next year? Apply now.</p>
            <p>We're interested in process as well as results, so shoot your shot, even if your history is predominantly in a different endurance sport. Feel free to reach out with any questions you might have on Instagram.</p>
            <p>Application deadline is November 1st — offers will be sent out November 15th.</p>
          </div>
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gradient apply-module__cta"
          >
            <span>Apply Now →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
