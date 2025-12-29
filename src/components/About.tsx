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
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#fde4e4] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d8e5ff] rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-8 tracking-tight"
            >
              About{' '}
              <span className="text-[#c53030] relative">
                Tipping Bridge
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-[#f87171]"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              Tipping Bridge is an organization specially formed to serve Non-Resident Indians (NRIs) who are currently living abroad and have direct or indirect liabilities and interests in India. We understand what it means to be an NRI—whether you're managing a home in India while living abroad, caring for aging parents, or handling complex documentation, we're here to make your life easier.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-slate-600 leading-relaxed mb-6"
            >
              Our mission is to make the life of NRIs easier by providing professional services for all their small and big needs in India. We aim to make your holidays in India actual holidays by eliminating the time wasted running around to get documentation work done, immigration work, and other essential tasks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed mb-8"
            >
              As your one-point solution for all NRI needs in India, we handle the details so you can focus on what truly matters—your family and your peace of mind.
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
            <div className="bg-gradient-to-br from-[#fdeaea] via-[#f7f1f1] to-[#e9effa] border-2 border-[#f6dada] rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-8">
                {values.map((value) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      className="flex items-start gap-4"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 bg-white rounded-2xl shadow-lg flex-shrink-0 border border-[#f1d2d2]"
                      >
                        <Icon size={32} className="text-[#c53030]" strokeWidth={1.5} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0b1f33] mb-3">{value.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t-2 border-b-2 border-[#f2dcdc] py-12"
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
                  className="text-5xl font-bold text-[#c53030] mb-2"
                />
                <div className="text-sm text-slate-600 font-semibold">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
