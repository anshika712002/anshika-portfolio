import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { aboutParagraphs, profile, softSkills } from '../data/resume'

const quickFacts = [
  { label: 'Experience', value: '2+ years' },
  { label: 'Focus', value: 'AI/ML Engineering' },
  { label: 'Projects shipped', value: '6 production systems' },
  { label: 'Base', value: profile.location },
]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title="An engineer who ships intelligent systems" />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            {quickFacts.map((f) => (
              <Reveal
                key={f.label}
                delay={0.05}
                className="flex items-baseline justify-between rounded-xl border border-line-soft bg-ink-900/50 px-5 py-4"
              >
                <span className="text-sm text-muted">{f.label}</span>
                <span className="font-mono text-right text-sm font-medium text-brand-300">{f.value}</span>
              </Reveal>
            ))}

            <Reveal delay={0.15} className="rounded-xl border border-line-soft bg-ink-900/50 p-5">
              <h3 className="font-mono text-xs tracking-widest text-muted uppercase">Soft skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-ink-800 px-3 py-1 text-xs text-[#c3cad9]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={p.heading} delay={i * 0.08}>
                <h3 className="mb-2.5 font-display text-lg font-semibold text-white">
                  <span className="mr-2 font-mono text-brand-400/70 text-sm">0{i + 1}.</span>
                  {p.heading}
                </h3>
                <p className="leading-relaxed text-[#b9c2d4]">{p.body}</p>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2.5 border-t border-line-soft pt-6">
                {['Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI', 'Conversational AI', 'LLM Integration', 'AI Deployment', 'Production AI'].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-md border border-brand-400/20 bg-brand-400/5 px-3 py-1.5 font-mono text-[0.68rem] tracking-wide text-brand-300"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}