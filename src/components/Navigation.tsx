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
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/70 backdrop-blur'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/tpbridge-logo.jpg"
              alt="Tipping Bridge"
              className="h-10 w-10 md:h-12 md:w-12 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <span
              className={`text-2xl md:text-3xl font-bold tracking-tight text-[#0b1f33]`}
            >
              Tipping Bridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const getLinkClassName = () => {
                if (isActive(link.to)) return 'text-[#c53030]';
                if (isScrolled)
                  return 'text-slate-800 hover:text-[#c53030]';
                return 'text-[#0b1f33] hover:text-[#c53030]';
              };

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative group"
                >
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${getLinkClassName()}`}
                  >
                    {link.label}
                  </span>
                  {isActive(link.to) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c53030]"
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
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c53030] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#c53030] to-[#e04a4a] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-800' : 'text-[#0b1f33]'}`}
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
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md shadow-lg"
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
                  : 'text-slate-800 hover:text-[#c53030]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full px-6 py-3 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}

