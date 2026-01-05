import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const DESKTOP_IMAGES = ['/2.png', '/4.png', '/5.png'];
const MOBILE_IMAGES = ['/m1.png', '/m2.png', '/m3.png', '/m4.png'];

interface PageHeroProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, children }: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const imageSet = useMemo(
    () => (isMobileView ? MOBILE_IMAGES : DESKTOP_IMAGES),
    [isMobileView]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageSet.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [imageSet.length]);

  useEffect(() => {
    if (currentImageIndex >= imageSet.length) {
      setCurrentImageIndex(0);
    }
  }, [imageSet.length, currentImageIndex]);

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
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#fde4e4]/60 blur-2xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#dbe9ff]/60 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] text-center space-y-6 pt-12 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Optimized background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#c53030]/20 via-[#7a0b0b]/15 to-[#0b1f33]/20 blur-2xl -z-10"
            style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
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
              {title}
            </motion.span>
            
            {/* Decorative underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-2 bg-gradient-to-r from-transparent via-[#c53030] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </motion.h1>
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {imageSet.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-[#f87171] w-8' : 'bg-[#0b1f33]/40 w-2 hover:bg-[#c53030]/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

