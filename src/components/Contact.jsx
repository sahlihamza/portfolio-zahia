import { about, profile } from '../data/site'
import Reveal from './Reveal'
import { Mail, MapPin, Phone } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="wrap py-16 md:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <p className="meta text-paper/60">04 — Contact</p>
            <h2 className="mt-4 text-section">Parlons d’architecture.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
              {about.paragraphs[3]}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-10 inline-block font-display text-2xl text-accent md:text-3xl"
            >
              {profile.email}
            </a>
          </div>

          <Reveal delay={120} className="min-w-0 lg:col-span-5">
            <dl className="space-y-6 border-t border-paper/15 pt-8">
              <div className="flex items-start gap-3">
                <Phone width={18} height={18} className="mt-1 shrink-0 text-paper/50" />
                <div>
                  <dt className="meta text-paper/50">Téléphone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, '')}`}
                      className="link-underline cursor-pointer font-display text-lg"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail width={18} height={18} className="mt-1 shrink-0 text-paper/50" />
                <div>
                  <dt className="meta text-paper/50">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${profile.email}`}
                      className="link-underline cursor-pointer font-display text-lg"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin width={18} height={18} className="mt-1 shrink-0 text-paper/50" />
                <div>
                  <dt className="meta text-paper/50">Localisation</dt>
                  <dd className="mt-1.5 font-display text-lg">{profile.location}</dd>
                </div>
              </div>
            </dl>

            <p className="mt-10 border-t border-paper/15 pt-6 text-sm leading-relaxed text-paper/60">
              Dossier complet (plans, coupes et rendus) disponible sur demande.
            </p>
          </Reveal>
        </Reveal>
      </div>
    </section>
  )
}
