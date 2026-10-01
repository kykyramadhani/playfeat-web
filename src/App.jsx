import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import Privacy from './pages/Privacy.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/team" element={<Placeholder title="Our Team" />} />
        <Route path="/instagram" element={<Placeholder title="Instagram" />} />
        <Route path="/support" element={<Placeholder title="Support" />} />
        <Route path="*" element={<Placeholder title="Page Not Found" />} />
      </Routes>
    </>
  )
}
