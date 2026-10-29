import { demarche } from '../data/site'
import Reveal from './Reveal'

export default function Demarche() {
  return (
    <section id="demarche" className="border-t border-line bg-accent-soft">
      <div className="wrap py-16 md:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="meta">01 — Démarche</p>
            <h2 className="mt-4 text-section">Concevoir à partir du contexte</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-display text-xl leading-relaxed text-ink italic md:text-2xl">
              « {demarche.intro} »
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {demarche.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90} className="min-w-0">
              <div className="rule pt-5">
                <span className="font-display text-5xl font-semibold leading-none text-accent md:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-2">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
