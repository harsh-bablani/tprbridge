import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import {
  Home,
  BedDouble,
  HeartPulse,
  PiggyBank,
  Stethoscope,
  FileText,
  PartyPopper,
  X,
  Check,
  ArrowRight,
  Search,
  Download,
  CheckCircle,
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
  duration: string;
  testimonials?: number;
}

const services: Service[] = [
  {
    id: 'property-management',
    title: 'Property Management',
    shortDescription: 'Complete property oversight, maintenance, and tenant coordination to keep your assets protected and profitable.',
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
    duration: 'Ongoing',
    testimonials: 1247,
  },
  {
    id: 'long-short-stay',
    title: 'Long and Short Stay',
    shortDescription: 'Curated homes and serviced apartments for every duration, with housekeeping, security, and concierge support.',
    fullDescription: 'Whether you need a place for a few days or several months, we provide carefully selected homes and serviced apartments that feel like home. Our accommodations come with housekeeping, security, and concierge support to ensure your comfort and peace of mind during your stay in India.',
    icon: BedDouble,
    gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    features: [
      'Fully Furnished Accommodations',
      'Housekeeping & Maintenance Services',
      '24/7 Security & Concierge Support',
      'Flexible Stay Duration Options',
      'Prime Location Properties',
      'Utilities & Amenities Included',
      'Airport Transfer Services',
      'Local Area Orientation & Support',
    ],
    duration: 'Flexible',
    testimonials: 892,
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    shortDescription: 'Personalised care plans, home assistance, and wellness monitoring to ensure your loved ones feel supported.',
    fullDescription: 'We provide compassionate and professional care for your elderly family members in India. Our personalized care plans include home assistance, wellness monitoring, medical coordination, and emotional support to ensure your loved ones receive the attention and care they deserve.',
    icon: HeartPulse,
    gradient: 'from-[#e53e3e] to-[#b91c1c]',
    image: 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=1200&q=80',
    features: [
      'Personalized Care Plans',
      'Home Assistance & Daily Support',
      'Health & Wellness Monitoring',
      'Medical Appointment Coordination',
      'Medication Management',
      'Companionship & Emotional Support',
      'Emergency Response Services',
      'Regular Health Updates & Reports',
    ],
    duration: 'Ongoing',
    testimonials: 1563,
  },
  {
    id: 'investments-insurance',
    title: 'Investments and Insurance',
    shortDescription: 'Guided portfolio planning, safe investments, and insurance advisory tailored for NRI risk profiles.',
    fullDescription: 'Make informed financial decisions with our expert investment and insurance advisory services. We help NRIs build secure portfolios, choose the right insurance policies, and navigate India\'s financial landscape with confidence. Our services are tailored to your risk profile and long-term goals.',
    icon: PiggyBank,
    gradient: 'from-[#0b1f33] to-[#102c44]',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80',
    features: [
      'Portfolio Planning & Management',
      'Investment Advisory Services',
      'Insurance Policy Selection',
      'Risk Assessment & Analysis',
      'Tax-Efficient Investment Strategies',
      'Regular Portfolio Reviews',
      'NRI-Specific Financial Planning',
      'Compliance & Documentation Support',
    ],
    duration: 'Ongoing',
    testimonials: 634,
  },
  {
    id: 'doctor-hospital-assistance',
    title: 'Doctor & Hospital Assistance',
    shortDescription: 'Priority appointments, hospital coordination, discharge support, and second opinions handled end-to-end.',
    fullDescription: 'Ensure your family receives the best medical care in India with our comprehensive healthcare assistance. We coordinate priority doctor appointments, manage hospital admissions, facilitate second opinions, and provide complete support throughout the medical journey.',
    icon: Stethoscope,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    features: [
      'Priority Doctor Appointments',
      'Hospital Admission Coordination',
      'Medical Record Management',
      'Second Opinion Consultations',
      'Discharge & Follow-up Support',
      'Pharmacy & Prescription Services',
      'Health Insurance Claim Processing',
      'Emergency Medical Response',
    ],
    duration: 'As needed',
    testimonials: 478,
  },
  {
    id: 'government-documentation',
    title: 'Government Documentation',
    shortDescription: 'Fast-track processing for IDs, certificates, attestations, and compliance paperwork across departments.',
    fullDescription: 'Navigate India\'s complex documentation requirements with ease. Our expert team handles all government paperwork, certificates, and documentation, ensuring accuracy and compliance. From birth certificates to property deeds, we manage it all with fast-track processing.',
    icon: FileText,
    gradient: 'from-[#0b1f33] to-[#1d3557]',
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
    duration: '7-30 days',
    testimonials: 721,
  },
  {
    id: 'events-gathering',
    title: 'Events & Gathering Services',
    shortDescription: 'Intimate celebrations, religious ceremonies, and community meetups planned with venues, décor, and catering.',
    fullDescription: 'Create memorable moments with our comprehensive event planning services. Whether it\'s a wedding, religious ceremony, birthday celebration, or community gathering, we handle everything from venue selection and decoration to catering and coordination, ensuring your event is perfect.',
    icon: PartyPopper,
    gradient: 'from-[#7a0b0b] to-[#c53030]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
    features: [
      'Event Planning & Coordination',
      'Venue Selection & Booking',
      'Decoration & Theme Design',
      'Catering Services',
      'Photography & Videography',
      'Entertainment Arrangements',
      'Guest Management & Invitations',
      'Religious Ceremony Coordination',
    ],
    duration: 'As per event',
    testimonials: 456,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
  });

  // Google Sheets Configuration
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenModal = () => {
    setFormError(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      country: '',
    });
    setIsBrochureModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBrochureModalOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const country = formData.country.trim();

    if (!name || !phone || !email || !country) {
      setFormError('Please fill out all fields before downloading the brochure.');
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const submissionData = {
        name: name,
        email: email,
        phone: phone,
        country: country,
        type: 'Brochure Request',
        timestamp: new Date().toISOString(),
      };

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });
      } else {
        console.log('Brochure request data:', submissionData);
        console.warn('Google Script URL not configured. Add VITE_GOOGLE_SCRIPT_URL to .env file');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          country: '',
        });
        handleCloseModal();
      }, 5000);
    } catch (error) {
      console.error('Form submission failed:', error);
      setIsSubmitting(false);
      setFormError('Failed to submit. Please try again.');
    }
  };

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
      <PageHero title="Services">
        <button
          onClick={handleOpenModal}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0b1f33] rounded-full font-bold text-lg shadow-lg border border-[#f2dcdc] hover:border-[#c53030] hover:text-[#c53030] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Download size={20} className="text-[#c53030] group-hover:animate-pulse" />
          <span>Know Us Better</span>
        </button>
      </PageHero>

      {/* Search and Filter Section */}
      <section className="relative -mt-20 pb-12 px-6 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[#f2dcdc]"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-6">
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
            <div className="flex flex-wrap justify-center gap-4">
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
        </div>
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
                      <h3 className="text-2xl font-bold text-[#0b1f33] group-hover:text-[#c53030] transition-colors mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {service.shortDescription}
                      </p>

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

      {/* Brochure Modal */}
      <AnimatePresence>
        {isBrochureModalOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            ></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-[#f2dcdc]"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-[#c53030] transition-colors"
                aria-label="Close brochure form"
              >
                <X size={22} />
              </button>
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold text-[#0b1f33] mb-3">
                  Know Us Better
                </h3>
                <p className="text-slate-600">
                  Share your details below. You&apos;ll receive the brochure instantly and our team will reach out shortly.
                </p>
              </div>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="p-10 bg-gradient-to-br from-[#fdeaea] via-white to-[#f4f1f9] rounded-3xl border-2 border-[#f6dada] text-center shadow-xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] rounded-full mb-6 shadow-lg"
                  >
                    <CheckCircle className="text-white" size={48} strokeWidth={2.5} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-[#0b1f33] mb-3"
                  >
                    Thank You for Submitting!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-slate-600 mb-4"
                  >
                    We&apos;ve received your information and will get back to you soon.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm text-slate-500"
                  >
                    Our team typically responds within 24 hours.
                  </motion.p>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0b1f33] mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#f2dcdc] bg-white px-4 py-3 text-[#0b1f33] focus:border-[#c53030] focus:ring-2 focus:ring-[#fcd6d6] transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0b1f33] mb-2">
                      Contact Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#f2dcdc] bg-white px-4 py-3 text-[#0b1f33] focus:border-[#c53030] focus:ring-2 focus:ring-[#fcd6d6] transition-colors"
                      placeholder="Include country/area code"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0b1f33] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#f2dcdc] bg-white px-4 py-3 text-[#0b1f33] focus:border-[#c53030] focus:ring-2 focus:ring-[#fcd6d6] transition-colors"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-[#0b1f33] mb-2">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#f2dcdc] bg-white px-4 py-3 text-[#0b1f33] focus:border-[#c53030] focus:ring-2 focus:ring-[#fcd6d6] transition-colors"
                      placeholder="Where are you enquiring from?"
                      required
                    />
                  </div>
                  {formError && (
                    <p className="text-sm font-medium text-[#c53030] bg-[#fde4e4] border border-[#fbcaca] rounded-lg px-4 py-2">
                      {formError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white font-semibold py-3.5 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Download size={20} />
                        <span>Submit & Download</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
