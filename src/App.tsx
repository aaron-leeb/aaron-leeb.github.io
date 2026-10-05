import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Experience from './components/Experience.tsx'
import Projects from './components/Projects.tsx'
import Blog from './components/Blog.tsx'

function ScrollToSection() {
  const location = useLocation()

  // Handle in-app hash navigation without forcing a full page reload.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const sectionId = location.hash.slice(1)

    window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }, [location.hash, location.pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Navbar />
      <Routes>
        {/* Route 1: The Main Portfolio (Everything at the '/' path) */}
        <Route 
        path="/" 
        element={
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
          </main>
        } />
        {/* Route 2: The Blog Page (Everything at the '/blog' path) */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
