import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { LinkedInIcon } from './icons'
import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="relative border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md border border-brand-400/30 bg-brand-400/10 font-display text-sm font-bold text-brand-300">
                AT
              </span>
              <span className="font-display font-semibold tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {profile.role} building production computer vision, conversational and generative AI systems.
            </p>
          </div>

          <nav className="flex gap-4" aria-label="Footer">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted" title={profile.location}>
              <MapPin size={15} aria-hidden="true" />
              <span className="hidden lg:inline">{profile.location}</span>
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-300"
              aria-label={`Email ${profile.email}`}
            >
              <Mail size={15} aria-hidden="true" />
              <span className="hidden lg:inline">Email</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-300"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon width={15} height={15} aria-hidden="true" />
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-300"
              aria-label={`Call ${profile.phone}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span className="hidden lg:inline">Call</span>
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <button
            type="button"
            onClick={() =>
              document.querySelector<HTMLElement>('#home')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-800 px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-brand-400/50 hover:text-brand-300"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}