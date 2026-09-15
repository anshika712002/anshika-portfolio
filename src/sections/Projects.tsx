import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import ProjectVisual from '../components/ProjectVisual'
import { projects } from '../data/resume'

type Project = (typeof projects)[number]

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line-soft bg-ink-850 px-3 py-2">
      <div className="font-mono text-base font-semibold" style={{ color: '#67e8f9' }}>
        {value}
      </div>
      <div className="mt-0.5 text-[0.64rem] leading-tight text-muted">{label}</div>
    </div>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-line-soft bg-ink-900/70 transition-colors hover:border-brand-400/30 lg:grid-cols-2">
      <div className="relative overflow-hidden">
        <ProjectVisual visual={project.visual!} accent={project.accent} />
        <div className="absolute top-4 left-4 z-10">
          <span
            className="rounded-md border px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.2em] uppercase"
            style={{ borderColor: `${project.accent}40`, color: project.accent, backgroundColor: `${project.accent}12` }}
          >
            Featured
          </span>
        </div>
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs tracking-wide text-brand-300">{project.tagline}</p>
        </div>

        <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#aeb6c8]">
          <p>
            <span className="font-semibold text-white">Problem. </span>
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-white">My part. </span>
            {project.contribution}
          </p>
          <p>
            <span className="font-semibold" style={{ color: project.accent }}>
              Outcome.&nbsp;
            </span>
            {project.achievement}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <Metric key={m.label} label={m.label} value={m.value} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t} color={project.accent}>
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  )
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-soft bg-ink-900/70 transition-all hover:-translate-y-1 hover:border-brand-400/30">
      <div className="relative overflow-hidden">
        <ProjectVisual visual={project.visual!} accent={project.accent} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-white">{project.name}</h3>
        <p className="mt-1 font-mono text-[0.7rem] tracking-wide" style={{ color: project.accent }}>
          {project.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#aeb6c8]">
          <span className="font-semibold text-white">Problem. </span>
          {project.problem}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#aeb6c8]">
          <span className="font-semibold text-white">My part. </span>
          {project.contribution}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#aeb6c8]">
          <span className="font-semibold" style={{ color: project.accent }}>
            Outcome.&nbsp;
          </span>
          {project.achievement}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {project.metrics.map((m) => (
            <Metric key={m.label} label={m.label} value={m.value} />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line-soft pt-5">
          {project.tech.map((t) => (
            <Tag key={t} color={project.accent}>
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => ['planwise', 'spill'].includes(p.id!)) as Project[]
  const compact = projects.filter((p) => !['planwise', 'spill'].includes(p.id!)) as Project[]

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 md:py-28">
      <div
        className="absolute top-1/4 right-[-260px] h-[460px] w-[560px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(167,139,250,0.5), transparent)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Featured Projects"
          title="Systems I've designed, trained and shipped"
          description="Model work, deployment and product engineering — measured by the accuracy and efficiency the systems actually achieved."
        />

        <div className="space-y-8">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <FeaturedCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {compact.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <CompactCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}