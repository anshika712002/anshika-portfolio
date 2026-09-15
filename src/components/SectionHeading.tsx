import Reveal from './Reveal'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 max-w-2xl md:mb-16">
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-brand-400 uppercase">
        <span className="text-muted">{index}</span>
        <span className="h-px w-10 glow-line" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-gradient-white sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </Reveal>
  )
}