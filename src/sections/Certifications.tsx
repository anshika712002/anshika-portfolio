import { BadgeCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/resume'

export default function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="07"
          eyebrow="Certification"
          title="Certifications"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="group flex h-full items-start gap-5 rounded-2xl border border-line-soft bg-ink-900/60 p-7 transition-colors hover:border-brand-400/30">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                  <BadgeCheck size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#aeb6c8]">{c.issuer}</p>
                  <p className="mt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-300">
                      {c.year}
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}