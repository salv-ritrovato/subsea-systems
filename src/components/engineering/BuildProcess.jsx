import { buildPhases } from '../../data/engineeringData'
import Reveal, { StaggerItem, StaggerReveal } from '../ui/Reveal'

export default function BuildProcess() {
  return (
    <section className="relative -mt-px bg-[#060c12] px-8 py-24 md:px-12 md:py-32">
      <div className="engineering-fade-bottom engineering-fade-bottom--to-video" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal className="mb-14 md:mb-16">
          <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            Build process
          </p>
          <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
            From CAD to certified depth
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            Five controlled phases — every unit traceable from raw titanium stock to
            mission-ready deployment.
          </p>
        </Reveal>

        <StaggerReveal className="subsea-timeline flex flex-col gap-10 md:gap-12" stagger={0.1}>
          {buildPhases.map(({ id, phase, title, description }) => (
            <StaggerItem key={id}>
              <article className="subsea-timeline__item flex gap-6 md:gap-8">
                <div className="flex flex-col items-center pt-1.5">
                  <span className="subsea-timeline__dot" aria-hidden="true" />
                </div>
                <div className="pb-2">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-sky-400/60">
                    Phase {phase}
                  </span>
                  <h3 className="mt-2 font-sans text-sm font-medium uppercase tracking-[0.14em] text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
