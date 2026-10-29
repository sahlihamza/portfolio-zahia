import { profile } from '../data/site'
import { ArrowUp } from './Icons'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-ink text-paper">
      <div className="wrap flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <p className="meta text-paper/50">
          © {YEAR} {profile.fullName} — {profile.promo}
        </p>
        <a
          href="#accueil"
          className="meta link-underline inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-paper/70 transition-colors duration-200 hover:text-paper"
        >
          Haut de page
          <ArrowUp width={14} height={14} />
        </a>
      </div>
    </footer>
  )
}
