import { depthZones } from '../../data/deepOceanData'
import Reveal, { StaggerItem, StaggerReveal } from '../ui/Reveal'

export default function DepthZones() {
  return (
    <section className="relative -mt-px bg-[#060c12] px-8 py-24 md:px-12 md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal className="mb-14 md:mb-16">
          <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/60">
            Depth profile
          </p>
          <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
            Five depth bands, five distinct worlds
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            Each zone demands different instruments, different operating protocols,
            and different scientific objectives. Our platforms are rated across all five.
          </p>
        </Reveal>

        <StaggerReveal className="deep-ocean-timeline flex flex-col gap-10 md:gap-12" stagger={0.1}>
          {depthZones.map(({ id, range, name, description, image, imageAlt, imagePosition = 'object-center' }) => (
            <StaggerItem key={id}>
              <article className="deep-ocean-timeline__item flex gap-6 md:gap-8">
                <div className="flex flex-col items-center pt-1.5">
                  <span className="deep-ocean-timeline__dot" aria-hidden="true" />
                </div>
                <div className="flex-1 pb-2">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-sky-400/60">
                    {range}
                  </span>
                  <h3 className="mt-2 font-sans text-sm font-medium uppercase tracking-[0.14em] text-white">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{description}</p>
                  {image && (
                    <div className="mt-5 overflow-hidden border border-white/8">
                      <img
                        src={image}
                        alt={imageAlt}
                        className={`h-48 w-full object-cover opacity-75 transition-opacity duration-500 hover:opacity-100 ${imagePosition}`}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
