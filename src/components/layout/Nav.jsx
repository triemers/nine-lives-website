import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/nav.scss'

const NAV_LINKS = [
  { to: '/',      label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog',  label: 'The Scratching Post' },
  { to: '/merch', label: 'Merch' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav__inner">

        <NavLink to="/" className="nav__logo" onClick={closeMenu}>
          <span className="nav__logo-full">Nine Lives Cycling Collective</span>
          <span className="nav__logo-short">Nine Lives</span>
        </NavLink>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul
          id="nav-links"
          className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' nav__link--active' : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}
