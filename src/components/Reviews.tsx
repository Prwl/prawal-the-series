import { useRef } from 'react';
import { motion } from 'framer-motion';
import { reviews } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

/** CRITICS' REVIEWS — LinkedIn recommendations presented as press quotes. */
export default function Reviews() {
  const rail = useRef<HTMLDivElement>(null);
  return (
    <>
      <SectionHeading kicker={`${reviews.length} recommendations · LinkedIn`} title="Critics' Reviews" />
      <div className="group/rail relative">
        <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto py-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="w-[82vw] shrink-0 snap-start sm:w-[360px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px -5% 0px 0px' }}
              transition={{ duration: 0.7, delay: Math.min(i, 5) * 0.06, ease: EASE }}
            >
              <Tilt max={5} className="group h-full rounded-2xl">
                <figure className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_0%_0%,#2a0b12,#0d0a0c_55%,#07070a)] p-6 ring-1 ring-white/10 transition duration-500 group-hover:ring-white/25">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/60 to-transparent" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9b46a]">LinkedIn recommendation</p>
                  <span aria-hidden className="mt-3 font-serif text-6xl leading-[0.5] text-crimson-2/80">“</span>
                  <blockquote className="mt-2 font-serif text-[1.2rem] italic leading-snug text-bone">{r.quote}</blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 pt-6">
                    {r.photo ? (
                      <img src={r.photo} alt="" loading="lazy" className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/20" />
                    ) : (
                      <span aria-hidden className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crimson-2/25 text-sm font-bold text-bone ring-1 ring-white/20">
                        {r.name
                          .split(' ')
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join('')}
                      </span>
                    )}
                    <div className="min-w-0">
                      <a
                        href={r.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="link"
                        className="block truncate text-sm font-semibold text-bone underline decoration-white/0 underline-offset-4 transition hover:decoration-crimson-2"
                      >
                        {r.name} ↗
                      </a>
                      <p className="truncate text-[11px] text-mist">
                        {r.role} · {r.date}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Tilt>
            </motion.div>
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>
    </>
  );
}
