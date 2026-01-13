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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import PMImg from '../assets/images/PM.png';
import ECImg from '../assets/images/EC.png';
import LSImg from '../assets/images/LS.png';
import LDImg from '../assets/images/LD.png';
import SEGImg from '../assets/images/SEG.png';
import IIImg from '../assets/images/II.png';
import ASImg from '../assets/images/AS.png';

const services = [
  {
    id: 'property-management',
    title: 'Property Management for NRIs',
    description:
      'Complete property oversight, maintenance, and tenant coordination to keep your assets protected and profitable.',
    icon: Home,
    gradient: 'from-[#c53030] to-[#7a0b0b]',
    image: PMImg,
  },
  {
    id: 'long-short-stay',
    title: 'Long and Short Stay Service Apartments',
    description:
      'Curated homes and serviced apartments for every duration, with housekeeping, security, and concierge support.',
    icon: BedDouble,
    gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    image: LSImg,
  },
  {
    id: 'elderly-care',
    title: 'Eldery Care',
    description:
      'Personalised care plans, home assistance, and wellness monitoring to ensure your loved ones feel supported.',
    icon: HeartPulse,
    gradient: 'from-[#e53e3e] to-[#b91c1c]',
    image: ECImg,
  },
  {
    id: 'investments-insurance',
    title: 'Investments & Insurance',
    description:
      'Guided portfolio planning, safe investments, and insurance advisory tailored for NRI risk profiles.',
    icon: PiggyBank,
    gradient: 'from-[#0b1f33] to-[#102c44]',
    image: IIImg,
  },
  {
    id: 'government-documentation',
    title: 'Legal & Documentation',
    description:
      'Fast-track processing for certificates, legal paperwork, and compliance documentation with expert coordination.',
    icon: FileText,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: LDImg,
  },
  {
    id: 'doctor-hospital-assistance',
    title: 'Assistance Services with Doctor & Hospitalisation',
    description:
      'Priority medical appointments, hospital coordination, and healthcare support handled end-to-end.',
    icon: Stethoscope,
    gradient: 'from-[#0b1f33] to-[#1d3557]',
    image: ASImg,
  },
  {
    id: 'events-gathering',
    title: 'Small Events & Gathering Services',
    description:
      'Intimate celebrations, religious ceremonies, and community meetups planned with venues, décor, and catering.',
    icon: PartyPopper,
    gradient: 'from-[#7a0b0b] to-[#c53030]',
    image: SEGImg,
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    // reset current slide when itemsPerView changes
    setCurrentSlide(0);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, Math.ceil(services.length / itemsPerView) - 1);
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

        {/* Services Slider */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onClick={() => navigate(`/services?service=${service.id}`)}
                  className="group relative cursor-pointer px-3"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="relative h-full rounded-3xl transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(197,48,48,0.06)]">

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#c53030] opacity-0 group-hover:opacity-100 rounded-3xl"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: "200% 200%" }}
                    />

                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_50px_100px_-20px_rgba(197,48,48,0.12)] transition-all duration-500 h-[28rem] flex flex-col">
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.07 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />

                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 0.8 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      <div className="p-6 relative flex-1 overflow-hidden">
                        <h3 className="text-xl font-extrabold text-[#0b1f33] group-hover:text-[#c53030] transition-colors mb-2">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4 text-sm max-h-[8.5rem] overflow-hidden">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 z-20">
            <button onClick={() => setCurrentSlide((s) => Math.max(0, s - 1))} className="p-2 bg-white/80 rounded-full shadow">
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-3 z-20">
            <button onClick={() => setCurrentSlide((s) => Math.min(maxIndex, s + 1))} className="p-2 bg-white/80 rounded-full shadow">
              <ChevronRight />
            </button>
          </div>
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
