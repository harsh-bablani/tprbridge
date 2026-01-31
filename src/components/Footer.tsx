import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import PopupContactForm from './PopupContactForm'

function Footer() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { label: 'Property Management', id: 'property-management' },
    { label: 'Long and Short Stay', id: 'long-short-stay' },
    { label: 'Elderly Care', id: 'elderly-care' },
    { label: 'Investments and Insurance', id: 'investments-insurance' },
    { label: 'Doctor & Hospital Assistance', id: 'doctor-hospital-assistance' },
    { label: 'Government Documentation', id: 'government-documentation' },
    { label: 'Events & Gathering Services', id: 'events-gathering' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100088852623320', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/tipping.bridge/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/tipping-bridge/', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[#0a1628] via-[#162232] to-[#0a1628] text-white overflow-hidden">
      <PopupContactForm />
      {/* Premium Luxury Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          animate={{
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#c53030]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />
        <motion.div
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          animate={{
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#7a0b0b]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/90 p-3 rounded-2xl shadow-lg shadow-white/5 backdrop-blur-sm">
                <motion.img
                  src="/tpbridge-logo.png"
                  alt="Tipping Bridge"
                  className="h-20 w-auto object-contain"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              Your trusted partner for NRI services in India. Connecting families across continents with expert care and seamless service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative p-3 bg-white/10 backdrop-blur-md hover:bg-gradient-to-br hover:from-[#c53030] hover:to-[#7a0b0b] rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
                  >
                    <Icon size={22} className="text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <motion.div
                className="h-1 w-8 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group text-lg font-medium"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] group-hover:w-6 transition-all duration-300 rounded-full"
                    />
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <motion.div
                className="h-1 w-8 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((service, index) => (
                <motion.li
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                >
                  <button
                    onClick={() => navigate(`/services?service=${service.id}`)}
                    className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group text-lg font-medium cursor-pointer w-full text-left"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] group-hover:w-6 transition-all duration-300 rounded-full"
                    />
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.label}
                    </motion.span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <motion.div
                className="h-1 w-8 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              Contact Us
            </h4>
            <ul className="space-y-5">
              <motion.li
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                >
                  <Mail size={20} className="text-white" />
                </motion.div>
                <a
                  href="mailto:info@tippingbridge.com"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium pt-1"
                >
                  info@tippingbridge.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                >
                  <Phone size={20} className="text-white" />
                </motion.div>
                <a
                  href="tel:+917303667600"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium pt-1"
                >
                  +91 73036 67600
                </a>
              </motion.li>
              <motion.li
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] rounded-lg shadow-lg"
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin size={20} className="text-white" />
                </motion.div>
                <span className="text-white/80 text-lg font-medium pt-1">Gurgaon, India</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-10 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              className="text-white/60 text-base font-medium"
              whileHover={{ scale: 1.05 }}
            >
              &copy; {currentYear} Tipping Bridge. All rights reserved.
            </motion.p>
            <div className="flex gap-8 text-base">
              <Link
                to="/privacy-policy"
                className="text-white/60 hover:text-white transition-all duration-300 font-medium relative group"
              >
                Privacy Policy
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
              </Link>
              <Link
                to="/privacy-policy"
                className="text-white/60 hover:text-white transition-all duration-300 font-medium relative group"
              >
                Terms of Service
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
