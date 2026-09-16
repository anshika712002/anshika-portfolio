import { Cpu, Database, GitBranch, Mic, ScanLine, Layers, BrainCircuit, TerminalSquare } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/resume'

const iconMap: Record<string, typeof Cpu> = {
  'ml-ai': BrainCircuit,
  vision: ScanLine,
  programming: TerminalSquare,
  backend: Layers,
  cloud: Database,
  conversational: Mic,
  tools: GitBranch,
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden scroll-mt-24 py-20 md:py-28">
      <div
        className="absolute top-1/3 left-[-240px] h-[420px] w-[520px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.5), transparent)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Technical Skills"
          title="The stack I build with"
          description="A working, production-oriented toolkit — model training, computer vision, LLM systems, voice AI, cloud infrastructure and the APIs that connect them."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.id] ?? Cpu
            return (
              <Reveal key={group.id} delay={(i % 3) * 0.08}>
                <article className="group h-full rounded-xl border border-line-soft bg-ink-900/60 p-6 transition-colors hover:border-brand-400/30">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-ink-800 text-brand-300 transition-colors group-hover:border-brand-400/50 group-hover:bg-brand-400/10">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-white">{group.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{group.description}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-line-soft bg-ink-850 px-2 py-1 text-[0.7rem] text-[#aeb6c8] transition-colors hover:border-brand-400/40 hover:text-brand-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}