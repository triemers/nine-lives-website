import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Media from './pages/Media'
import Blog from './pages/Blog'
import Merch from './pages/Merch'
import './styles/tokens.css'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blog"  element={<Blog />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
