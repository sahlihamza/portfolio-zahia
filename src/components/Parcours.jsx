import { about, parcours } from '../data/site'
import Reveal from './Reveal'

export default function Parcours() {
  return (
    <section id="parcours" className="border-t border-line bg-muted">
      <div className="wrap py-16 md:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="meta">03 — Parcours</p>
            <h2 className="mt-4 text-section">Formation, outils et exigences</h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-2">
              {about.paragraphs[0]}
            </p>
          </div>

          <Reveal delay={100} className="min-w-0 lg:col-span-7">
            <ol className="border-l border-line pl-6">
              {parcours.timeline.map((entry) => (
                <li key={entry.title} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="meta">{entry.year}</p>
                  <h3 className="mt-2 text-xl">{entry.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-2">{entry.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 md:mt-20 md:grid-cols-3 md:gap-12">
          <Reveal className="min-w-0">
            <h3 className="meta border-b border-line pb-3">Outils de conception</h3>
            <ul className="mt-4 space-y-4">
              {parcours.software.map((tool) => (
                <li key={tool.name} className="flex items-center gap-3">
                  <img
                    src={tool.logo}
                    width="113"
                    height="113"
                    loading="lazy"
                    decoding="async"
                    alt={`Icône ${tool.name}`}
                    className="h-9 w-9 shrink-0"
                  />
                  <span className="min-w-0">
                    <span className="block font-display text-base">{tool.name}</span>
                    <span className="meta">{tool.note}</span>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line font-mono text-xs text-accent">
                  3D
                </span>
                <span>
                  <span className="block font-display text-base">Modélisation 3D</span>
                  <span className="meta">Outils numériques de conception</span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={90} className="min-w-0">
            <h3 className="meta border-b border-line pb-3">Langues</h3>
            <ul className="mt-4 space-y-4">
              {parcours.languages.map((language) => (
                <li key={language.name} className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg">{language.name}</span>
                  <span className="meta text-right">{language.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="min-w-0">
            <h3 className="meta border-b border-line pb-3">Exigences</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.qualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink-2"
                >
                  {quality}
                </li>
              ))}
            </ul>

            <p className="mt-6 leading-relaxed text-ink-2">{about.paragraphs[2]}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
