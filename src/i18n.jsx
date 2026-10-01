import { createContext, useContext, useEffect, useState } from 'react'

const ui = {
  en: {
    nav: { about: 'About', team: 'Our Team', instagram: 'Instagram', privacy: 'Privacy', support: 'Support' },
    heroTitle: ['Fun While', 'Staying Accessible'],
    heroText: 'PlayFeat! is a cooking game you play with your hands in the air.',
    soon: 'Coming soon.',
    notFound: 'Page Not Found',
  },
  id: {
    nav: { about: 'Tentang', team: 'Tim Kami', instagram: 'Instagram', privacy: 'Privasi', support: 'Dukungan' },
    heroTitle: ['Seru Sambil', 'Tetap Aksesibel'],
    heroText: 'PlayFeat! adalah game memasak yang kamu mainkan dengan tangan di udara.',
    soon: 'Segera hadir.',
    notFound: 'Halaman Tidak Ditemukan',
  },
}

const Ctx = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || (navigator.language.startsWith('id') ? 'id' : 'en')
    } catch {
      return 'en'
    }
  })
  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable; language just won't persist
    }
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: ui[lang] }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
