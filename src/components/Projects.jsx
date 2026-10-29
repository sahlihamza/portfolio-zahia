import { projects } from '../data/site'
import Reveal from './Reveal'

/** Les dessins techniques ne doivent jamais être rognés. */
const DRAWINGS = ['plan', 'coupe', 'elevation', 'perspective', 'facade', 'carte', 'planche']

function ProjectImage({ image }) {
  const isDrawing = DRAWINGS.some((token) => image.src.includes(token))
  const ratio = image.span === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'

  return (
    <figure className={`min-w-0 ${image.span === 'wide' ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
      <div className={`overflow-hidden border border-line ${isDrawing ? 'bg-paper p-4' : 'bg-muted'}`}>
        <img
          src={image.src}
          loading="lazy"
          decoding="async"
          alt={image.alt}
          className={`w-full ${ratio} ${
            isDrawing ? 'object-contain' : 'object-cover transition-transform duration-700 ease-out hover:scale-[1.03]'
          }`}
        />
      </div>
      <figcaption className="meta mt-2.5">{image.caption}</figcaption>
    </figure>
  )
}

function ProjectBlock({ project, index }) {
  const flipped = index % 2 === 1

  return (
    <Reveal
      as="article"
      id={`project-${project.id}`}
      className="scroll-mt-24 border-t border-line pt-12 md:pt-16"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className={`min-w-0 lg:col-span-5 ${flipped ? 'lg:order-2 lg:col-start-8' : ''}`}>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent">
              {project.number}
            </span>
            <span className="meta">{project.type}</span>
          </div>

          <h3 className="mt-4 text-3xl md:text-[2.6rem]">{project.title}</h3>
          <p className="mt-2 font-display text-lg italic text-ink-3">{project.place}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
            {[
              { term: 'Type', detail: project.type },
              { term: 'Surface', detail: project.surface },
              { term: 'Phase', detail: project.phase },
              { term: 'Programme', detail: project.programme },
            ].map((row) => (
              <div key={row.term} className="min-w-0">
                <dt className="meta">{row.term}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-2">{row.detail}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 font-display text-xl leading-relaxed text-ink italic md:text-[1.4rem]">
            {project.lead}
          </p>

          <div className="mt-4 space-y-3 leading-relaxed text-ink-2">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-accent pl-5">
            <span className="meta block">Démarche</span>
            <span className="mt-2 block font-display text-lg leading-relaxed">{project.demarche}</span>
          </p>
        </div>

        <div className={`min-w-0 lg:col-span-7 ${flipped ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : ''}`}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
            {project.images.map((image) => (
              <ProjectImage key={image.src} image={image} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projets" className="border-t border-line">
      <div className="wrap py-16 md:py-24">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="meta">02 — Projets</p>
            <h2 className="mt-4 text-section">Trois équipements, trois échelles</h2>
          </div>
          <p className="max-w-sm leading-relaxed text-ink-2">
            Un siège institutionnel, un musée et un équipement socioculturel : trois occasions de
            tester l’articulation entre usages, structure et expression.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectBlock key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
