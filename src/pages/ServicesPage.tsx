import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Home,
  FileText,
  Heart,
  Briefcase,
  GraduationCap,
  Shield,
  X,
  Check,
  ArrowRight,
  Search,
  DollarSign,
  Clock,
  Star,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: typeof Home;
  gradient: string;
  image: string;
  features: string[];
  pricing: {
    basic: string;
    premium: string;
    enterprise: string;
  };
  duration: string;
  testimonials?: number;
}

const services: Service[] = [
  {
    id: 'property-management',
    title: 'Property Management',
    shortDescription: 'Complete property oversight, maintenance, and tenant management for your assets in India.',
    fullDescription: 'Our comprehensive property management services ensure your real estate investments in India are well-maintained, profitable, and hassle-free. We handle everything from tenant screening and rent collection to property maintenance and legal compliance.',
    icon: Home,
    gradient: 'from-[#c53030] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    features: [
      '24/7 Property Monitoring & Maintenance',
      'Tenant Screening & Management',
      'Rent Collection & Financial Reporting',
      'Legal Compliance & Documentation',
      'Regular Property Inspections',
      'Emergency Response Services',
      'Vendor Management & Coordination',
      'Property Valuation & Market Analysis',
    ],
    pricing: {
      basic: '₹15,000/month',
      premium: '₹25,000/month',
      enterprise: 'Custom',
    },
    duration: 'Ongoing',
    testimonials: 1247,
  },
  {
    id: 'documentation',
    title: 'Documentation Services',
    shortDescription: 'Expert assistance with all legal documents, certificates, and government paperwork.',
    fullDescription: 'Navigate India\'s complex documentation requirements with ease. Our expert team handles all paperwork, certificates, and government documentation, ensuring accuracy and compliance. From birth certificates to property deeds, we manage it all.',
    icon: FileText,
    gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    features: [
      'Birth, Marriage & Death Certificates',
      'Passport & Visa Documentation',
      'Property Deeds & Title Documents',
      'Educational Certificates & Transcripts',
      'Power of Attorney Documents',
      'Legal Notarization Services',
      'Government Form Filing',
      'Document Translation & Apostille',
    ],
    pricing: {
      basic: '₹5,000/service',
      premium: '₹12,000/service',
      enterprise: 'Custom',
    },
    duration: '7-30 days',
    testimonials: 892,
  },
  {
    id: 'healthcare',
    title: 'Healthcare Support',
    shortDescription: 'Medical appointments, hospital coordination, and healthcare management for your loved ones.',
    fullDescription: 'Ensure your family receives the best healthcare in India. We coordinate medical appointments, manage hospital admissions, facilitate doctor consultations, and provide ongoing healthcare support for your loved ones.',
    icon: Heart,
    gradient: 'from-[#e53e3e] to-[#991b1b]',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=80',
    features: [
      'Doctor Appointment Scheduling',
      'Hospital Admission Coordination',
      'Medical Record Management',
      'Pharmacy & Prescription Services',
      'Health Insurance Claim Processing',
      'Second Opinion Consultations',
      'Medical Emergency Response',
      'Senior Care & Home Health Services',
    ],
    pricing: {
      basic: '₹10,000/month',
      premium: '₹20,000/month',
      enterprise: 'Custom',
    },
    duration: 'Ongoing',
    testimonials: 1563,
  },
  {
    id: 'business',
    title: 'Business Services',
    shortDescription: 'Company registration, compliance, and business advisory for your ventures in India.',
    fullDescription: 'Launch and grow your business in India with our comprehensive business services. From company registration to ongoing compliance, tax filing, and business advisory, we provide end-to-end support for your entrepreneurial journey.',
    icon: Briefcase,
    gradient: 'from-[#0b1f33] to-[#102c44]',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    features: [
      'Company Registration (LLP, Pvt Ltd, etc.)',
      'GST Registration & Compliance',
      'Tax Planning & Filing Services',
      'Accounting & Bookkeeping',
      'Business License & Permits',
      'Trademark & IP Registration',
      'Business Advisory & Consulting',
      'Bank Account Opening Assistance',
    ],
    pricing: {
      basic: '₹30,000/setup',
      premium: '₹75,000/setup',
      enterprise: 'Custom',
    },
    duration: '15-45 days',
    testimonials: 634,
  },
  {
    id: 'education',
    title: 'Education Consulting',
    shortDescription: 'School admissions, education counseling, and academic support for your children.',
    fullDescription: 'Secure the best educational opportunities for your children in India. Our education consultants help with school admissions, application processes, academic counseling, and ongoing educational support to ensure your child\'s success.',
    icon: GraduationCap,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    features: [
      'School & University Admissions',
      'Application & Documentation Support',
      'Entrance Exam Preparation Guidance',
      'Education Counseling & Career Planning',
      'Scholarship & Financial Aid Assistance',
      'Academic Performance Monitoring',
      'Tutoring & Study Support Services',
      'Education Board Registration',
    ],
    pricing: {
      basic: '₹15,000/admission',
      premium: '₹35,000/admission',
      enterprise: 'Custom',
    },
    duration: '2-6 months',
    testimonials: 478,
  },
  {
    id: 'legal',
    title: 'Legal & Compliance',
    shortDescription: 'Comprehensive legal support, dispute resolution, and regulatory compliance services.',
    fullDescription: 'Protect your interests with our expert legal services. We provide comprehensive legal support including contract review, dispute resolution, property litigation, family law matters, and ongoing compliance monitoring.',
    icon: Shield,
    gradient: 'from-[#102c44] to-[#0b1f33]',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    features: [
      'Legal Consultation & Advisory',
      'Contract Drafting & Review',
      'Dispute Resolution & Litigation',
      'Property & Real Estate Law',
      'Family Law & Inheritance Matters',
      'Employment & Labor Law Compliance',
      'Regulatory Compliance Monitoring',
      'Legal Document Verification',
    ],
    pricing: {
      basic: '₹8,000/consultation',
      premium: '₹25,000/consultation',
      enterprise: 'Custom',
    },
    duration: 'As needed',
    testimonials: 721,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || service.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#fff7f7] via-[#fef2f2] to-[#f3f6fb] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcd6d6]/60 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dbe9ff]/60 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-[#0b1f33] mb-6">
            Premium <span className="text-[#c53030]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#34445a] max-w-3xl mx-auto mb-12">
            Comprehensive solutions tailored for NRI families with unmatched expertise and care
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c53030]" size={24} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/80 backdrop-blur-md border border-[#f2dcdc] text-[#0b1f33] placeholder-[#9aa4b5] focus:outline-none focus:ring-2 focus:ring-[#f87171] focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !selectedCategory
                  ? 'bg-[#f87171] text-white shadow-lg shadow-[#f8717140]'
                  : 'bg-white text-[#0b1f33] border border-[#f2dcdc] hover:bg-[#fef2f2]'
              }`}
            >
              All Services
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedCategory(service.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === service.id
                    ? 'bg-[#f87171] text-white shadow-lg shadow-[#f8717140]'
                    : 'bg-white text-[#0b1f33] border border-[#f2dcdc] hover:bg-[#fef2f2]'
                }`}
              >
                  {service.title}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={searchQuery + selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f2dcdc]"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                          <Icon size={48} className="text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-[#0b1f33] group-hover:text-[#c53030] transition-colors">
                          {service.title}
                        </h3>
                        {service.testimonials && (
                          <div className="flex items-center gap-1 text-[#f87171]">
                            <Star size={16} className="fill-[#f87171]" />
                            <span className="text-sm font-medium text-[#c53030]">
                              {service.testimonials}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={16} />
                          <span>From {service.pricing.basic}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedService(service)}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <span>View Details</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-slate-600">No services found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Detail Modal - Rendered via Portal */}
      {mounted && createPortal(
        <AnimatePresence mode="wait">
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
              }}
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              />
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '80rem',
                  maxHeight: '90vh',
                  margin: '0 auto',
                }}
              >
              <div className="relative">
                {/* Header Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedService.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const Icon = selectedService.icon;
                      return (
                        <Icon size={64} className="text-white" strokeWidth={1.5} />
                      );
                    })()}
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    {selectedService.title}
                  </h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">What's Included</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="text-[#c53030] flex-shrink-0 mt-1" size={20} />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8 p-6 bg-gradient-to-br from-[#fdeaea] to-[#f4f1f9] rounded-2xl border border-[#f6dada]">
                    <h3 className="text-2xl font-bold text-[#0b1f33] mb-4">Pricing Plans</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-xl">
                        <div className="font-semibold text-slate-700 mb-2">Basic</div>
                        <div className="text-2xl font-bold text-[#c53030]">
                          {selectedService.pricing.basic}
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border-2 border-[#c53030]">
                        <div className="font-semibold text-slate-700 mb-2">Premium</div>
                        <div className="text-2xl font-bold text-[#c53030]">
                          {selectedService.pricing.premium}
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="font-semibold text-slate-700 mb-2">Enterprise</div>
                        <div className="text-2xl font-bold text-[#c53030]">
                          {selectedService.pricing.enterprise}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <a
                      href="/contact"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <span>Get Started</span>
                      <ArrowRight size={20} />
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-4 border-2 border-[#f2dcdc] text-[#0b1f33] rounded-lg font-semibold hover:bg-[#fdf5f5] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}

      <Footer />
    </div>
  );
}
