import { roversCards } from '../../data/roversData'
import { engineeringPage } from '../../data/navigationData'
import FeatureCard from '../ui/FeatureCard'
import EngineeringLink from '../ui/EngineeringLink'
import Reveal, { StaggerItem, StaggerReveal } from '../ui/Reveal'

export default function AutonomousRovers() {
  return (
    <section
      id="rovers"
      className="relative scroll-mt-24 bg-[#060c12] px-8 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl md:mb-16">
          <header>
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/60">
              Autonomous Rovers
            </p>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Self-navigating units for extreme depths
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
              Purpose-built underwater androids that operate independently — mapping,
              inspecting, and executing missions where human presence is impossible.{' '}
              <EngineeringLink className="inline tracking-[0.14em]">
                {engineeringPage.ctaHow} →
              </EngineeringLink>
            </p>
          </header>
        </Reveal>

        <StaggerReveal className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {roversCards.map((card, i) => (
            <StaggerItem
              key={card.id}
              className={[
                'h-full',
                roversCards.length % 2 !== 0 && i === roversCards.length - 1
                  ? 'md:col-span-2 lg:col-span-1'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <FeatureCard {...card} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
