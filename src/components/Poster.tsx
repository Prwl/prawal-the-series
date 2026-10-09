import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'flow' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
              <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M34 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
              <path d="M112 8 l38 -22 M112 24 l38 22" stroke={a} strokeWidth="2" strokeOpacity="0.6" />
              <circle cx="166" cy="-18" r="10" fill={a} fillOpacity="0.8" />
              <circle cx="166" cy="50" r="10" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.5" />
            </g>
          </g>
        )}
        {project.motif === 'pipeline' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i}>
                <circle cx="196" cy={64 + i * 34} r="7" strokeWidth="1.6" strokeOpacity={0.45 + i * 0.1} fill={i === 2 ? a : 'none'} fillOpacity="0.5" />
                <path d={`M204 ${64 + i * 34} C236 ${64 + i * 34} 236 132 262 132`} strokeWidth="1.4" strokeOpacity="0.45" />
              </g>
            ))}
            <rect x="262" y="104" width="56" height="56" rx="10" strokeWidth="2" strokeOpacity="0.9" />
            <path d="M276 122 h28 M276 132 h20 M276 142 h24" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6" />
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <path d={`M318 132 C340 132 340 ${86 + i * 46} 356 ${86 + i * 46}`} strokeWidth="1.6" strokeOpacity="0.7" strokeDasharray="5 5" />
                <rect x="356" y={74 + i * 46} width="30" height="24" rx="5" strokeWidth="1.6" fill={a} fillOpacity={0.12 + i * 0.1} />
              </g>
            ))}
          </g>
        )}
        {project.motif === 'chart' && (
          <g fill="none" stroke={a}>
            <path d="M196 236 V56 M196 236 H380" strokeWidth="1.6" strokeOpacity="0.5" />
            {[46, 82, 64, 118, 96, 146].map((h, i) => (
              <rect key={i} x={212 + i * 27} y={236 - h} width="16" height={h} rx="3" fill={a} fillOpacity={0.12 + i * 0.06} strokeOpacity="0.5" />
            ))}
            <path d="M220 170 L247 140 L274 156 L301 104 L328 118 L355 70" strokeWidth="2.4" strokeLinejoin="round" />
            {[[220, 170], [247, 140], [274, 156], [301, 104], [328, 118], [355, 70]].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="4" fill={a} stroke="none" />
            ))}
            <circle cx="355" cy="70" r="11" strokeWidth="1.4" strokeOpacity="0.6" />
          </g>
        )}
        {project.motif === 'scenes' && (
          <g fill="none" stroke={a}>
            <rect x="186" y="58" width="196" height="150" rx="8" strokeWidth="2" strokeOpacity="0.85" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <g key={i} strokeOpacity="0.5">
                <rect x={194 + i * 23.5} y="64" width="12" height="9" rx="2" />
                <rect x={194 + i * 23.5} y="193" width="12" height="9" rx="2" />
              </g>
            ))}
            {[0, 1, 2].map((i) => (
              <rect key={i} x={196 + i * 62} y="84" width="54" height="98" rx="5" strokeWidth="1.6" strokeOpacity={0.4 + i * 0.25} fill={a} fillOpacity={i === 1 ? 0.22 : 0.06} />
            ))}
            <path d="M276 120 l18 13 l-18 13 z" fill={a} stroke="none" />
            <path d="M206 230 q20 -12 40 0 t40 0 t40 0 t40 0" strokeWidth="1.6" strokeOpacity="0.45" />
          </g>
        )}
        {project.motif === 'browser' && (
          <g fill="none" stroke={a}>
            <rect x="188" y="54" width="194" height="160" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M188 80 H382" strokeWidth="1.4" strokeOpacity="0.5" />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={204 + i * 12} cy="67" r="3.5" fill={a} fillOpacity={0.3 + i * 0.25} stroke="none" />
            ))}
            <rect x="242" y="61" width="110" height="12" rx="6" strokeOpacity="0.4" />
            <circle cx="232" cy="138" r="24" fill={a} fillOpacity="0.28" strokeWidth="1.6" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <path key={i} d={`M${232 + Math.cos((i * Math.PI) / 4) * 30} ${138 + Math.sin((i * Math.PI) / 4) * 30} L${232 + Math.cos((i * Math.PI) / 4) * 38} ${138 + Math.sin((i * Math.PI) / 4) * 38}`} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
            ))}
            <path d="M282 112 h82 M282 128 h64 M282 144 h74" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
            <rect x="282" y="168" width="54" height="20" rx="6" fill={a} fillOpacity="0.35" />
          </g>
        )}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 4 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M7 29V4h6.5c4.4 0 7.5 2.7 7.5 6.8s-3.1 6.8-7.5 6.8H7" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
