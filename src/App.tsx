import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import VideoSection from './components/VideoSection'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import WhatsAppButton from './components/WhatsAppButton'
import CookieConsent from './components/CookieConsent'

// Lazy load page components
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
    <div className="text-center">
      <div className="inline-block">
        <div className="w-12 h-12 border-4 border-[#f2dcdc] border-t-[#c53030] rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-slate-600 font-medium">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <CookieConsent />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <main>
                <Hero />
                <About />
                <VideoSection />
                <Services />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route 
          path="/services" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ServicesPage />
            </Suspense>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ContactPage />
            </Suspense>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AboutPage />
            </Suspense>
          } 
        />
        <Route 
          path="/privacy-policy" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPolicyPage />
            </Suspense>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App

