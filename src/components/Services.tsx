import { Link } from 'react-router-dom';
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
    title: 'Property Management',
    description:
      'Complete property oversight, maintenance, and tenant coordination to keep your assets protected and profitable.',
    icon: Home,
    gradient: 'from-[#c53030] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Long and Short Stay',
    description:
      'Curated homes and serviced apartments for every duration, with housekeeping, security, and concierge support.',
    icon: BedDouble,
    gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    title: 'Elderly Care',
    description:
      'Personalised care plans, home assistance, and wellness monitoring to ensure your loved ones feel supported.',
    icon: HeartPulse,
    gradient: 'from-[#e53e3e] to-[#b91c1c]',
    image: 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=800&q=80',
  },
  {
    title: 'Investments and Insurance',
    description:
      'Guided portfolio planning, safe investments, and insurance advisory tailored for NRI risk profiles.',
    icon: PiggyBank,
    gradient: 'from-[#0b1f33] to-[#102c44]',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80',
  },
  {
    title: 'Doctor & Hospital Assistance',
    description:
      'Priority appointments, hospital coordination, discharge support, and second opinions handled end-to-end.',
    icon: Stethoscope,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  },
  {
    title: 'Government Documentation',
    description:
      'Fast-track processing for IDs, certificates, attestations, and compliance paperwork across departments.',
    icon: FileText,
    gradient: 'from-[#0b1f33] to-[#1d3557]',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    title: 'Events & Gathering Services',
    description:
      'Intimate celebrations, religious ceremonies, and community meetups planned with venues, décor, and catering.',
    icon: PartyPopper,
    gradient: 'from-[#7a0b0b] to-[#c53030]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  },
];

export default function Services() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-white via-[#f5f2f2] to-[#f9f3f3] overflow-hidden px-4 sm:px-6">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbd5d5] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c7d2fe] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-[#c53030] mx-auto"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b1f33] mb-6 tracking-tight">
            Our <span className="text-[#c53030]">Premium Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet every need of NRI families with excellence and care
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative h-full"
              >
                <div className="relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-[#fde4e4] via-white to-[#dbe9ff] transition-all duration-300 group-hover:shadow-[0_20px_45px_-28px_rgba(197,48,48,0.65)]">
                  <div className="relative h-full bg-white/90 rounded-[calc(1.5rem-1px)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f1e5e5]">
                    {/* Image Background */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-4 bg-white/25 backdrop-blur-sm rounded-2xl border border-white/40">
                          <Icon size={48} className="text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-2xl font-bold text-[#0b1f33] group-hover:text-[#c53030] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4 text-base sm:text-lg">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[#c53030] font-semibold group-hover:gap-2 transition-all">
                        <span>Learn more</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover effect gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                    />
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
