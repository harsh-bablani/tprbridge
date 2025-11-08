import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const heroImages = [
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80',
]

const highlightMetrics = [
  {
    value: '15+ Years',
    description: 'Expert concierge support for NRIs worldwide',
  },
  {
    value: '5k+ Families',
    description: 'Trusted relationships diligently nurtured',
  },
  {
    value: '99.8% Satisfaction',
    description: 'Personalised solutions with measurable joy',
  },
]

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#fff6f6]/85 via-[#fef2f2]/80 to-[#f5f7fb]/85"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-16 w-72 h-72 bg-[#fde4e4]/80 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-28 w-80 h-80 bg-[#dbe9ff]/80 rounded-full blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-[480px] -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-70" />
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-[#f87171]/25 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="/tpbridge-logo.png"
            alt="Tipping Bridge logo"
            className="w-28 h-28 rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#0b1f33] mb-6 leading-tight"
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#f87171] via-[#fca5a5] to-[#f87171] bg-clip-text text-transparent animate-pulse">
            Tipping Bridge
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-[#1f2d3f] mb-10 font-light"
        >
          Your Trusted Partner for NRI Services in India
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-[#34445a] mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Connecting families across continents with expert care, seamless service, and unwavering trust.
          Experience peace of mind with India's most trusted NRI concierge service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <Link
            to="/services"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-[#c53030]/40 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#e53e3e] to-[#9b1c1c]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <Link
            to="/contact"
            className="group w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#c53030] text-[#0b1f33] rounded-full font-bold text-lg hover:bg-[#c53030]/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {highlightMetrics.map((metric) => (
            <div
              key={metric.value}
              className="relative overflow-hidden rounded-3xl border border-[#f2dcdc] bg-white/80 shadow-md backdrop-blur-sm p-6 text-left"
            >
              <span className="block text-xl font-semibold text-[#c53030] mb-2">
                {metric.value}
              </span>
              <p className="text-sm text-[#37475c] leading-relaxed">
                {metric.description}
              </p>
              <span className="absolute -bottom-6 -right-4 h-20 w-20 rounded-full bg-[#fde4e4]/60 blur-2xl" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-[#f87171] w-8'
                : 'bg-white/50 w-2 hover:bg-[#fca5a5]/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
