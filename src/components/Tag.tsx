import type { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
  color?: string
  className?: string
}

export default function Tag({ children, color, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[0.68rem] tracking-wide transition-colors ${className}`}
      style={{
        borderColor: color ? `${color}33` : undefined,
        backgroundColor: color ? `${color}0d` : undefined,
        color: color ?? undefined,
      }}
    >
      {children}
    </span>
  )
}