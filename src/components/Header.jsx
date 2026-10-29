import { useState } from 'react'
import { nav, profile } from '../data/site'
import { ArrowUpRight, Close, Menu } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="wrap">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <a
            href="#accueil"
            onClick={() => setOpen(false)}
            className="flex cursor-pointer items-baseline gap-2"
            aria-label="Retour en haut de page"
          >
            <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
              Zahiya <span className="italic">Bouattour</span>
            </span>
            <span className="meta hidden sm:inline">— Architecture</span>
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="meta link-underline cursor-pointer transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent"
            >
              Écrire
              <ArrowUpRight width={16} height={16} />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-ink md:hidden"
          >
            <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Navigation mobile" className="wrap flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="meta flex min-h-12 cursor-pointer items-center border-b border-line"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="flex min-h-12 cursor-pointer items-center gap-1.5"
            >
              {profile.email}
              <ArrowUpRight width={16} height={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
