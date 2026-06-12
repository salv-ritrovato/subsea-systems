import Hero from '../components/sections/Hero'
import AutonomousRovers from '../components/sections/AutonomousRovers'
import DeepSeaExploration from '../components/sections/DeepSeaExploration'
import Fleet from '../components/sections/Fleet'
import Support from '../components/sections/Support'
import SectionBlend from '../components/ui/SectionBlend'
import PageMeta from '../components/ui/PageMeta'
import { siteConfig } from '../data/siteConfig'

export default function HomePage() {
  const { title, description } = siteConfig.pages.home
  return (
    <main>
      <PageMeta title={title} description={description} />
      <Hero />
      <AutonomousRovers />
      <SectionBlend variant="rovers-exploration" />
      <DeepSeaExploration />
      <SectionBlend variant="exploration-fleet" />
      <Fleet />
      <SectionBlend variant="fleet-support" />
      <Support />
    </main>
  )
}
