import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[#f8fafc] via-[#fef7f7] to-[#f3f6fb] text-[#0b1f33] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcd6d6]/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dbe9ff]/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
            <div className="flex items-center gap-3 mb-4">
              <img src="/tpbridge-logo.png" alt="Tipping Bridge" className="h-10 w-10 object-contain" />
              <h3 className="text-2xl font-bold tracking-tight text-[#0b1f33]">Tipping Bridge</h3>
            </div>
            <p className="text-[#516074] leading-relaxed mb-6">
              Your trusted partner for NRI services in India. Connecting families across continents with expert care and seamless service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className="p-2 bg-white shadow-sm hover:bg-[#fbe4e4] rounded-lg transition-colors duration-300"
                  >
                    <Icon size={20} />
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
            <h4 className="text-lg font-semibold mb-6 text-[#0b1f33]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[#516074] hover:text-[#c53030] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#c53030] transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
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
            <h4 className="text-lg font-semibold mb-6 text-[#0b1f33]">Services</h4>
            <ul className="space-y-3">
              {[
                'Property Management',
                'Documentation',
                'Healthcare Support',
                'Legal Services',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-[#516074] hover:text-[#c53030] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#c53030] transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
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
            <h4 className="text-lg font-semibold mb-6 text-[#0b1f33]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#c53030] flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@tippingbridge.com"
                  className="text-[#516074] hover:text-[#c53030] transition-colors duration-300"
                >
                  info@tippingbridge.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#c53030] flex-shrink-0 mt-1" />
                <a
                  href="tel:+917303667600"
                  className="text-[#516074] hover:text-[#c53030] transition-colors duration-300"
                >
                  +91 73036 67600
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#c53030] flex-shrink-0 mt-1" />
                <span className="text-[#516074]">Gurgaon, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#e7dede] pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#516074] text-sm">
              &copy; {currentYear} Tipping Bridge. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#516074] hover:text-[#c53030] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#516074] hover:text-[#c53030] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
