import { privacy } from '../content/privacy.js'
import { useLang } from '../i18n.jsx'

function Block({ b }) {
  if (b.h) return <h2 className="mt-4 text-base font-bold">{b.h}</h2>
  if (b.b) return <p className="mt-2 font-bold">{b.b}</p>
  if (b.mail)
    return (
      <p className="mt-2 font-bold">
        <a href={`mailto:${b.mail}`} className="underline">{b.mail}</a>
      </p>
    )
  if (b.ul)
    return (
      <ul className="mt-2 list-disc pl-5">
        {b.ul.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    )
  if (b.table)
    return (
      <table className="mt-2 w-full border-collapse text-left">
        <thead>
          <tr>
            {b.table.head.map((h) => (
              <th key={h} className="border border-tertiary px-2 py-1">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {b.table.rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c) => (
                <td key={c} className="border border-tertiary px-2 py-1">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  return <p className="mt-2">{b.p}</p>
}

export default function Privacy() {
  const { title, dates, blocks } = privacy[useLang().lang]
  return (
    <main className="px-4 pb-16 pt-6 sm:pt-[48px]">
      <article className="mx-auto w-full max-w-[650px] rounded-2xl border border-tertiary bg-[rgba(243,240,235,0.38)] px-4 py-6 sm:px-8">
        <h1 className="px-2.5 pt-2.5 text-center text-[28px] sm:text-[32px] font-bold text-black">{title}</h1>
        <p className="px-2.5 pb-2.5 text-center text-sm text-black">{dates.join(' · ')}</p>
        <div className="p-2.5 text-sm leading-6 text-black">
          {blocks.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </div>
      </article>
    </main>
  )
}
