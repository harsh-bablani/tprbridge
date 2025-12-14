import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    window.dispatchEvent(new Event('cookieConsentChanged'))
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    window.dispatchEvent(new Event('cookieConsentChanged'))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-[#e7dede] p-4 md:p-5 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#fcd6d6]/30 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Cookie Icon */}
                <div className="flex-shrink-0">
                  <div className="p-2 bg-gradient-to-br from-[#c53030] to-[#e53e3e] rounded-lg shadow-lg">
                    <Cookie className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#0b1f33] mb-2">
                    Cookie Consent
                  </h3>
                  <p className="text-[#516074] text-sm md:text-base leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can also choose to decline non-essential cookies.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <button
                    onClick={handleDecline}
                    className="px-5 py-2.5 text-sm font-medium text-[#516074] bg-[#f8fafc] hover:bg-[#e7dede] rounded-lg transition-all duration-300 border border-[#e7dede] hover:border-[#c53030]"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#c53030] to-[#e53e3e] hover:from-[#e53e3e] hover:to-[#c53030] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Accept All
                  </button>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute top-3 right-3 p-1.5 text-[#516074] hover:text-[#c53030] hover:bg-[#f8fafc] rounded-lg transition-all duration-300"
                aria-label="Close cookie banner"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent

