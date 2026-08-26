import Hero            from '../components/home/Hero'
import Ticker          from '../components/shared/Ticker'
import MissionStatement from '../components/home/MissionStatement'
import RaceSchedule    from '../components/home/RaceSchedule'
import SponsorSection  from '../components/home/SponsorSection'

const TICKER_ITEMS = [
  'Nine Lives Cycling Collective',
  'Femmes & Themmes',
  '2026 Race Season',
  'Founded 2025',
]

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <MissionStatement />
      <RaceSchedule />
      <SponsorSection />
    </main>
  )
}
