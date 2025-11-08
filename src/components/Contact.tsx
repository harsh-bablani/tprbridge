import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#fff7f7] via-[#fef2f2] to-[#f3f6fb] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#fcd6d6]/60 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dbe9ff]/60 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-[#f87171] mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-6 tracking-tight">
            Get in <span className="text-[#c53030]">Touch</span>
          </h2>
          <p className="text-xl text-[#34445a] max-w-3xl mx-auto">
            Ready to experience the peace of mind that comes with trusted NRI services?
            Let's start a conversation about how we can help you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: 'Email Us',
              content: 'info@tippingbridge.com',
              link: 'mailto:info@tippingbridge.com',
            },
            {
              icon: Phone,
              title: 'Call Us',
              content: '+1 (555) 123-4567',
              link: 'tel:+15551234567',
            },
            {
              icon: MapPin,
              title: 'Visit Us',
              content: 'Mumbai, India',
              link: '#',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f2dcdc]"
              >
                <div className="inline-flex p-4 bg-[#fde4e4] rounded-full mb-4">
                  <Icon size={32} className="text-[#c53030]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1f33] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.content}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c53030] to-[#e04a4a] text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-[#c53030]/40 transition-all duration-300 hover:scale-105"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
