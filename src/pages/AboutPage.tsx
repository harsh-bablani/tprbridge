import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import {
  Target,
  Award,
  Globe,
  Users,
  Heart,
  CheckCircle,
  Shield,
  TrendingUp,
  Zap,
  Handshake,
  Star,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { value: '15+', label: 'Years in Service', icon: Award },
    { value: '5000+', label: 'Happy Families', icon: Users },
    { value: '50+', label: 'Countries Served', icon: Globe },
    { value: '99.8%', label: 'Satisfaction Rate', icon: Heart },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description:
        'We build lasting relationships based on integrity, transparency, and unwavering commitment to your success. Your trust is our most valuable asset.',
      color: 'from-[#c53030] to-[#7a0b0b]',
    },
    {
      icon: Heart,
      title: 'Care & Compassion',
      description:
        'We understand that behind every service request is a family. We treat your needs with the same care and attention we would give our own.',
      color: 'from-[#e63946] to-[#c53030]',
    },
    {
      icon: Zap,
      title: 'Efficiency & Speed',
      description:
        'Time is precious when you\'re managing things from afar. We deliver prompt, efficient solutions without compromising on quality or attention to detail.',
      color: 'from-[#7a0b0b] to-[#0b1f33]',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description:
        'We don\'t just provide services—we become your trusted partner in India, working alongside you to achieve your goals and protect your interests.',
      color: 'from-[#0b1f33] to-[#102c44]',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description:
        'We continuously evolve our services and leverage technology to provide better, faster, and more accessible solutions for NRI families worldwide.',
      color: 'from-[#d33b3b] to-[#7a0b0b]',
    },
    {
      icon: Star,
      title: 'Excellence',
      description:
        'We strive for excellence in every interaction, ensuring the highest standards of service quality, professionalism, and customer satisfaction.',
      color: 'from-[#102c44] to-[#0b1f33]',
    },
  ];

  const services = [
    {
      title: 'Property Management',
      description: 'Complete oversight of your real estate investments in India',
    },
    {
      title: 'Documentation Services',
      description: 'Expert handling of all legal and administrative paperwork',
    },
    {
      title: 'Healthcare Support',
      description: 'Connecting your family with quality medical care in India',
    },
    {
      title: 'Business Services',
      description: 'Comprehensive support for your business operations in India',
    },
    {
      title: 'Education Consulting',
      description: 'Guidance for educational opportunities and admissions',
    },
    {
      title: 'Legal & Compliance',
      description: 'Ensuring all legal requirements are met with precision',
    },
  ];

  const whatMakesUsUnique = [
    {
      title: 'Deep Local Knowledge',
      description:
        'Our team has extensive on-ground experience across major Indian cities, with established relationships with government officials, professionals, and service providers.',
    },
    {
      title: 'NRI-Focused Expertise',
      description:
        'We specialize exclusively in serving NRI families, understanding the unique challenges you face and tailoring our services to meet your specific needs.',
    },
    {
      title: 'Technology-Driven Solutions',
      description:
        'We leverage modern technology to keep you connected and informed, providing real-time updates and easy access to all your service information.',
    },
    {
      title: 'Comprehensive Service Network',
      description:
        'Our verified network of trusted partners spans across India, ensuring you get quality service no matter where your needs are located.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <PageHero title="About Us" />

      {/* Company Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0b1f33] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Founded with a simple yet powerful vision, Tipping Bridge was born from the understanding that
                being an NRI comes with unique challenges. Managing property, caring for family, handling
                documentation, and staying connected to India while living abroad can be overwhelming.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With over 15 years of experience, we've built deep relationships with trusted partners,
                government officials, and professionals across India. We know the challenges you face, and
                we're experts at solving them. Our team combines local expertise with a global perspective,
                ensuring that distance never becomes a barrier to taking care of what matters most.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we're proud to serve thousands of NRI families across 50+ countries, helping them
                stay connected to India with confidence, ease, and peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-[#fdeaea] via-[#f7f1f1] to-[#e9effa] border-2 border-[#f6dada] rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="space-y-6">
                <div>
                  <Target className="text-[#c53030] mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-[#0b1f33] mb-3">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be the most trusted friend and partner for NRI families in India—making every
                    connection back home simple, smooth, and stress-free. We envision a world where distance
                    is no longer a barrier to managing your life in India.
                  </p>
                </div>
                <div className="border-t border-[#f6dada] pt-6">
                  <Award className="text-[#c53030] mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-[#0b1f33] mb-3">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To simplify NRI life with expert, caring support across all services—saving you time,
                    money, and worry through reliable, trustworthy professionals. We're committed to
                    providing seamless experiences that let you focus on what truly matters: your family and
                    your future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-white to-[#fef2f2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
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
                  <div className="text-5xl font-bold text-[#c53030] mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-semibold">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="h-1 w-16 bg-[#f87171] mx-auto"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-6 tracking-tight">
              Our Core <span className="text-[#c53030]">Values</span>
            </h2>
            <p className="text-xl text-[#34445a] max-w-3xl mx-auto">
              The principles that guide everything we do and every relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f2dcdc]"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${value.color} rounded-xl mb-4`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1f33] mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#fef2f2] to-[#f3f6fb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="h-1 w-16 bg-[#f87171] mx-auto"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-6 tracking-tight">
              What Makes Us <span className="text-[#c53030]">Unique</span>
            </h2>
            <p className="text-xl text-[#34445a] max-w-3xl mx-auto">
              Discover the qualities that set Tipping Bridge apart in serving NRI families worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatMakesUsUnique.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#f2dcdc]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#fde4e4] rounded-xl flex-shrink-0">
                    <CheckCircle className="text-[#c53030]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0b1f33] mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="h-1 w-16 bg-[#f87171] mx-auto"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-6 tracking-tight">
              Our <span className="text-[#c53030]">Services</span>
            </h2>
            <p className="text-xl text-[#34445a] max-w-3xl mx-auto mb-8">
              Comprehensive solutions designed to meet all your needs in India, all in one place.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-[#c53030]/40 transition-all duration-300 hover:scale-105"
            >
              <span>Explore All Services</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#f2dcdc]"
              >
                <div className="h-1 w-12 bg-[#c53030] mb-4"></div>
                <h3 className="text-xl font-bold text-[#0b1f33] mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Tipping Bridge Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied NRI families who trust us to handle their needs in India.
            Let's start a conversation about how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c53030] rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <span>View Services</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

