import ApplyRibbon      from '../components/home/ApplyRibbon'
import Hero             from '../components/home/Hero'
import Ticker           from '../components/shared/Ticker'
import MissionStatement from '../components/home/MissionStatement'
import RaceSchedule     from '../components/home/RaceSchedule'
import MediaStrip       from '../components/home/MediaStrip'
import SponsorSection   from '../components/home/SponsorSection'
import btdLogo          from '../assets/sponsors/btd.png'
import castelliLogo     from '../assets/sponsors/castelli.png'
import athleticLogo     from '../assets/sponsors/athletic.png'

const TICKER_ITEMS = [
  'Nine Lives Cycling Collective',
  { logo: btdLogo,      name: 'Bike Tires Direct', size: 'lg' },
  'Femmes & Themmes',
  { logo: castelliLogo, name: 'Castelli' },
  'Founded 2025',
  { logo: athleticLogo, name: 'The Athletic Community', crop: true },
]

export default function Home() {
  return (
    <main className="page">
      <ApplyRibbon />
      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <MissionStatement />
      <RaceSchedule />
      <MediaStrip />
      <SponsorSection />
    </main>
  )
}
