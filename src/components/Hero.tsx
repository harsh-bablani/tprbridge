import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

const DESKTOP_IMAGES = ['/2.png', '/4.png', '/5.png']
const MOBILE_IMAGES = ['/m1.png', '/m2.png', '/m3.png', '/m4.png']

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth < 640)
    }

    updateView()
    window.addEventListener('resize', updateView)
    return () => window.removeEventListener('resize', updateView)
  }, [])

  const imageSet = useMemo(
    () => (isMobileView ? MOBILE_IMAGES : DESKTOP_IMAGES),
    [isMobileView]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageSet.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [imageSet.length])

  useEffect(() => {
    if (currentImageIndex >= imageSet.length) {
      setCurrentImageIndex(0)
    }
  }, [imageSet.length, currentImageIndex])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#fef5f5] to-[#f3f6fb]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {imageSet.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              src={image}
              alt="Hero slide"
              className="absolute inset-0 h-full w-full object-cover bg-white"
              initial={{ scale: 1.05 }}
              animate={{ scale: index === currentImageIndex ? 1 : 1.05 }}
              transition={{ duration: 8, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85"></div>
          </motion.div>
        ))}
      </div>

      {/* Soft accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#fde4e4]/70 blur-3xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#dbe9ff]/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] text-center space-y-6 pt-12 sm:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b71c1c]/70 via-[#e63946]/65 to-[#102a43]/60 tracking-[-0.01em] whitespace-nowrap text-xl sm:text-5xl lg:text-6xl leading-[1.45] sm:leading-[1.3] lg:leading-[1.15] drop-shadow-[0_6px_18px_rgba(16,42,67,0.2)]"
          style={{ fontFamily: 'Sora, Manrope, sans-serif' }}
        >
          Making Your Life Easy, One Service at a Time
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-5 text-base sm:text-xl text-[#243247] max-w-3xl mx-auto leading-relaxed"
        >
          Connecting families across continents with expert care, seamless service, and unwavering trust. Experience peace of mind with India's most trusted NRI concierge service.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center"
        >
          <Link
            to="/about"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 bg-transparent backdrop-blur-md border-2 border-[#c53030]/70 text-[#c53030]/80 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:shadow-[#c53030]/20 transition-all duration-300 hover:scale-105 hover:border-[#c53030] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
              <span>Discover Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c53030]/90 to-[#7a0b0b]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 font-semibold z-20">
              <span>Discover Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {imageSet.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-[#f87171] w-8' : 'bg-[#0b1f33]/40 w-2 hover:bg-[#c53030]/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
