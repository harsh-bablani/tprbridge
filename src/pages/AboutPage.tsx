import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import {
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
  Calendar,
  Quote,
} from 'lucide-react';
import FounderImg from '../assets/images/Founder.jpg';
import AboutVideo from '../assets/images/About.mp4';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { value: '20+', label: 'Service Locations', icon: Award },
    { value: '50+', label: 'Team Members', icon: Users },
    { value: '1060+', label: 'Customers Served', icon: Globe },
    { value: '95%', label: 'Customer Satisfaction Index', icon: Heart },
    { value: '7+', label: 'Years of Experience', icon: Calendar },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We maintain a high standard of integrity and professionalism by doing the right thing. Our core values are the guiding beacons for all that we do and provide us the benchmark for assessing our performance.',
      color: 'bg-[#fff5f5] text-[#c53030]',
    },
    {
      icon: Heart,
      title: 'Courtesy',
      description:
        'We treat everybody with respect, courtesy, and compassion. We understand that behind every service request is a family, and we treat your needs with the same care and attention we would give our own.',
      color: 'bg-[#fff0f0] text-[#e63946]',
    },
    {
      icon: Zap,
      title: 'Dynamism',
      description:
        "We respond positively to the ever-changing socio-politico-economic environment and realign strategies to meet new challenges. Time is precious when you're managing things from afar, and we deliver prompt, efficient solutions.",
      color: 'bg-[#f0f4f8] text-[#0b1f33]',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description:
        "We don't just provide services—we become your trusted partner in India, working alongside you to achieve your goals and protect your interests.",
      color: 'bg-[#eef2ff] text-[#102c44]',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description:
        'We continuously evolve our services and leverage technology to provide better, faster, and more accessible solutions for NRI families worldwide.',
      color: 'bg-[#fff1f2] text-[#d33b3b]',
    },
    {
      icon: Star,
      title: 'Excellence',
      description:
        'We continuously strive for excellence in whatever we do and seek to create benchmarks for others. We ensure the highest standards of service quality, professionalism, and customer satisfaction.',
      color: 'bg-[#f8fafc] text-[#0b1f33]',
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
    <div className="min-h-screen bg-white font-sans selection:bg-[#c53030] selection:text-white">
      <div style={{ backgroundColor: 'white' }}>
        <Navigation />
      </div>
      
      {/* Cinematic Video Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={AboutVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33] via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Your NRI Needs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c53030] via-[#ff8f8f] to-[#c53030]">
                Solved
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed font-poppins tracking-wide">
                The premier concierge service for Non-Resident Indians, delivering peace of mind through professional integrity and personalized care.
            </p>
          </motion.div>
        </div>
        
      </div>

      {/* Our Story - Luxurious Layout */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 text-[#f8f9fa] text-[12rem] font-bold leading-none select-none -z-10">
                01
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0b1f33] mb-8 leading-tight">
                Our <span className="text-[#c53030]">Story</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
                Tipping Bridge is an organization specially formed to serve Non-Resident Indians (NRIs) who are currently living abroad and have direct or indirect liabilities and interests in India. We understand that being an NRI comes with unique challenges—managing property, caring for family, handling documentation, and staying connected to India while living abroad can be overwhelming.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
                Our mission is to make the life of NRIs easier by providing professional services for all their small and big needs in India. We aim to make your holidays in India actual holidays by eliminating the time wasted running around to get documentation work done, immigration work, and other essential tasks.
              </p>
              
              <div className="flex gap-12 mt-12 border-t border-slate-100 pt-12">
                <div>
                  <div className="text-4xl font-bold text-[#0b1f33] mb-2">Global</div>
                  <div className="text-slate-500 uppercase tracking-wider text-sm">Reach</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0b1f33] mb-2">Local</div>
                  <div className="text-slate-500 uppercase tracking-wider text-sm">Expertise</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#c53030] rounded-[3rem] rotate-3 opacity-5"></div>
              <div className="bg-slate-50 p-12 rounded-[3rem] relative z-10 border border-slate-100 shadow-2xl">
                <Quote className="text-[#c53030] w-16 h-16 mb-8 opacity-20" />
                <h3 className="text-2xl font-bold text-[#0b1f33] mb-6">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  "Tipping Bridge aspires to be the most trusted and respected professional services firm valued by NRIs for delivering excellence and becoming a one-point solution for all their needs in India."
                </p>
                <h3 className="text-2xl font-bold text-[#0b1f33] mb-6">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  "To make the life of NRI's easier by providing professional services for all their small and big needs in India. To make their holidays in India actual holidays."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder / Director Section - Premium Dark Theme */}
      <section className="py-32 px-6 bg-[#0b1f33] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c53030] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">About the <span className="text-[#c53030]">Founder</span></h2>
            <div className="h-1 w-24 bg-[#c53030] mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            <motion.div 
              className="w-full lg:w-1/3 flex flex-col items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border-2 border-white/10">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#c53030] shadow-2xl">
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
                  <div className="hidden w-full h-full bg-gray-800 items-center justify-center text-xl font-bold text-white" style={{display: 'none'}}>VM</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="mailto:vishal.matta@tippingbridge.com" title="Email" className="p-4 rounded-full bg-white/5 hover:bg-[#c53030] transition-all duration-300 border border-white/10 group">
                  <Mail size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/vishalmatta/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-4 rounded-full bg-white/5 hover:bg-[#0077b5] transition-all duration-300 border border-white/10 group">
                  <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 text-white/90"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-white mb-2">Vishal Matta</h3>
              <div className="text-lg text-[#c53030] font-medium mb-8 tracking-wide uppercase">Founder & Managing Director</div>

              <p className="text-lg leading-relaxed mb-6 font-light">
                For millions of Indians living abroad, distance is not just geographical, it is emotional. Homes, parents, investments, and memories remain in India, often carrying silent worries. Vishal Matta founded TippingBridge to take that weight off their hearts.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-light">
                With a clear understanding of the challenges NRIs face managing property from another country, ensuring parents are cared for, handling compliance, or simply needing someone trustworthy on the ground, Vishal envisioned a service that feels less like outsourcing and more like family support with professional discipline.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-light">
                Vishal’s journey is shaped by one belief: trust cannot be automated; it must be earned every day. Under his leadership, TippingBridge delivers personalised property management, tenancy oversight, elder assistance, documentation support, and concierge services each designed to provide peace of mind, not just execution.
              </p>
              <p className="text-lg leading-relaxed font-light border-l-4 border-[#c53030] pl-6 italic text-white">
                What sets Vishal apart is his human-first approach. He understands that behind every property lies a lifetime of effort, behind every parent lies a lifetime of love, and behind every investment lies a dream for the next generation. TippingBridge operates with empathy, transparency, and accountability ensuring NRIs feel connected, informed, and respected, even from thousands of miles away.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
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
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-slate-50 rounded-2xl shadow-sm">
                      <Icon size={32} className="text-[#c53030]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <Counter
                    value={stat.value}
                    duration={2000}
                    className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-3 tracking-tight"
                  />
                  <div className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-slate-50">
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
              Core <span className="text-[#c53030]">Values</span>
            </h2>
            <p className="text-xl text-[#34445a] max-w-3xl mx-auto font-light">
              The guiding beacons for all that we do, providing the benchmark for our excellence.
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
                  className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100"
                >
                  <motion.div
                    className={`inline-flex p-4 ${value.color} rounded-2xl mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#0b1f33] mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-32 px-6 bg-white">
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
              Unparalleled dedication to serving NRI families worldwide.
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
                className="bg-slate-50 rounded-3xl p-10 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl flex-shrink-0 shadow-sm text-[#c53030]">
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0b1f33] mb-4">{item.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-32 px-6 bg-[#f8f9fa]">
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
            <p className="text-xl text-[#34445a] max-w-3xl mx-auto mb-12 font-light">
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
                <div className="relative h-full rounded-3xl p-[1px] bg-white transition-all duration-500 group-hover:shadow-2xl">
                  <div className="relative h-full bg-white rounded-3xl overflow-hidden p-8 border border-slate-200 group-hover:border-[#c53030]/30 transition-colors">
                    <div className="relative">
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
                      <p className="text-base leading-relaxed text-slate-600">
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
      <section className="py-32 px-6 bg-[#0b1f33] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c53030] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to Experience the Tipping Bridge Difference?
          </h2>
          <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
            Join thousands of satisfied NRI families who trust us to handle their needs in India.
            Let's start a conversation about how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#c53030] text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-[#c53030]/50 transition-all duration-300 hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
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
