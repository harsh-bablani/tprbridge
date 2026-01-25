import { motion } from 'framer-motion';
import { Target, Award, Globe, Users, Heart, CheckCircle } from 'lucide-react';
import Counter from './Counter';
import grpImage from '../assets/images/grp.jpeg';

export default function About() {
  const stats = [
    { value: '20+', label: 'Service Locations', icon: Award },
    { value: '50+', label: 'Team Members', icon: Users },
    { value: '1060+', label: 'Customers Served', icon: Globe },
    { value: '95%', label: 'Customer Satisfaction Index', icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Vision',
      description:
        'Tipping Bridge aspires to be the most trusted and respected professional services firm valued by NRIs for delivering excellence and becoming a one-point solution for all their needs in India.',
    },
    {
      icon: Award,
      title: 'Our Mission',
      description:
        'To make the life of NRIs easier by providing professional services for all their small and big needs in India. To make their holidays in India actual holidays by eliminating the time wasted running around to get documentation work done, immigration work, and other essential tasks.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        "Serving NRI families across the world with trusted partners in major cities and offices in key locations globally. Whether you're in the USA, Canada, UK, Australia, Singapore, Dubai, or anywhere else, Tipping Bridge is ready to help you.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white/50 via-[#fef9f8] to-[#f0f5fb]/70 overflow-hidden">
      {/* Premium luxury background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Optimized Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#fde4e4] to-[#c53030]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />
        <motion.div
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#d8e5ff] to-[#0b1f33]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#c53030] mx-auto mb-6"
          ></motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0b1f33] mb-6 tracking-tight"
          >
            About{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#7a0b0b] relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Tipping Bridge
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full shadow-lg shadow-[#c53030]/50"
              />
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                src={grpImage}
                alt="Tipping Bridge Team"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed"
            >
              Tipping Bridge is an organization specially formed to serve Non-Resident Indians (NRIs) who are currently living abroad and have direct or indirect liabilities and interests in India. We understand what it means to be an NRI, whether you are managing a home in India while living abroad, caring for aging parents, or handling complex documentation, we're here to make your life easier.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed"
            >
              Our mission is to make the life of NRIs easier by providing professional services for all their small and big needs in India. We aim to make your holidays in India actual holidays by eliminating the time wasted running around to get documentation work done, immigration work, and other essential tasks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed"
            >
              As your one-point solution for all NRI needs in India, we handle the details so you can focus on what truly matters, your family and your peace of mind.
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                '24/7 Dedicated Support',
                'Verified & Trusted Partners',
                'Transparent Pricing',
                'Quick Response Times',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
                >
                  <CheckCircle className="text-[#c53030] flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Vision / Mission / Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                  className="relative bg-gradient-to-br from-white/95 via-[#fef5f5] to-[#f3f6fb] backdrop-blur-xl border border-[#f6dada] rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c53030]/5 via-[#7a0b0b]/5 to-[#0b1f33]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    className="relative p-4 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] rounded-xl shadow-lg mb-6 w-fit"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </motion.div>

                  <h3 className="text-2xl font-extrabold text-[#0b1f33] mb-4 group-hover:text-[#c53030] transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t-2 border-b-2 border-[#f2dcdc] py-8 sm:py-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#fde4e4] rounded-full">
                    <Icon size={28} className="text-[#c53030]" />
                  </div>
                </div>
                <Counter
                  value={stat.value}
                  duration={2000}
                  className="text-4xl sm:text-5xl font-bold text-[#c53030] mb-2"
                />
                <div className="text-sm text-slate-600 font-semibold leading-tight">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
