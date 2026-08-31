/*
  Race schedule — update this file to add, remove, or edit races.
  status: 'upcoming' | 'completed'
  links:  array of { label, url } — url: null shows the label as pending (no link yet)
*/
export const schedule = [
  {
    id:         'taurus-mountain-race-2026',
    name:       'Taurus Mountain Race',
    date:       'Oct 14–24, 2026',
    location:   'Antalya to Mersin, Türkiye',
    discipline: 'Bikepacking',
    status:     'upcoming',
    url:        'http://www.themountainraces.cc/taurus-mountain-race',
    links:      [],
  },
  {
    id:         'pdx-trophy-cup-2026',
    name:       'PDX Trophy Cup Series',
    date:       'Sep 8–Oct 13, 2026',
    location:   'Portland, OR',
    discipline: 'Cyclocross',
    status:     'upcoming',
    url:        null,
    links:      [],
  },
  {
    id:         'breck-epic-2026',
    name:       'Breck Epic',
    date:       'Aug 9–14, 2026',
    location:   'Breckenridge, CO',
    discipline: 'XC MTB',
    status:     'completed',
    url:        null,
    links:      [],
  },
  {
    id:         'foco-fondo-2026',
    name:       'FoCo Fondo',
    date:       'Jul 19, 2026',
    location:   'Fort Collins, CO',
    discipline: 'Gravel',
    status:     'completed',
    url:        null,
    links:      [],
  },
  {
    id:         'stagecoach-2026',
    name:       'Stagecoach 400',
    date:       'Apr 4–7, 2026',
    location:   'Idyllwild, CA',
    discipline: 'Bikepacking',
    status:     'completed',
    url:        null,
    links:      [{ label: 'Pack List', url: '/blog/stagecoach-400-kit-list' }],
  },
  {
    id:         'midsouth-2026',
    name:       'MidSouth Gravel',
    date:       'Mar 13, 2026',
    location:   'Stillwater, OK',
    discipline: 'Gravel',
    status:     'completed',
    url:        null,
    links:      [{ label: 'Recap', url: '/blog/midsouth-2026' }],
  },
]
