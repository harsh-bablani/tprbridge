import { motion } from 'framer-motion';
import { Target, Award, Globe, Users, Heart, CheckCircle } from 'lucide-react';
import Counter from './Counter';

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
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white/50 via-[#fef9f8] to-[#f0f5fb]/70 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-[#c53030] mb-6"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0b1f33] mb-6 sm:mb-8 md:mb-10 tracking-tight"
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6"
            >
              Tipping Bridge is an organization specially formed to serve Non-Resident Indians (NRIs) who are currently living abroad and have direct or indirect liabilities and interests in India. We understand what it means to be an NRI, whether you are managing a home in India while living abroad, caring for aging parents, or handling complex documentation, we're here to make your life easier.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6"
            >
              Our mission is to make the life of NRIs easier by providing professional services for all their small and big needs in India. We aim to make your holidays in India actual holidays by eliminating the time wasted running around to get documentation work done, immigration work, and other essential tasks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8"
            >
              As your one-point solution for all NRI needs in India, we handle the details so you can focus on what truly matters, your family and your peace of mind.
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              {[
                '24/7 Dedicated Support',
                'Verified & Trusted Partners',
                'Transparent Pricing',
                'Quick Response Times',
              ].map((point) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-[#c53030] flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/95 via-[#fef5f5] to-[#f3f6fb] backdrop-blur-xl border-2 border-[#f6dada] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-2xl overflow-hidden">
              {/* Optimized background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#c53030]/3 via-[#7a0b0b]/3 to-[#0b1f33]/3 opacity-30" />
              
              <div className="relative space-y-6 sm:space-y-8 md:space-y-10 z-10">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.3 } }}
                      className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                    >
                      <motion.div
                        className="relative p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 group-hover:shadow-2xl transition-all self-start sm:self-auto"
                        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <Icon size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" strokeWidth={2} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b1f33] mb-2 sm:mb-3 md:mb-4 group-hover:text-[#c53030] transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">{value.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 border-t-2 border-b-2 border-[#f2dcdc] py-8 sm:py-10 md:py-12"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-[#fde4e4] rounded-full">
                    <Icon size={24} className="text-[#c53030]" />
                  </div>
                </div>
                <Counter
                  value={stat.value}
                  duration={2000}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#c53030] mb-1 sm:mb-2"
                />
                <div className="text-xs sm:text-sm text-slate-600 font-semibold leading-tight px-1">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
