import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

const DESKTOP_IMAGES = ['/2.png', '/4.png', '/5.png', '/6.png', '/7.png']
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
            <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/50 to-white/65"></div>
          </motion.div>
        ))}
      </div>

      {/* Soft accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#fde4e4]/70 blur-3xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#dbe9ff]/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] text-center space-y-8 pt-12 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Optimized background glow for text */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#c53030]/20 via-[#7a0b0b]/15 to-[#0b1f33]/20 blur-2xl -z-10"
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#0b1f33] tracking-tight text-2xl sm:text-6xl lg:text-7xl leading-tight drop-shadow-2xl relative"
            style={{ fontFamily: 'Sora, Manrope, sans-serif' }}
          >
            <motion.span
              style={{
                backgroundSize: "200% 200%",
                willChange: 'background-position',
                transform: 'translateZ(0)'
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#0b1f33] bg-clip-text text-transparent"
            >
              One Point Solution for all NRI needs in INDIA
            </motion.span>
            
            {/* Decorative underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-2 bg-gradient-to-r from-transparent via-[#c53030] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </motion.h1>
        </motion.div>

        {/* <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-5 text-base sm:text-xl text-[#243247] max-w-3xl mx-auto leading-relaxed"
        >
          Connecting families across continents with expert care, seamless service, and unwavering trust. Experience peace of mind with India's most trusted NRI concierge service.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/about"
              className="group relative inline-flex items-center justify-center px-10 py-4 sm:py-5 bg-transparent backdrop-blur-xl border-2 border-[#c53030]/80 text-[#c53030] rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-[0_20px_40px_-12px_rgba(197,48,48,0.4)] transition-all duration-500 hover:border-[#c53030] overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                transition={{ duration: 0.8 }}
              />
              
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                <span>Discover Us</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Slide indicators */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {imageSet.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 relative overflow-hidden ${
              index === currentImageIndex 
                ? 'bg-gradient-to-r from-[#c53030] to-[#7a0b0b] w-10 shadow-lg shadow-[#c53030]/50' 
                : 'bg-[#0b1f33]/30 w-2.5 hover:bg-[#c53030]/60 hover:w-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentImageIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}

export default Hero
