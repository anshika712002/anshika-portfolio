import type { ReactElement } from 'react'
import { motion } from 'framer-motion'

type VisualProps = {
  accent: string
}

function PlanwiseVisual({ accent }: VisualProps) {
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Abstract electrical plan symbol detection visualization">
      <defs>
        <linearGradient id="pw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a1120" />
          <stop offset="100%" stopColor="#071018" />
        </linearGradient>
      </defs>
      <rect width="480" height="260" fill="url(#pw-bg)" />
      <g stroke="#1e3a4d" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="260" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* electrical traces */}
        <g stroke={accent} strokeWidth="2" fill="none" opacity="0.55" strokeDasharray="5 8">
          <path d="M30 210 L110 210 L110 150 L150 150 L190 150" />
          <path d="M330 60 L380 60 L380 120 L330 120 L330 170" />
          <path d="M210 200 L240 200 L240 90 L300 90" />
        </g>
        <g fill="none" stroke="#67e8f9" strokeWidth="1.6" opacity="0.4">
          <circle cx="150" cy="150" r="10" />
          <rect x="300" y="90" width="14" height="14" transform="rotate(20 307 97)" />
        </g>
      </motion.g>

      {/* rotating OBB detection boxes */}
      <motion.g
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {[
          { x: 160, y: 132, w: 58, h: 34, r: -18 },
          { x: 250, y: 60, w: 46, h: 40, r: 24 },
          { x: 90, y: 195, w: 62, h: 30, r: 12 },
        ].map((b, i) => (
          <motion.g
            key={`obb${i}`}
            animate={{ rotate: b.r + (i % 2 === 0 ? 6 : -4) }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 6, delay: i * 0.7 }}
            style={{ transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px` }}
          >
            <rect
              x={b.x} y={b.y} width={b.w} height={b.h} rx="3"
              fill="none" stroke={accent} strokeWidth="2"
            />
            <circle cx={b.x} cy={b.y} r="3" fill={accent} />
            <text x={b.x + 6} y={b.y + 16} fill={accent} fontSize="10" fontFamily="JetBrains Mono" opacity="0.9">
              symbol_{i + 1}
            </text>
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <rect x="22" y="22" width="118" height="30" rx="6" fill="#071018" stroke={accent} strokeOpacity="0.35" />
        <text x="32" y="41" fill="#a8b6c8" fontSize="11" fontFamily="JetBrains Mono">
          acc 80%
          <tspan fill={accent}> ▲</tspan>
        </text>
      </motion.g>
    </svg>
  )
}

function TryonVisual({ accent }: VisualProps) {
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Abstract body measurement prediction visualization">
      <defs>
        <linearGradient id="ty-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#140d22" />
          <stop offset="100%" stopColor="#0b0712" />
        </linearGradient>
      </defs>
      <rect width="480" height="260" fill="url(#ty-bg)" />
      <g stroke="#2a2140" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="260" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      {/* silhouette */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <path
          d="M240 170c-14 0-24-10-24-24l-6-26c-10-24 4-44 30-44s40 20 30 44l-6 26c0 14-10 24-24 24z"
          fill="#ffffff"
          opacity="0.08"
          stroke="#ffffff"
          strokeOpacity="0.25"
        />
        <path
          d="M228 150h24l10 78c0 8-4 12-11 12h-10c-6 0-9-5-7-11l-6 0c0 6-4 11-10 11s-11-5-11-12z"
          fill="#ffffff"
          opacity="0.05"
          stroke="#ffffff"
          strokeOpacity="0.2"
        />
        <path d="M250 150 h4 v78" stroke="#ffffff" opacity="0.12" />
      </motion.g>

      {/* measurement callouts */}
      {[
        { x1: 172, y1: 130, x2: 214, y2: 130, label: 'shoulder' },
        { x1: 156, y1: 190, x2: 206, y2: 190, label: 'chest' },
        { x1: 168, y1: 232, x2: 214, y2: 232, label: 'waist' },
      ].map((m, i) => (
        <motion.g
          key={m.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.25 }}
        >
          <line x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2} stroke={accent} strokeWidth="1.8" strokeDasharray="4 4" />
          <circle cx={m.x1} cy={m.y1} r="3" fill={accent} />
          <text x={m.x1 + 9} y={m.y1 - 4} fill="#c9b8f2" fontSize="10" fontFamily="JetBrains Mono">
            {m.label} · 85%
          </text>
        </motion.g>
      ))}

      {/* clothing detection box on garment */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <rect x="214" y="150" width="52" height="46" rx="4" fill="none" stroke="#a78bfa" strokeWidth="2" />
        <rect x="214" y="150" width="52" height="14" fill="#a78bfa" opacity="0.15" />
        <text x="220" y="162" fill="#d7c7ff" fontSize="9" fontFamily="JetBrains Mono">
          garment
        </text>
        <text x="252" y="196" fill="#a78bfa" fontSize="11" fontFamily="JetBrains Mono" textAnchor="end">
          95%
        </text>
      </motion.g>
    </svg>
  )
}

function SpillVisual({ accent }: VisualProps) {
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Abstract conversational AI and voice visualization">
      <defs>
        <linearGradient id="sp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a1a12" />
          <stop offset="100%" stopColor="#071311" />
        </linearGradient>
      </defs>
      <rect width="480" height="260" fill="url(#sp-bg)" />

      {/* chat bubbles */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <rect x="40" y="48" width="150" height="38" rx="12" fill="#122a20" stroke="#2c5a44" strokeOpacity="0.5" />
        <text x="52" y="71" fill="#b9e6cf" fontSize="11" fontFamily="JetBrains Mono">
          I've been feeling low…
        </text>
        <rect x="230" y="104" width="190" height="38" rx="12" fill="#0d2033" stroke="#2a5578" strokeOpacity="0.55" />
        <text x="242" y="127" fill={accent} fontSize="11" fontFamily="JetBrains Mono">
          I hear you. Want to talk?
        </text>
        <motion.rect
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          x="56" y="164" width="150" height="38" rx="12" fill="#132a1f" stroke="#2c5a44" strokeOpacity="0.5"
        />
        <text x="68" y="187" fill="#b9e6cf" fontSize="11" fontFamily="JetBrains Mono">
          That helps. Thank you.
        </text>
      </motion.g>

      {/* persona chips */}
      <g fontFamily="JetBrains Mono" fontSize="9">
        {['Listener', 'Reflector', 'Rational', 'Challenger'].map((p, i) => (
          <motion.rect
            key={p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + i * 0.14 }}
            x={286 + i * 48} y="30" width="42" height="20" rx="10"
            fill="none" stroke="#3a6f52" strokeWidth="1"
          />
        ))}
        {['Listener', 'Reflector', 'Rational', 'Challenger'].map((p, i) => (
          <text key={`t${p}`} x={295 + i * 48} y="43" fill="#7fd0a4">
            {p}
          </text>
        ))}
      </g>

      {/* voice waveform */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {Array.from({ length: 44 }).map((_, i) => {
          const h = 8 + Math.abs(Math.sin(i * 0.7)) * 30 + (i % 5 === 0 ? 12 : 0)
          return (
            <motion.rect
              key={i}
              x={38 + i * 9.4}
              y={214 - h / 2}
              width="4.5"
              height={h}
              rx="2"
              fill={accent}
              opacity="0.7"
              animate={{ opacity: [0.35, 0.9, 0.35], height: [h * 0.8, h, h * 0.8] }}
              transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.05 }}
            />
          )
        })}
        <text x="38" y="250" fill="#7d9b8c" fontSize="9" fontFamily="JetBrains Mono">
          STT · Deepgram / VAD · Silero / TTS · Cartesia
        </text>
      </motion.g>

      {/* guardrail shield */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <path
          d="M400 78l-26 9v26c0 22 14 34 26 40 12-6 26-18 26-40V87z"
          fill="none" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.7"
        />
        <path d="M392 110l7 8 13-16" fill="none" stroke="#4ade80" strokeWidth="2" />
      </motion.g>
    </svg>
  )
}

function HelmetVisual({ accent }: VisualProps) {
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Abstract helmet detection bounding box visualization">
      <defs>
        <linearGradient id="hl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1406" />
          <stop offset="100%" stopColor="#120f08" />
        </linearGradient>
      </defs>
      <rect width="480" height="260" fill="url(#hl-bg)" />
      <g stroke="#3d3118" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="260" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>
      {/* road line */}
      <line x1="0" y1="214" x2="480" y2="214" stroke="#4a3d1e" strokeDasharray="14 10" strokeWidth="2" />

      {/* rider + bike simplified shapes */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <ellipse cx="300" cy="226" rx="46" ry="11" fill="#ffffff" opacity="0.08" />
        <path d="M268 214l-6-52h42l2 52z" fill="#1e1e26" />
        <circle cx="246" cy="196" r="9" fill="#14141a" />
        <path d="M290 164c-2-18 12-30 26-24 2 8-4 18-12 22z" fill="#1a1a24" />
        <circle cx="322" cy="150" r="11" fill="#0c0c12" stroke="#3a3a46" />
        <rect x="314" y="156" width="16" height="34" rx="4" fill="#14141a" />
      </motion.g>

      {/* helmet detection box */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <rect x="266" y="118" width="86" height="74" rx="5" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <rect x="266" y="118" width="86" height="20" fill="#f59e0b" opacity="0.18" />
        <text x="272" y="132" fill="#fcd48c" fontSize="10" fontFamily="JetBrains Mono">
          helmet
        </text>
        <text x="350" y="172" fill="#f59e0b" fontSize="12" fontFamily="JetBrains Mono">
          95%
        </text>
      </motion.g>

      {/* plate + OCR readout */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <rect x="120" y="196" width="76" height="26" rx="4" fill="#0a0a0f" stroke="#f59e0b" strokeWidth="1.6" strokeOpacity="0.6" />
        <text x="130" y="214" fill="#e8d9b5" fontSize="10" fontFamily="JetBrains Mono">
          UP 92 AB 1234
        </text>
        <line x1="204" y1="209" x2="236" y2="209" stroke={accent} strokeWidth="1.6" strokeDasharray="4 4" />
        <text x="240" y="213" fill={accent} fontSize="10" fontFamily="JetBrains Mono">
          OCR 85%
        </text>
      </motion.g>
    </svg>
  )
}

function DjVisual({ accent }: VisualProps) {
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Abstract audio mixing waveform visualization">
      <defs>
        <linearGradient id="dj-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#200a17" />
          <stop offset="100%" stopColor="#130810" />
        </linearGradient>
      </defs>
      <rect width="480" height="260" fill="url(#dj-bg)" />
      <g stroke="#38203a" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="260" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <text x="40" y="44" fill="#f9a8d4" fontSize="11" fontFamily="JetBrains Mono">
          deck A
        </text>
        <text x="40" y="180" fill="#c084fc" fontSize="11" fontFamily="JetBrains Mono">
          deck B
        </text>
        {Array.from({ length: 52 }).map((_, i) => {
          const hA = 10 + Math.abs(Math.sin(i * 0.55)) * 44
          const hB = 10 + Math.abs(Math.cos(i * 0.5)) * 44
          return (
            <g key={i}>
              <motion.rect
                x={40 + i * 7.7} y={64 - hA / 2} width="3.4" height={hA} rx="1.7"
                fill="#f472b6"
                animate={{ opacity: [0.35, 0.95, 0.35] }}
                transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.05 }}
              />
              <motion.rect
                x={40 + i * 7.7} y={200 - hB / 2} width="3.4" height={hB} rx="1.7"
                fill="#a78bfa"
                animate={{ opacity: [0.35, 0.95, 0.35] }}
                transition={{ repeat: Infinity, duration: 1.7, delay: i * 0.04 + 0.4 }}
              />
            </g>
          )
        })}
      </motion.g>

      {/* eq sliders */}
      <g>
        {[0, 1, 2].map((s) => (
          <motion.g
            key={`s${s}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + s * 0.15 }}
          >
            <rect x={360 + s * 32} y={196} width="20" height="52" rx="9" fill="#12080f" stroke="#5a2a45" strokeWidth="1.4" />
            <motion.rect
              x={364 + s * 32} y={196 + 52 - (44 + s * 6) - 8} width="12" height={44 + s * 6} rx="6"
              fill={accent}
              opacity="0.85"
              animate={{ y: [196 + 52 - (44 + s * 6) - 8, 196 + 52 - (44 + s * 6) - 8 - 10, 196 + 52 - (44 + s * 6) - 8] }}
              transition={{ repeat: Infinity, duration: 2.2 + s, ease: 'easeInOut' }}
            />
          </motion.g>
        ))}
      </g>

      <motion.rect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        x="286" y="44" width="150" height="26" rx="6"
        fill="#12080f" stroke="#4a3353" strokeWidth="1.2"
      />
      <text x="296" y="61" fill="#e7cceb" fontSize="10" fontFamily="JetBrains Mono">
        yt-dlp · secure · +25%
      </text>
    </svg>
  )
}

function WarehouseVisual({ accent }: VisualProps) {
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Abstract warehouse scanning and inventory visualization">
      <defs>
        <linearGradient id="wh-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#081122" />
          <stop offset="100%" stopColor="#070a14" />
        </linearGradient>
      </defs>
      <rect width="480" height="260" fill="url(#wh-bg)" />
      <g stroke="#1b2c44" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="260" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      {/* shelf */}
      <g stroke="#2c4060" strokeWidth="1.4" fill="none">
        <line x1="60" y1="120" x2="420" y2="120" />
        <line x1="60" y1="176" x2="420" y2="176" />
        <line x1="60" y1="232" x2="420" y2="232" />
      </g>

      {/* boxes on shelf */}
      {[
        { x: 84, y: 96, w: 74, h: 24 },
        { x: 172, y: 92, w: 60, h: 28 },
        { x: 300, y: 96, w: 66, h: 24 },
      ].map((bx, i) => (
        <motion.rect
          key={`b${i}`}
          x={bx.x} y={bx.y} width={bx.w} height={bx.h} rx="3"
          fill="#0d1826" stroke="#3a5680" strokeWidth="1.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.15 }}
        />
      ))}
      {[
        { x: 84, y: 152, w: 74, h: 24 },
        { x: 250, y: 148, w: 90, h: 28 },
      ].map((bx, i) => (
        <motion.rect
          key={`b2${i}`}
          x={bx.x} y={bx.y} width={bx.w} height={bx.h} rx="3"
          fill="#0d1826" stroke="#3a5680" strokeWidth="1.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.15 }}
        />
      ))}

      {/* scan line */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <defs>
          <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0" />
            <stop offset="50%" stopColor={accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.rect
          x="40" y="60" width="400" height="150" rx="8"
          fill="none" stroke={accent} strokeWidth="1.6" strokeOpacity="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
        <motion.rect
          x="42" y="60" width="396" height="60"
          fill="url(#scan)"
          animate={{ y: [0, 90, 0] }}
          transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
        />
        <text x="52" y="230" fill={accent} opacity="0.85" fontSize="10" fontFamily="JetBrains Mono">
          weight 90% · count 90% · QR ✓ · OCR ✓ · errors −35%
        </text>
      </motion.g>
    </svg>
  )
}

const visuals: Record<string, (props: VisualProps) => ReactElement> = {
  planwise: PlanwiseVisual,
  tryon: TryonVisual,
  spill: SpillVisual,
  helmet: HelmetVisual,
  dj: DjVisual,
  warehouse: WarehouseVisual,
}

export default function ProjectVisual({ visual, accent }: VisualProps & { visual: string }) {
  const Visual = visuals[visual] ?? PlanwiseVisual
  return (
    <div className="relative h-52 w-full overflow-hidden border-b border-line-soft bg-ink-900 sm:h-60 md:h-64">
      <div className="absolute inset-0 bg-grid-fine opacity-40" aria-hidden="true" />
      <Visual accent={accent} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent 65%, rgba(7,7,11,0.9) 100%)' }}
        aria-hidden="true"
      />
    </div>
  )
}