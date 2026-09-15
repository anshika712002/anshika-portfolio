import { GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Education"
          title="Education"
          description="Foundations in computer applications that came before — and shaped — the AI/ML work."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line-soft bg-ink-900/60 p-7 transition-colors hover:border-brand-400/30">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink-800 text-brand-300">
                    <GraduationCap size={20} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-line bg-ink-800 px-3 py-1 font-mono text-xs text-muted">
                    {e.period}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold text-white">{e.degree}</h3>
                <p className="mt-1.5 text-sm font-medium text-brand-300">{e.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#aeb6c8]">{e.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}