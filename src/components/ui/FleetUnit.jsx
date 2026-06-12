import { Link } from 'react-router-dom'

/**
 * Single fleet unit — diagonal image panel + technical spec dossier.
 */
export default function FleetUnit({
  slug,
  name,
  tagline,
  image,
  imageAlt,
  description,
  specs,
  accent,
  reverse = false,
  index,
}) {
  return (
    <article
      className={[
        'fleet-unit group',
        `fleet-unit--${accent}`,
        reverse ? 'fleet-unit--reverse' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="fleet-unit__accent" aria-hidden="true" />

      <div className="fleet-unit__visual">
        <img
          src={image}
          alt={imageAlt}
          className="fleet-unit__image absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#020508]/60 via-transparent to-[#020508]/30 lg:from-[#020508]/40"
          aria-hidden="true"
        />
      </div>

      <div className="fleet-unit__content flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
        <span className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
          Unit {String(index).padStart(2, '0')}
        </span>

        <h3 className="font-serif text-3xl font-light text-white lg:text-4xl">{name}</h3>
        <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
          {tagline}
        </p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">{description}</p>

        <Link
          to={`/fleet/${slug}`}
          className="mt-7 inline-block font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-white/80"
        >
          Full specifications →
        </Link>

        <dl className="mt-8 grid grid-cols-2 gap-3">
          {specs.map(({ label, value }) => (
            <div key={label} className="fleet-spec px-4 py-3">
              <dt className="font-sans text-[9px] font-medium uppercase tracking-[0.15em] text-white/35">
                {label}
              </dt>
              <dd className="fleet-spec__value mt-1.5 font-serif text-2xl font-light text-white/90">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
