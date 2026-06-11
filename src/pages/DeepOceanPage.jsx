import DeepOceanHero from '../components/deep-ocean/DeepOceanHero'
import DepthZones from '../components/deep-ocean/DepthZones'
import ObservationStats from '../components/deep-ocean/ObservationStats'

export default function DeepOceanPage() {
  return (
    <main className="deep-ocean-page">
      <DeepOceanHero />
      <DepthZones />
      <ObservationStats />
    </main>
  )
}
