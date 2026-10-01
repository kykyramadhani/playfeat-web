import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import AppStoreButton from './AppStoreButton.jsx'

const links = [
  ['About', '/about'],
  ['Our Team', '/team'],
  ['Instagram', '/instagram'],
  ['Privacy', '/privacy'],
  ['Support', '/support'],
]

export default function Navbar() {
  return (
    <header className="border border-gold bg-cream">
      <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between px-6 lg:pl-[42px] lg:pr-[98px]">
        <Link to="/" aria-label="PlayFeat home">
          <img src={logo} alt="PlayFeat!" className="h-[100px] w-[134px] object-cover" />
        </Link>
        <nav className="flex items-center gap-6 text-lg text-black xl:gap-[72px] xl:text-2xl">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `hidden md:block ${isActive ? 'font-bold' : ''}`}>
              {label}
            </NavLink>
          ))}
          <AppStoreButton />
        </nav>
      </div>
    </header>
  )
}
