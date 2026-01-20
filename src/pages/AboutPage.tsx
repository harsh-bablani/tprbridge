import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Counter from '../components/Counter';
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
  Mail,
  Linkedin,
} from 'lucide-react';
import FounderImg from '../assets/images/Founder.jpeg';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { value: '20+', label: 'Service Locations', icon: Award },
    { value: '50+', label: 'Team Members', icon: Users },
    { value: '1060+', label: 'Customers Served', icon: Globe },
    { value: '95%', label: 'Customer Satisfaction Index', icon: Heart },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We maintain a high standard of integrity and professionalism by doing the right thing. Our core values are the guiding beacons for all that we do and provide us the benchmark for assessing our performance.',
      color: 'from-[#c53030] to-[#7a0b0b]',
    },
    {
      icon: Heart,
      title: 'Courtesy',
      description:
        'We treat everybody with respect, courtesy, and compassion. We understand that behind every service request is a family, and we treat your needs with the same care and attention we would give our own.',
      color: 'from-[#e63946] to-[#c53030]',
    },
    {
      icon: Zap,
      title: 'Dynamism',
      description:
        "We respond positively to the ever-changing socio-politico-economic environment and realign strategies to meet new challenges. Time is precious when you're managing things from afar, and we deliver prompt, efficient solutions.",
      color: 'from-[#7a0b0b] to-[#0b1f33]',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description:
        "We don't just provide services—we become your trusted partner in India, working alongside you to achieve your goals and protect your interests.",
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
        'We continuously strive for excellence in whatever we do and seek to create benchmarks for others. We ensure the highest standards of service quality, professionalism, and customer satisfaction.',
      color: 'from-[#102c44] to-[#0b1f33]',
    },
  ];

  const services = [
    {
      title: 'Property Management',
      description: 'Complete property oversight, maintenance, and tenant coordination to keep your assets protected and profitable.',
    },
    {
      title: 'Long and Short Stay',
      description: 'Curated homes and serviced apartments for every duration, with housekeeping, security, and concierge support.',
    },
    {
      title: 'Elderly Care',
      description: 'Personalised care plans, home assistance, and wellness monitoring to ensure your loved ones feel supported.',
    },
    {
      title: 'Investments and Insurance',
      description: 'Guided portfolio planning, safe investments, and insurance advisory tailored for NRI risk profiles.',
    },
    {
      title: 'Doctor & Hospital Assistance',
      description: 'Priority appointments, hospital coordination, discharge support, and second opinions handled end-to-end.',
    },
    {
      title: 'Government Documentation',
      description: 'Fast-track processing for IDs, certificates, attestations, and compliance paperwork across departments.',
    },
    {
      title: 'Events & Gathering Services',
      description: 'Intimate celebrations, religious ceremonies, and community meetups planned with venues, décor, and catering.',
    },
  ];

  const whatMakesUsUnique = [
    {
      title: 'One-Point Solution',
      description:
        'We are your comprehensive one-point solution for all NRI needs in India, eliminating the hassle of dealing with multiple service providers for different requirements.',
    },
    {
      title: 'NRI-Focused Expertise',
      description:
        'Tipping Bridge is an organization specially formed to serve Non-Resident Indians who are currently living abroad and have direct or indirect liabilities and interests in India.',
    },
    {
      title: 'Professional Service Excellence',
      description:
        'We provide professional services for all your small and big needs in India, ensuring that your holidays in India are actual holidays without the stress of running around for documentation and other tasks.',
    },
    {
      title: 'Trusted and Respected',
      description:
        'We aspire to be the most trusted and respected professional services firm valued by NRIs for delivering excellence in every interaction.',
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
                Tipping Bridge is an organization specially formed to serve Non-Resident Indians (NRIs) who are currently living abroad and have direct or indirect liabilities and interests in India. We understand that being an NRI comes with unique challenges—managing property, caring for family, handling documentation, and staying connected to India while living abroad can be overwhelming.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our mission is to make the life of NRIs easier by providing professional services for all their small and big needs in India. We aim to make your holidays in India actual holidays by eliminating the time wasted running around to get documentation work done, immigration work, and other essential tasks.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                As your one-point solution for all NRI needs in India, we serve families across the world—whether you're in the USA, Canada, UK, Australia, Singapore, Dubai, or anywhere else. Tipping Bridge is ready to help you stay connected to India with confidence, ease, and peace of mind.
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
                    Tipping Bridge aspires to be the most trusted and respected professional services firm valued by NRIs for delivering excellence and becoming a one-point solution for all their needs in India.
                  </p>
                </div>
                <div className="border-t border-[#f6dada] pt-6">
                  <Award className="text-[#c53030] mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-[#0b1f33] mb-3">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To make the life of NRI's easier by providing professional services for all their small and big needs in India. To make their holidays in India actual holidays by eliminating the time wasted running around to get documentation work done, immigration work, and other essential tasks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Founder / Director Section - Vishal Matta */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-[#f2dcdc] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <div className="w-44 h-44 md:w-56 md:h-56 flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#f6dada] bg-gray-100">
                <img
                  src={FounderImg}
                  alt="Vishal Matta - Founder & Managing Director"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 12%' }}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const fallback = img.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gray-200 items-center justify-center text-xl font-bold text-slate-600" style={{display: 'none'}}>VM</div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <a href="mailto:vishal.matta@tippingbridge.com" title="Email" className="p-2 rounded-full bg-[#fde4e4] hover:bg-[#fbd5d5] transition">
                  <Mail size={18} className="text-[#c53030]" />
                </a>
                <a href="https://www.linkedin.com/in/vishalmatta/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2 rounded-full bg-[#e6f0fb] hover:bg-[#d9e9ff] transition">
                  <Linkedin size={18} className="text-[#0b1f33]" />
                </a>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b1f33] mb-2">Vishal Matta</h3>
              <div className="text-sm text-slate-600 font-medium mb-4">Founder & Managing Director – TippingBridge</div>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                For millions of Indians living abroad, distance is not just geographical, it is emotional. Homes, parents, investments, and memories remain in India, often carrying silent worries. Vishal Matta founded TippingBridge to take that weight off their hearts.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                With a clear understanding of the challenges NRIs face managing property from another country, ensuring parents are cared for, handling compliance, or simply needing someone trustworthy on the ground, Vishal envisioned a service that feels less like outsourcing and more like family support with professional discipline.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Vishal’s journey is shaped by one belief: trust cannot be automated; it must be earned every day. Under his leadership, TippingBridge delivers personalised property management, tenancy oversight, elder assistance, documentation support, and concierge services each designed to provide peace of mind, not just execution.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-0">
                What sets Vishal apart is his human-first approach. He understands that behind every property lies a lifetime of effort, behind every parent lies a lifetime of love, and behind every investment lies a dream for the next generation. TippingBridge operates with empathy, transparency, and accountability ensuring NRIs feel connected, informed, and respected, even from thousands of miles away.
              </p>
            </div>
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
                  <Counter
                    value={stat.value}
                    duration={2000}
                    className="text-5xl font-bold text-[#c53030] mb-2"
                  />
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

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f2dcdc]"
                >
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${value.color} rounded-xl mb-4`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#0b1f33] mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
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

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {whatMakesUsUnique.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, x: -50, scale: 0.95 },
                  visible: { opacity: 1, x: 0, scale: 1 },
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{
                  x: -5,
                  scale: 1.02,
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.3 }
                }}
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
          </motion.div>
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

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px -12px rgba(197, 48, 48, 0.15)',
                  transition: { duration: 0.3 }
                }}
                className="group relative h-full"
              >
                <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-[#c53030]/30 via-[#7a0b0b]/20 to-[#0b1f33]/20 transition-all duration-500 group-hover:shadow-[0_30px_60px_-12px_rgba(197,48,48,0.4)] group-hover:p-[2px]">
                  <div className="relative h-full bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 border border-white/70">
                    <div className="p-8 relative">
                      <motion.div
                        className="h-1 w-12 bg-gradient-to-r from-[#c53030] to-[#7a0b0b]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ originX: 0 }}
                      />
                      <h3 className="text-xl font-bold text-[#111827] mb-3 mt-3 group-hover:text-[#111827] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#111827]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

