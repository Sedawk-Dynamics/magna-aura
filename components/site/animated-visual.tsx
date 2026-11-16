import type { CSSProperties, ReactNode } from 'react'
import type { VisualKind } from '@/lib/visuals'
import { cn } from '@/lib/utils'

/* Decorative, looping SVG scenes in the brand palette. Motion is pure CSS (see globals.css)
   and switches off for users who prefer reduced motion. */

const NODES: [number, number][] = [
  [110, 110], [300, 70], [480, 130], [660, 80],
  [210, 260], [410, 250], [600, 270], [740, 220],
  [120, 400], [330, 410], [520, 400], [700, 430],
]
const LINKS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [3, 7], [4, 5],
  [5, 6], [6, 7], [4, 8], [5, 9], [6, 10], [10, 11], [9, 10],
]

function Network() {
  return (
    <g>
      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a][0]}
          y1={NODES[a][1]}
          x2={NODES[b][0]}
          y2={NODES[b][1]}
          stroke="var(--brand-blue)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="8 10"
          className="av-flow"
          style={{ ['--dash-period' as string]: '18px', animationDelay: `${(i % 5) * -0.4}s` } as CSSProperties}
        />
      ))}
      {NODES.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 9 : 6}
          fill="var(--brand-green)"
          className="av-pulse"
          style={{ animationDelay: `${((i * 0.37) % 3).toFixed(2)}s` }}
        />
      ))}
    </g>
  )
}

function Gear({
  cx,
  cy,
  r,
  color,
  duration,
  reverse = false,
}: {
  cx: number
  cy: number
  r: number
  color: string
  duration: number
  reverse?: boolean
}) {
  return (
    <g
      className="av-spin"
      style={{
        transformOrigin: `${cx}px ${cy}px`,
        animationDuration: `${duration}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={r * 0.22}
        strokeDasharray={`${(r * 0.35).toFixed(1)} ${(r * 0.3).toFixed(1)}`}
        strokeOpacity="0.85"
      />
      <circle cx={cx} cy={cy} r={r * 0.72} fill="none" stroke={color} strokeWidth="3" strokeOpacity="0.5" />
      <circle cx={cx} cy={cy} r={r * 0.22} fill={color} fillOpacity="0.6" />
    </g>
  )
}

function Gears() {
  return (
    <g>
      <Gear cx={260} cy={260} r={95} color="var(--brand-green)" duration={24} />
      <Gear cx={520} cy={190} r={62} color="var(--brand-blue)" duration={16} reverse />
      <Gear cx={580} cy={370} r={48} color="var(--brand-green)" duration={12} />
    </g>
  )
}

const PIPES = [
  { d: 'M0 150 H300 V250 H800', period: 44 },
  { d: 'M0 360 H220 V190 H520 V330 H800', period: 60 },
]

function Pipeline() {
  return (
    <g>
      {PIPES.map((p, i) => (
        <g key={i}>
          <path d={p.d} fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="22" strokeLinejoin="round" />
          <path
            d={p.d}
            fill="none"
            stroke="var(--brand-green)"
            strokeWidth="6"
            strokeLinejoin="round"
            strokeDasharray="22 22"
            className="av-flow"
            style={{ ['--dash-period' as string]: `${p.period}px` } as CSSProperties}
          />
        </g>
      ))}
      {[[300, 150], [300, 250], [220, 360], [520, 190], [520, 330]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="11" fill="var(--navy)" stroke="var(--brand-blue)" strokeWidth="3" className="av-pulse" style={{ animationDelay: `${i * -0.6}s` }} />
      ))}
    </g>
  )
}

function Shield() {
  return (
    <g>
      {[80, 140, 200].map((r, i) => (
        <circle
          key={r}
          cx={400}
          cy={250}
          r={r}
          fill="none"
          stroke="var(--brand-green)"
          strokeWidth="2"
          className="av-ring"
          style={{ animationDelay: `${i * 1.3}s` }}
        />
      ))}
      <path
        d="M400 170 L465 195 V252 C465 306 436 340 400 356 C364 340 335 306 335 252 V195 Z"
        fill="var(--brand-green)"
        fillOpacity="0.25"
        stroke="var(--brand-green)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M372 255 L394 277 L430 236"
        fill="none"
        stroke="#ffffff"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className="av-draw"
      />
    </g>
  )
}

const BARS = [
  { x: 120, h: 120 }, { x: 200, h: 180 }, { x: 280, h: 140 }, { x: 360, h: 230 },
  { x: 440, h: 190 }, { x: 520, h: 280 }, { x: 600, h: 250 }, { x: 680, h: 330 },
]

function Chart() {
  const points = BARS.map((b) => `${b.x + 22},${440 - b.h}`).join(' ')
  return (
    <g>
      <line x1="90" y1="440" x2="730" y2="440" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
      {BARS.map((b, i) => (
        <rect
          key={b.x}
          x={b.x}
          y={440 - b.h}
          width="44"
          height={b.h}
          rx="4"
          fill="var(--brand-blue)"
          fillOpacity="0.75"
          className="av-bar"
          style={{ animationDelay: `${i * -0.5}s` }}
        />
      ))}
      <polyline
        points={points}
        fill="none"
        stroke="var(--brand-green)"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeDasharray="14 10"
        className="av-flow"
        style={{ ['--dash-period' as string]: '24px' } as CSSProperties}
      />
    </g>
  )
}

function Globe() {
  return (
    <g>
      <circle cx="400" cy="250" r="150" fill="var(--brand-blue)" fillOpacity="0.1" stroke="var(--brand-blue)" strokeWidth="2" />
      <line x1="250" y1="250" x2="550" y2="250" stroke="var(--brand-blue)" strokeOpacity="0.5" strokeWidth="2" />
      <ellipse cx="400" cy="190" rx="132" ry="26" fill="none" stroke="var(--brand-blue)" strokeOpacity="0.4" strokeWidth="1.5" />
      <ellipse cx="400" cy="310" rx="132" ry="26" fill="none" stroke="var(--brand-blue)" strokeOpacity="0.4" strokeWidth="1.5" />
      <g className="av-spin" style={{ transformOrigin: '400px 250px', animationDuration: '12s' }}>
        <ellipse cx="400" cy="250" rx="62" ry="150" fill="none" stroke="var(--brand-green)" strokeOpacity="0.7" strokeWidth="2" />
      </g>
      <circle cx="400" cy="250" r="230" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="4 8" />
      <g className="av-spin" style={{ transformOrigin: '400px 250px', animationDuration: '8s' }}>
        <circle cx="630" cy="250" r="9" fill="var(--brand-green)" />
      </g>
    </g>
  )
}

/* Flowing water lines with rising droplets. */
function Waves() {
  return (
    <g>
      {[0, 1, 2].map((i) => {
        const y = 200 + i * 60
        return (
          <path
            key={i}
            d={`M-20 ${y} Q 100 ${y - 30} 200 ${y} T 400 ${y} T 600 ${y} T 820 ${y}`}
            fill="none"
            stroke={i === 1 ? 'var(--brand-green)' : 'var(--brand-blue)'}
            strokeOpacity={0.6 - i * 0.12}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="14 14"
            className="av-flow"
            style={{ ['--dash-period' as string]: '28px', animationDelay: `${i * -0.6}s` } as CSSProperties}
          />
        )
      })}
      {[
        [180, 120],
        [420, 90],
        [620, 140],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="9"
          fill="var(--brand-green)"
          className="av-pulse"
          style={{ animationDelay: `${i * -0.8}s` }}
        />
      ))}
    </g>
  )
}

/* A clasp between two hands: the arms draw together, then the clasp pulses. */
function Handshake() {
  return (
    <g>
      <circle
        cx="400"
        cy="250"
        r="200"
        fill="none"
        stroke="var(--brand-blue)"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeDasharray="6 10"
        className="av-spin"
        style={{ transformOrigin: '400px 250px', animationDuration: '30s' }}
      />
      <circle cx="400" cy="265" r="70" fill="none" stroke="var(--brand-green)" strokeWidth="2" className="av-ring" />
      <g className="av-shake-l">
        <path
          d="M40 300 L250 240 Q300 226 340 250 L400 290"
          fill="none"
          stroke="var(--brand-blue)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g className="av-shake-r">
        <path
          d="M760 300 L550 240 Q500 226 460 250 L400 290"
          fill="none"
          stroke="var(--brand-green)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <ellipse
        cx="400"
        cy="270"
        rx="62"
        ry="46"
        fill="var(--brand-green)"
        fillOpacity="0.35"
        stroke="var(--brand-green)"
        strokeWidth="3"
        className="av-pulse"
      />
    </g>
  )
}

const SCENES: Record<VisualKind, () => ReactNode> = {
  handshake: Handshake,
  waves: Waves,
  network: Network,
  gears: Gears,
  pipeline: Pipeline,
  shield: Shield,
  chart: Chart,
  globe: Globe,
}

export function AnimatedVisual({ kind, className }: { kind: VisualKind; className?: string }) {
  const Scene = SCENES[kind]
  return (
    <div aria-hidden="true" className={cn('absolute inset-0 overflow-hidden bg-navy-deep', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep" />
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" focusable="false">
        <Scene />
      </svg>
    </div>
  )
}
