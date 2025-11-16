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
  const isHome = location.pathname === '/';

  const hasSolidBackground = isHome ? isScrolled : true;
  const navBackgroundClass = hasSolidBackground
    ? 'bg-white/95 backdrop-blur-md shadow-xl'
    : 'bg-transparent';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}
      style={
        isHome && !isScrolled
          ? { backgroundColor: 'transparent', boxShadow: 'none', backdropFilter: 'none' }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group md:-ml-[5%]">
            <motion.img
              src="/tpbridge-logo.png"
              alt="Tipping Bridge"
              className="h-20 w-20 md:h-24 md:w-24 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
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

