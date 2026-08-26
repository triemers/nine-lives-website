import btdLogo      from '../assets/sponsors/btd.png'
import castelliLogo  from '../assets/sponsors/castelli.png'
import athleticLogo  from '../assets/sponsors/athletic.png'

/*
  To add a logo: drop the file in src/assets/sponsors/, import it above,
  and set the logo field below. Set logo to null to show name as text fallback.
  filterMode:
    'invert' — white logos on dark background (black-on-light source files)
    'none'   — logo is already designed for dark backgrounds
*/
export const sponsors = [
  {
    id:         'btd',
    name:       'Bike Tires Direct',
    logo:       btdLogo,
    filterMode: 'none',
    url:        'https://www.biketiresdirect.com',
  },
  {
    id:         'castelli',
    name:       'Castelli',
    logo:       castelliLogo,
    filterMode: 'invert',
    url:        'https://www.castelli-cycling.com',
  },
  {
    id:         'athletic',
    name:       'Athletic Brewing',
    logo:       athleticLogo,
    filterMode: 'invert',
    url:        'https://theathleticcommunity.com',
  },
  {
    id:         'kuat',
    name:       'Kuat Racks',
    logo:       null,   // drop logo file in src/assets/sponsors/kuat.png and import above
    filterMode: 'invert',
    url:        'https://kuat.com',
  },
]
