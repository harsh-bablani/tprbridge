import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const navBackgroundClass = isScrolled
    ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-[#f2dcdc]/50'
    : 'bg-transparent';

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackgroundClass}`}
      style={
        isScrolled
          ? undefined
          : { backgroundColor: 'transparent', boxShadow: 'none', backdropFilter: 'none' }
      }
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group md:-ml-[5%] relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#c53030]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.img
              src="/tpbridge-logo.png"
              alt="Tipping Bridge"
              className="h-20 w-20 md:h-24 md:w-24 object-contain relative z-10"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const getLinkClassName = () => {
                if (isActive(link.to)) return 'text-[#c53030]';
                return 'text-[#0b1f33] hover:text-[#c53030]';
              };

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative group px-2 py-1"
                >
                  <motion.span
                    className={`text-lg font-bold transition-all duration-300 relative z-10 ${getLinkClassName()}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                  </motion.span>
                  {isActive(link.to) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full shadow-lg shadow-[#c53030]/50"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  {!isActive(link.to) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    />
                  )}
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#c53030]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0b1f33]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 text-[#0b1f33] backdrop-blur-md shadow-lg transition-colors"
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-lg font-semibold transition-colors ${
                isActive(link.to)
                  ? 'text-[#c53030]'
                  : 'text-[#0b1f33] hover:text-[#c53030]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

