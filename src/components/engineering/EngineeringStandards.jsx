import { Link } from 'react-router-dom'
import { engineeringStandards } from '../../data/engineeringData'
import Reveal from '../ui/Reveal'

export default function EngineeringStandards() {
  return (
    <section className="relative -mt-px bg-[#060c12] px-8 pb-24 pt-16 md:px-12 md:pb-32 md:pt-20">
      <div className="engineering-fade-bottom engineering-fade-bottom--to-footer" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              Standards
            </p>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Built to survive the pressure
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Every hull, seal, and sensor package is validated beyond rated operating
              depth — because failure at 4,000 metres is not an option.
            </p>
            <Link
              to="/#support"
              className="mt-8 inline-block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/80 transition-opacity duration-300 hover:opacity-70"
            >
              Contact engineering →
            </Link>
          </Reveal>

          <Reveal delay={0.1} variant="fadeIn">
            <div className="data-grid">
              {engineeringStandards.map(({ id, title, value }) => (
                <div key={id} className="data-grid__cell">
                  <p className="font-sans text-[9px] font-medium uppercase tracking-[0.15em] text-white/35">
                    {title}
                  </p>
                  <p className="mt-2 font-sans text-sm font-medium leading-snug text-white/85">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
