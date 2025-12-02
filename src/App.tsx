import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Navigation from './components/Navigation'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <main>
                <Hero />
                <About />
                <Services />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App

