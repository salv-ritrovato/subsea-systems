import EngineeringHero from '../components/engineering/EngineeringHero'
import BuildProcess from '../components/engineering/BuildProcess'
import EngineeringVideo from '../components/engineering/EngineeringVideo'
import EngineeringStandards from '../components/engineering/EngineeringStandards'
import PageMeta from '../components/ui/PageMeta'
import { siteConfig } from '../data/siteConfig'

export default function EngineeringPage() {
  const { title, description } = siteConfig.pages.engineering
  return (
    <main className="engineering-page">
      <PageMeta title={title} description={description} />
      <EngineeringHero />
      <BuildProcess />
      <EngineeringVideo />
      <EngineeringStandards />
    </main>
  )
}
