import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import { LinkedInIcon } from '../components/icons'
import { profile } from '../data/resume'

function NetworkGraph() {
  const nodes = [
    { x: 120, y: 60 },
    { x: 250, y: 36 },
    { x: 380, y: 70 },
    { x: 168, y: 150 },
    { x: 330, y: 150 },
    { x: 260, y: 220 },
  ]
  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [3, 4],
    [2, 4],
    [3, 5],
    [4, 5],
  ]
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Neural network nodes representing machine learning systems">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#22d3ee"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.2 + i * 0.1 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="7"
            fill="#0e0e18"
            stroke={i === 0 ? '#a78bfa' : '#22d3ee'}
            strokeWidth="2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.35 }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="15"
            fill="none"
            stroke={i === 0 ? '#a78bfa' : '#22d3ee'}
            strokeWidth="1"
            strokeOpacity="0.25"
            animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0, 0.35] }}
            transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.35 }}
          />
        </motion.g>
      ))}
    </svg>
  )
}

function InferenceCard() {
  const detections = [
    { label: 'helmet', conf: 0.95 },
    { label: 'electrical_symbol', conf: 0.8 },
    { label: 'garment', conf: 0.95 },
  ]
  return (
    <div className="card-surface relative w-full max-w-sm overflow-hidden p-4 shadow-glow-soft">
      <div className="flex items-center justify-between border-b border-line-soft pb-2.5">
        <span className="flex items-center gap-2 font-mono text-[0.66rem] tracking-widest text-muted uppercase">
          <span className="h-2 w-2 rounded-full bg-brand-400" aria-hidden="true" />
          inference.run
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
      </div>
      <div className="mt-3 space-y-2.5 font-mono text-[0.72rem]">
        {detections.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.25 }}
            className="flex items-center gap-3"
          >
            <span className="w-1.5 self-stretch rounded-full" style={{ background: i === 1 ? '#a78bfa' : '#22d3ee' }} aria-hidden="true" />
            <span className="w-44 truncate text-[#b9c2d4]">{d.label}</span>
            <span className="ml-auto text-brand-300">{Math.round(d.conf * 100)}%</span>
            <span className="h-1 w-12 overflow-hidden rounded-full bg-ink-700" aria-hidden="true">
              <span
                className="block h-full rounded-full"
                style={{ width: `${d.conf * 100}%`, background: i === 1 ? '#a78bfa' : '#22d3ee' }}
              />
            </span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="pt-1.5 text-[0.62rem] text-muted"
        >
          &gt; latency 42ms &middot; model deployed &middot; serverless
        </motion.div>
      </div>
    </div>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.35), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-[-200px] h-[420px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(167,139,250,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1.5 font-mono text-[0.68rem] tracking-wide text-emerald-300"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.heroStatus}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display mt-6 text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="block text-gradient-white">{profile.firstName}</span>
              <span className="block">
                <span className="text-gradient-brand">{profile.lastName}</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="font-mono mt-4 text-sm tracking-[0.18em] text-brand-300 uppercase"
            >
              AI/ML Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-[#b9c2d4]"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-4 font-mono text-xs leading-relaxed tracking-wide text-muted"
            >
              {profile.heroLeading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-brand-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-300 hover:shadow-glow-cyan"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-800/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-400/50 hover:text-brand-300"
              >
                Contact Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-800/60 px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-brand-400/50 hover:text-brand-300"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={16} aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-800/60 px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-brand-400/50 hover:text-brand-300"
                aria-label="Email me"
              >
                <Mail size={16} aria-hidden="true" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto"
            aria-hidden={!reduced ? undefined : true}
          >
            <div className="relative rounded-2xl border border-line-soft bg-ink-900/60 p-4 shadow-glow-soft backdrop-blur-sm">
              <div className="absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
                <div className="absolute inset-0 bg-grid-fine opacity-30" />
              </div>
              <div className="relative h-64">
                <NetworkGraph />
              </div>
              <div className="relative -mt-4 -mb-2">
                <InferenceCard />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 hidden justify-center md:flex"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-muted transition-colors hover:text-brand-300"
            aria-label="Scroll to About"
          >
            <span className="font-mono text-[0.62rem] tracking-[0.3em] uppercase">scroll</span>
            <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}