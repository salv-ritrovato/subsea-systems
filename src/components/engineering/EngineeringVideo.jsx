import { engineeringVideo } from '../../data/engineeringData'
import Reveal from '../ui/Reveal'
import './engineering.css'

export default function EngineeringVideo() {
  const { src, poster, label, title, description, highlights } = engineeringVideo

  return (
    <section className="engineering-video relative">
      {/* Gradient bridge — #060c12 (build) → #030609 before video pixels */}
      <div className="engineering-video__bridge" aria-hidden="true" />

      <div className="relative aspect-video min-h-[420px] w-full overflow-hidden md:min-h-[520px] lg:min-h-[600px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />

        <div className="engineering-video__fade-top" aria-hidden="true" />
        <div className="engineering-video__fade-bottom" aria-hidden="true" />

        <div
          className="absolute inset-0 z-[3] bg-gradient-to-r from-[#030609]/85 via-[#030609]/35 to-transparent"
          aria-hidden="true"
        />

        <div className="engineering-video__grid absolute inset-0 z-[3]" aria-hidden="true" />

        <div className="relative z-10 flex h-full items-center">
          <Reveal className="mx-auto w-full max-w-6xl px-8 py-12 md:px-12 md:py-16">
            <p className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/70">
              {label}
            </p>
            <h2 className="max-w-2xl font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {description}
            </p>
            <ul className="mt-10 space-y-3.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.16em] text-white/55 before:h-px before:w-5 before:shrink-0 before:bg-sky-400/55 before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
