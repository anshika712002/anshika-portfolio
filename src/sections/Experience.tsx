import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import { jobs } from '../data/resume'
import type { Job, JobProject } from '../data/resume'

function ProjectCard({ project, accent }: { project: JobProject; accent: string }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="rounded-xl border border-line-soft bg-ink-900/70 transition-colors hover:border-brand-400/25">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-[0.95rem] font-semibold text-white">
          {project.title}
        </span>
        <span className="flex shrink-0 items-center gap-2 text-muted">
          <span className="hidden font-mono text-[0.62rem] tracking-widest uppercase sm:inline">
            {open ? 'hide scope' : 'view scope'}
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={16} aria-hidden="true" />
          </motion.span>
        </span>
      </button>

      <p className="px-5 pb-4 text-sm leading-relaxed text-[#aeb6c8]">{project.summary}</p>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 border-t border-line-soft px-5 py-4">
              {project.achievements.map((a) => (
                <li key={a} className="flex gap-3 text-sm leading-relaxed text-[#c3cad9]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 px-5 pb-5">
              {project.tech.map((t) => (
                <Tag key={t} color="#67e8f9">
                  {t}
                </Tag>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  )
}

function TimelineItem({ job, index }: { job: Job; index: number }) {
  const accent = job.current ? '#22d3ee' : '#a78bfa'

  return (
    <Reveal delay={0.06 * index} className="relative pl-10 sm:pl-12">
      <span
        className="absolute left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 bg-ink-950"
        style={{ borderColor: accent }}
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.68rem] tracking-wide"
          style={{ borderColor: `${accent}40`, color: accent, backgroundColor: `${accent}0d` }}
        >
          <Briefcase size={12} aria-hidden="true" />
          {job.title}
        </span>
        <span className="font-mono text-xs text-muted">{job.period}</span>
        <span className="rounded-full border border-emerald-400/25 bg-emerald-400/5 px-2.5 py-0.5 font-mono text-[0.62rem] tracking-wide text-emerald-300">
          {job.current ? 'current' : 'completed'}
        </span>
      </div>

      <h3 className="font-display mt-3 text-xl font-semibold text-white">
        {job.company}
        <span className="ml-2 font-sans text-sm font-normal text-muted">
          &middot; {job.companyLocation}
        </span>
      </h3>

      <div className="mt-5 grid gap-3">
        {job.projects.map((p) => (
          <ProjectCard key={p.title} project={p} accent={accent} />
        ))}
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've built AI in production"
          description="Three engineering roles across computer vision, conversational AI and full-stack ML systems — each project shipped to real users."
        />

        <div className="relative grid gap-14 pl-0 lg:gap-16">
          <div
            className="absolute top-2 bottom-2 left-[5px] w-px glow-line opacity-80 sm:left-[9px]"
            aria-hidden="true"
          />
          <div className="space-y-14">
            {jobs.map((job, i) => (
              <TimelineItem key={job.company} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}