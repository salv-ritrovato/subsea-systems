import DeepOceanHero from '../components/deep-ocean/DeepOceanHero'
import DepthZones from '../components/deep-ocean/DepthZones'
import ObservationStats from '../components/deep-ocean/ObservationStats'
import PageMeta from '../components/ui/PageMeta'
import { siteConfig } from '../data/siteConfig'

export default function DeepOceanPage() {
  const { title, description } = siteConfig.pages.deepOcean
  return (
    <main className="deep-ocean-page">
      <PageMeta title={title} description={description} />
      <DeepOceanHero />
      <DepthZones />
      <ObservationStats />
    </main>
  )
}
