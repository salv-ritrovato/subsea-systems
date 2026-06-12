import { serviceBlocks } from '../../data/supportData'
import { siteConfig } from '../../data/siteConfig'
import ServiceBlock from '../ui/ServiceBlock'
import ContactForm from '../ui/ContactForm'
import FaqAccordion from '../ui/FaqAccordion'
import Reveal, { StaggerItem, StaggerReveal } from '../ui/Reveal'
import './support.css'

export default function Support() {
  const { email, phone, phoneHref, hours } = siteConfig.contact

  return (
    <section
      id="support"
      className="support-section scroll-mt-24 px-8 pb-8 pt-20 md:px-12 md:pb-12 md:pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center md:mb-16">
          <header>
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/60">
              Support
            </p>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Mission-ready support, worldwide
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
              From first deployment to active operations — engineering assistance,
              training, and maintenance built for subsea mission continuity.
            </p>
            <div className="support-section__line mx-auto mt-10 max-w-xs" aria-hidden="true" />
          </header>
        </Reveal>

        <StaggerReveal className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mb-20">
          {serviceBlocks.map((block) => (
            <StaggerItem key={block.id} className="h-full">
              <ServiceBlock {...block} />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="slideRight">
            <ContactForm />
          </Reveal>

          <Reveal className="flex flex-col gap-8" delay={0.1} variant="slideLeft">
            <aside className="flex flex-col gap-8">
              <div className="support-contact__detail pl-5">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                  Direct contact
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-3 block font-sans text-sm text-sky-400/90 transition-opacity duration-300 hover:opacity-70"
                >
                  {email}
                </a>
                <a
                  href={phoneHref}
                  className="mt-2 block font-sans text-sm text-white/60 transition-opacity duration-300 hover:text-white/80"
                >
                  {phone}
                </a>
                <p className="mt-2 font-sans text-xs text-white/40">{hours}</p>
              </div>

              <div>
                <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                  Frequently asked
                </p>
                <FaqAccordion />
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
