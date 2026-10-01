import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useLang } from '../i18n.jsx'
import AppStoreButton from './AppStoreButton.jsx'

const links = [
  ['about', '/about'],
  ['team', '/team'],
  ['instagram', '/instagram'],
  ['privacy', '/privacy'],
  ['support', '/support'],
]

function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-xl bg-black/5 p-1 pl-3">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M2 5l8-2v16l-8 2z" fill="none" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 3l8 2v16l-8-2z" fill="black" />
        <text x="4" y="14" fontSize="7" fill="black">文</text>
        <text x="12" y="17" fontSize="8" fontWeight="bold" fill="white">A</text>
      </svg>
      <div role="group" aria-label="Language" className="flex rounded-lg bg-black/5 p-0.5">
        {['en', 'id'].map((l) => (
          <button
            key={l}
            type="button"
            aria-pressed={lang === l}
            onClick={() => setLang(l)}
            className={`cursor-pointer rounded-lg px-3 py-1 text-base uppercase transition ${
              lang === l ? 'bg-white text-black shadow-md' : 'text-black/60'
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const { t } = useLang()
  return (
    <header className="border border-gold bg-cream">
      <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-6 lg:pl-[42px] lg:pr-[98px]">
        <Link to="/" aria-label="PlayFeat home">
          <img src={logo} alt="PlayFeat!" className="h-[100px] w-[134px] object-cover" />
        </Link>
        <nav className="flex items-center gap-6 text-lg text-black xl:gap-[72px] xl:text-2xl">
          {links.map(([key, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `hidden whitespace-nowrap md:block ${isActive ? 'font-bold' : ''}`}>
              {t.nav[key]}
            </NavLink>
          ))}
          <LangSwitch />
          <AppStoreButton />
        </nav>
      </div>
    </header>
  )
}
