import { Link } from 'react-router-dom'
import '../../styles/footer.scss'

const NAV_LINKS = [
  { to: '/',      label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/media', label: 'Media' },
  { to: '/blog',  label: 'The Scratching Post' },
  { to: '/merch', label: 'Merch' },
]

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/nine_lives_cycling', label: 'Instagram' },
  { href: 'https://youtube.com',                      label: 'YouTube' },
  { href: 'https://strava.com',                       label: 'Strava' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__inner">

          <div className="footer__brand">
            <p className="footer__brand-name">Nine Lives</p>
            <p className="footer__brand-tagline">
              An elite women's and gender expansive cycling collective.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <p className="footer__nav-label">Pages</p>
            <ul className="footer__nav-list">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__nav-link">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social">
            <p className="footer__social-label">Follow</p>
            <div className="footer__social-links">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Nine Lives Cycling Collective. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
