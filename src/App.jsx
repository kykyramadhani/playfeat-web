import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import Privacy from './pages/Privacy.jsx'
import { useLang } from './i18n.jsx'

export default function App() {
  const { t } = useLang()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<Placeholder title={t.nav.about} />} />
        <Route path="/team" element={<Placeholder title={t.nav.team} />} />
        <Route path="/instagram" element={<Placeholder title={t.nav.instagram} />} />
        <Route path="/support" element={<Placeholder title={t.nav.support} />} />
        <Route path="*" element={<Placeholder title={t.notFound} />} />
      </Routes>
    </>
  )
}
