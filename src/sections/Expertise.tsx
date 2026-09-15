import { motion, useReducedMotion } from 'framer-motion'
import { ScanLine, Brain, Sparkles, MessageCircle, Plug, FileText, Server, Cloud, Mic } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import { expertise } from '../data/resume'

const iconMap: Record<string, typeof ScanLine> = {
  scan: ScanLine,
  brain: Brain,
  sparkles: Sparkles,
  message: MessageCircle,
  plug: Plug,
  file: FileText,
  server: Server,
  cloud: Cloud,
  mic: Mic,
}

const accents = ['#22d3ee', '#a78bfa', '#4ade80', '#f472b6', '#60a5fa', '#f59e0b', '#34d399', '#22d3ee', '#f472b6']

function ExpertiseCard({ item, index }: { item: typeof expertise[number]; index: number }) {
  const Icon = iconMap[item.icon] ?? ScanLine
  const accent = accents[index % accents.length]
  const reduced = useReducedMotion()

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <motion.article
        className="group relative h-full overflow-hidden rounded-2xl border border-line-soft bg-ink-900/60 p-6 transition-colors hover:border-brand-400/30"
        whileHover={reduced ? {} : { y: -3 }}
        transition={{ duration: 0.25 }}
      >
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: accent }}
          aria-hidden="true"
        />

        <span
          className="grid h-12 w-12 place-items-center rounded-xl border transition-colors"
          style={{
            borderColor: `${accent}35`,
            backgroundColor: `${accent}10`,
            color: accent,
          }}
        >
          <Icon size={22} aria-hidden="true" />
        </span>

        <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#aeb6c8]">{item.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <Tag key={t} color={accent}>
              {t}
            </Tag>
          ))}
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Expertise() {
  return (
    <section id="expertise" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="AI/ML Expertise"
          title="The engineering capabilities behind the systems"
          description="Deep expertise across the AI pipeline — from model architectures and cloud infrastructure to conversational safety and real-time voice."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => (
            <ExpertiseCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}