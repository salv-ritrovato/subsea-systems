/**
 * Single support service block — numbered, minimal.
 */
export default function ServiceBlock({ index, title, description }) {
  return (
    <article className="service-block flex h-full flex-col border border-white/6 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.04] md:p-7">
      <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
        {index}
      </span>
      <h3 className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.16em] text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/55">{description}</p>
    </article>
  )
}
