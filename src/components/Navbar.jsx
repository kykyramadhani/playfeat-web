import { useRef } from 'react'
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
  const drawer = useRef(null)
  const navLinks = (onClick) =>
    links.map(([key, to]) => (
      <NavLink key={to} to={to} onClick={onClick} className={({ isActive }) => `whitespace-nowrap ${isActive ? 'font-bold' : ''}`}>
        {t.nav[key]}
      </NavLink>
    ))

  return (
    <header className="border border-gold bg-cream">
      <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:pl-[42px] lg:pr-[98px]">
        <Link to="/" aria-label="PlayFeat home">
          <img src={logo} alt="PlayFeat!" className="h-[100px] w-[134px] object-cover" />
        </Link>
        <nav className="hidden items-center gap-6 text-lg text-black lg:flex xl:gap-[72px] xl:text-2xl">
          {navLinks()}
          <LangSwitch />
          <AppStoreButton />
        </nav>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => drawer.current.showModal()}
          className="cursor-pointer p-2 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Native <dialog>: Esc, focus trap and backdrop for free. */}
      <dialog
        ref={drawer}
        onClick={(e) => e.target === drawer.current && drawer.current.close()}
        className="m-0 ml-auto h-full max-h-none w-72 max-w-[85vw] border-l border-gold bg-cream p-6 backdrop:bg-black/40"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => drawer.current.close()}
          className="ml-auto block cursor-pointer p-2"
        >
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <nav className="mt-4 flex flex-col gap-6 text-2xl text-black">
          {navLinks(() => drawer.current.close())}
        </nav>
        <div className="mt-10 flex flex-col items-start gap-6">
          <LangSwitch />
          <AppStoreButton />
        </div>
      </dialog>
    </header>
  )
}
