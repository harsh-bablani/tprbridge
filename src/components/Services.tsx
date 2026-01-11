import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  BedDouble,
  HeartPulse,
  PiggyBank,
  Stethoscope,
  FileText,
  PartyPopper,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    id: 'property-management',
    title: 'Property Management for NRIs',
    description:
      'Complete property oversight, maintenance, and tenant coordination to keep your assets protected and profitable.',
    icon: Home,
    gradient: 'from-[#c53030] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    id: 'long-short-stay',
    title: 'Long and Short Stay Service Apartments',
    description:
      'Curated homes and serviced apartments for every duration, with housekeeping, security, and concierge support.',
    icon: BedDouble,
    gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    id: 'elderly-care',
    title: 'Eldery Care',
    description:
      'Personalised care plans, home assistance, and wellness monitoring to ensure your loved ones feel supported.',
    icon: HeartPulse,
    gradient: 'from-[#e53e3e] to-[#b91c1c]',
    image: 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=800&q=80',
  },
  {
    id: 'investments-insurance',
    title: 'Investments & Insurance',
    description:
      'Guided portfolio planning, safe investments, and insurance advisory tailored for NRI risk profiles.',
    icon: PiggyBank,
    gradient: 'from-[#0b1f33] to-[#102c44]',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80',
  },
  {
    id: 'government-documentation',
    title: 'Legal & Documentation',
    description:
      'Fast-track processing for certificates, legal paperwork, and compliance documentation with expert coordination.',
    icon: FileText,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  },
  {
    id: 'doctor-hospital-assistance',
    title: 'Assistance Services with Doctor & Hospitalisation',
    description:
      'Priority medical appointments, hospital coordination, and healthcare support handled end-to-end.',
    icon: Stethoscope,
    gradient: 'from-[#0b1f33] to-[#1d3557]',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 'events-gathering',
    title: 'Small Events & Gathering Services',
    description:
      'Intimate celebrations, religious ceremonies, and community meetups planned with venues, décor, and catering.',
    icon: PartyPopper,
    gradient: 'from-[#7a0b0b] to-[#c53030]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 sm:py-40 bg-gradient-to-b from-white/50 via-[#fef9f8]/80 to-[#f0f5fb]/70 overflow-hidden px-4 sm:px-6">
      
      {/* Premium luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Optimized Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#fbd5d5] to-[#c53030]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />

        <motion.div
          style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#c7d2fe] to-[#0b1f33]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-20 sm:mb-28"
        >

          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              className="h-1.5 w-24 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] mx-auto rounded-full shadow-lg shadow-[#c53030]/50"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#0b1f33] mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#7a0b0b] relative"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Premium Services
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive solutions tailored to meet every need of NRI families with excellence and care
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                onClick={() => navigate(`/services?service=${service.id}`)}
                className="group relative h-full cursor-pointer"
              >
                <div className="relative h-full rounded-3xl p-[2px] bg-gradient-to-br from-[#c53030]/40 via-[#7a0b0b]/30 to-[#0b1f33]/25 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(197,48,48,0.6)] group-hover:p-[3px]">

                  {/* Premium animated border glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#c53030] opacity-0 group-hover:opacity-100 rounded-3xl"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <div className="relative h-full bg-gradient-to-br from-white/97 to-white/93 backdrop-blur-xl rounded-[calc(1.5rem-2px)] overflow-hidden shadow-2xl group-hover:shadow-[0_50px_100px_-20px_rgba(197,48,48,0.5)] transition-all duration-500 border border-gradient-to-br from-white/70 to-white/50">

                    {/* Premium Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* Image Background */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />

                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                        initial={{ opacity: 0.75 }}
                        whileHover={{ opacity: 0.85 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Decorative Corners */}
                      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-3xl" />
                      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-3xl" />
                    </div>

                    {/* Content */}
                    <div className="p-8 relative">

                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 blur-3xl -z-10`}
                        transition={{ duration: 0.5 }}
                      />

                      <motion.h3
                        className="text-2xl font-extrabold text-[#0b1f33] group-hover:text-[#c53030] transition-colors mb-4 relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {service.title}

                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#c53030] to-transparent"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        />
                      </motion.h3>

                      <motion.p
                        className="text-slate-600 leading-relaxed mb-6 text-base sm:text-lg font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Learn More removed 👇 (EMPTY SPOT LEFT CLEAN) */}

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
