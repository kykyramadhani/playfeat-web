import { useLang } from '../i18n.jsx'

export default function Placeholder({ title }) {
  const { t } = useLang()
  return (
    <main className="px-4 py-32 text-center">
      <h1 className="text-[32px] font-bold text-black">{title}</h1>
      <p className="mt-2 text-lg text-black/70">{t.soon}</p>
    </main>
  )
}
