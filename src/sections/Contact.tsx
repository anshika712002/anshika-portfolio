import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { LinkedInIcon } from '../components/icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/resume'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: Phone,
  },
  {
    label: 'Location',
    value: profile.location,
    href: undefined,
    icon: MapPin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div
        className="absolute bottom-0 left-1/2 h-[400px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.4), transparent)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Let's build something intelligent"
          description="If you're hiring for an AI/ML role or building a product that needs computer vision, LLM integration or conversational AI — let's talk."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-4">
            {channels.map((c) => {
              const Icon = c.icon
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-ink-800 text-brand-300">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-white">
                      {c.value}
                    </span>
                  </span>
                </>
              )
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-line-soft bg-ink-900/60 p-4 transition-colors hover:border-brand-400/40"
                >
                  {inner}
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-muted transition-colors group-hover:text-brand-300"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <div key={c.label} className="flex items-center gap-4 rounded-xl border border-line-soft bg-ink-900/60 p-4">
                  {inner}
                </div>
              )
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-line-soft bg-ink-900/70 p-8 sm:p-10">
              <div className="absolute inset-0 bg-grid-fine opacity-30" aria-hidden="true" />
              <div className="relative">
                <p className="font-mono text-xs tracking-[0.25em] text-brand-400 uppercase">
                  ready to talk?
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Available for AI/ML engineering roles and projects.
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-[#aeb6c8]">
                  Currently based in {profile.location.split(',')[0]}. I respond to email first, so{' '}
                  <a href={`mailto:${profile.email}`} className="text-brand-300 underline decoration-brand-400/40 underline-offset-4 hover:text-brand-200">
                    send a message
                  </a>{' '}
                  and we'll take it from there.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-md bg-brand-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-300 hover:shadow-glow-cyan"
                  >
                    <Mail size={16} aria-hidden="true" />
                    Email me
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-400/50 hover:text-brand-300"
                  >
                    <LinkedInIcon size={16} aria-hidden="true" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}