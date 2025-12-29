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
  Package,
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
    title: 'Property Management for NRIs',
    shortDescription: 'Your India home should be an asset, not a source of constant follow-ups. Tipping Bridge manages your property end-to-end with discreet on-ground execution, clear approvals, and timely updates, so you stay in control from anywhere.',
    fullDescription: 'Your India home should be an asset, not a source of constant follow-ups. Tipping Bridge manages your property end-to-end with discreet on-ground execution, clear approvals, and timely updates, so you stay in control from anywhere.',
    icon: Home,
    gradient: 'from-[#c53030] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    features: [
      'Tenant & Tenancy: Listing and marketing, enquiries and viewings, tenant onboarding, and ongoing tenancy coordination.',
      'Rent & Deposit: Rent collection support, deposit tracking, and clear visibility of paid, due, and pending amounts.',
      'Keys & Access: Secure key custody and strictly authorised access for inspections, maintenance, and handovers.',
      'Maintenance & Repairs: Preventive upkeep and repairs coordinated with trusted vendors, with documented scope and cost transparency.',
      'Possession & Handover: Support for move-ins, tenant transitions, and possession formalities for newly purchased or recently vacated homes.',
      'One dependable point of contact. Professional reporting. Reliable execution.',
    ],
    duration: 'Ongoing',
    testimonials: 1247,
  },
  {
    id: 'long-short-stay',
    title: 'Long and Short Stay Service Apartments',
    shortDescription: 'Returning to India for a family reunion, executive travel, a friends\' get-together, or a longer relocation? Tipping Bridge provides luxurious serviced apartments for NRIs across key Indian cities, designed for a few days, a few weeks, or longer extended stays.',
    fullDescription: 'Returning to India for a family reunion, executive travel, a friends\' get-together, or a longer relocation? Tipping Bridge provides luxurious serviced apartments for NRIs across key Indian cities, designed for a few days, a few weeks, or longer extended stays. If you feel homesick when you travel or you\'re back in India seasonally, our apartment homes are built to feel like a second home, neatly furnished so you\'re not burdened with carrying essentials. From food to furniture and other amenities, our carefully selected properties help you start each day fresh, focused, and settled. Expect spacious rooms, basic Wi-Fi support, laundry and fitness rooms, and additional kitchen items, close to grocery, shopping, entertainment, and pharmacies, so you get hotel-like convenience without sacrificing home-like comfort. Choose flexible move-in and move-out dates, with simple monthly pricing, special rates/discounts for longer stays, and a single monthly payment. Book with confidence: properties are reviewed by our trusted guest community, and you receive 24/7 support during your stay. Need to work while you\'re here? Find work-friendly spaces with high-speed Wi-Fi and dedicated working areas, ideal for staffing, displacement, and relocation.',
    icon: BedDouble,
    gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    features: [],
    duration: 'Flexible',
    testimonials: 892,
  },
  {
    id: 'elderly-care',
    title: 'Elder Care',
    shortDescription: 'When you live overseas, supporting ageing parents in India takes more than calls, it takes dependable, on-ground coordination. Tipping Bridge Elder Care brings structured assistance across Health & Fitness, Filing & Forms, Technology & Troubleshooting, Home Security & Maintenance, and Memories & Milestones, so support continues even whilst you are miles away.',
    fullDescription: 'When you live overseas, supporting ageing parents in India takes more than calls, it takes dependable, on-ground coordination. Tipping Bridge Elder Care brings structured assistance across Health & Fitness, Filing & Forms, Technology & Troubleshooting, Home Security & Maintenance, and Memories & Milestones, so support continues even whilst you are miles away.',
    icon: HeartPulse,
    gradient: 'from-[#e53e3e] to-[#b91c1c]',
    image: 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=1200&q=80',
    features: [
      'Health & Fitness: Our healthcare team is trained to handle emergency situations, and can arrange tele-consultations, home doctor visits, sample home collections for lab tests, nurse/medical attendant services, post-surgical support, medicine delivery, medical equipment rentals, physiotherapy, medical-record maintenance, and ambulance/hospitalisation assistance.',
      'Filing & Forms: Support for income tax return filing, banking assistance, legal documentation help, and Aadhaar/Voter ID and senior citizen card assistance.',
      'Technology & Troubleshooting: Zoom/Google Hangouts support, social media setup, popular apps (Zomato/Uber/Netflix), hardware repair support, and personalised tutorials to bridge the digital gap.',
      'Home Security & Maintenance: Plumber/electrician/carpenter support, whitewash, appliance repairs, pest control, annual maintenance contracts, CCTV/video doorbell installation, and police verification of domestic staff, with supervision where needed.',
      'Memories & Milestones: Birthdays, anniversaries and festivals, gifts, décor, food, florist and pooja services, because emotional wellbeing matters too.',
    ],
    duration: 'Ongoing',
    testimonials: 1563,
  },
  {
    id: 'investments-insurance',
    title: 'Investments & Insurance',
    shortDescription: 'Manage India-side financial matters with clarity, even when you live overseas. Tipping Bridge supports NRIs through Investment & Wealth Management across Insurance, Mutual Funds and Real Estate, helping you plan and execute from anywhere.',
    fullDescription: 'Manage India-side financial matters with clarity, even when you live overseas. Tipping Bridge supports NRIs through Investment & Wealth Management across Insurance, Mutual Funds and Real Estate, helping you plan and execute from anywhere.',
    icon: PiggyBank,
    gradient: 'from-[#0b1f33] to-[#102c44]',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80',
    features: [
      'Insurance: Support for Life/Term, Motor/Auto, Health and Home insurance. Insurance solicitation in India is governed by IRDA. Our Insurance Specialist provides competitive rates for term plans and motor insurance specially negotiated for NRI clients. Motor cover includes comprehensive car insurance, third-party liability and personal accident cover. For health insurance, we guide you to a tailor-made plan based on your requirements and pass on benefits from negotiated rates. For home insurance, we guide you to policies that are cost competitive on premium pricing and strong on consumer benefits.',
      'Mutual Funds & Investing: Unbiased recommendations focused on long-term wealth creation, with execution support across Direct Mutual Funds, Stocks, ETFs, Bonds and Savings. Our wealth advisory helps create a robust plan aligned to your risk-return needs, stay disciplined during volatile markets, and diversify across assets.',
      'Real Estate: Guidance for NRI clients with best/transparent/unbiased deals, and support on formalities and negotiations to acquire your chosen property.',
    ],
    duration: 'Ongoing',
    testimonials: 634,
  },
  {
    id: 'doctor-hospital-assistance',
    title: 'Assistance Services with Doctor & Hospitalisation',
    shortDescription: 'Medical coordination in India can be stressful when you are overseas, especially when a routine check-up becomes urgent. Tipping Bridge supports NRIs with end-to-end assistance for doctor appointments and hospitalisation so your family receives timely care, at home and at the hospital, with clear coordination.',
    fullDescription: 'Medical coordination in India can be stressful when you are overseas, especially when a routine check-up becomes urgent. Tipping Bridge supports NRIs with end-to-end assistance for doctor appointments and hospitalisation so your family receives timely care, at home and at the hospital, with clear coordination. We organise tele-consultations with qualified and experienced doctors and can ensure you are on the same call with your parents and the doctor/specialist, so decisions are informed and connected. We also coordinate home visits by doctors, sample home collection for lab tests, and post-surgical support through nurses and medical attendants. When ongoing support is required, we can help with home delivery of medicines, rental of medical equipment, medical supplies, physiotherapy coordination, and maintenance of medical records. For nutrition and lifestyle, support can include a dietician, fitness coaches, and health menu/food delivery aligned to the diet plan. In emergencies, we provide ambulance assistance and emergency support for hospitalisation, along with medicine routine planning and reminder schedules.',
    icon: Stethoscope,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    features: [],
    duration: 'As needed',
    testimonials: 478,
  },
  {
    id: 'government-documentation',
    title: 'Legal & Documentation',
    shortDescription: 'When you\'re overseas, even routine paperwork in India can become time-consuming and stressful. With just a phone call, Tipping Bridge can connect you to a dedicated team of legal experts to help address your family\'s tax and legal documentation needs in India, so work moves forward in your absence.',
    fullDescription: 'When you\'re overseas, even routine paperwork in India can become time-consuming and stressful. With just a phone call, Tipping Bridge can connect you to a dedicated team of legal experts to help address your family\'s tax and legal documentation needs in India, so work moves forward in your absence.',
    icon: FileText,
    gradient: 'from-[#0b1f33] to-[#1d3557]',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    features: [
      'Certificates: birth certificate, marriage certificate, death certificate, and changes/non-availability of birth certificate.',
      'Education & references: degree certificate, marksheet/transcription, syllabus copy, and reference letters.',
      'Identity & filings: PAN card application/submission, document procurement, and filing of IT returns.',
      'Tax & compliance support: attending to IT notice / tax authority visits, and financial taxation and legal advice.',
      'Claims, loans & legal guidance: life/general insurance and mediclaim claim follow-ups, loan syndicate follow-up, and arranging lawyers\' opinions and legal matter expert advice.',
      'Court-related formalities: legalisation, notarisation and attestation of documents, including court visits.',
      'Hidden Wealth Facilitation.',
      'A single professional point of coordination, built for NRIs who want reliable execution in India without repeated follow-ups.',
    ],
    duration: '7-30 days',
    testimonials: 721,
  },
  {
    id: 'events-gathering',
    title: 'Small Events & Gathering Services',
    shortDescription: 'Being overseas shouldn\'t mean missing the moments that matter at home. Tipping Bridge helps NRIs create and coordinate small celebrations in India so your family can enjoy the occasion, while we take on the organisation and responsibility.',
    fullDescription: 'Being overseas shouldn\'t mean missing the moments that matter at home. Tipping Bridge helps NRIs create and coordinate small celebrations in India so your family can enjoy the occasion, while we take on the organisation and responsibility. Allow us to help you celebrate every special occasion and milestone in style, without having to manage the details from abroad. From birthdays and anniversaries to festivals, or a simple Havan/Pooja, we plan the celebration and coordinate the key elements, including decoration, personalised gifts and experiences, and food, so what remains are beautiful memories to cherish. We also support "Memories & Milestones" requests such as florist services, festival décor and essentials, home salon and spa services, personalised family photo shoots, runner services, and movie/theatre tickets. Even without a fixed occasion, we can help turn an ordinary day into a special one with doorstep surprises, such as a manicure or pedicure, a massage or facial, or even a haircut, arranged with care.',
    icon: PartyPopper,
    gradient: 'from-[#7a0b0b] to-[#c53030]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
    features: [],
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
  const [isPackageTableOpen, setIsPackageTableOpen] = useState(false);
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
                  {selectedService.features.length > 0 && (
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
                  )}

                  {/* Package Table Button for Elder Care */}
                  {selectedService.id === 'elderly-care' && (
                    <div className="mb-8">
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          setTimeout(() => setIsPackageTableOpen(true), 300);
                        }}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#e53e3e] to-[#b91c1c] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                      >
                        <Package size={24} />
                        <span>View Care Packages</span>
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  )}

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

      {/* Package Table Modal for Elder Care */}
      <AnimatePresence>
        {isPackageTableOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsPackageTableOpen(false)}
            ></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-7xl bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden border border-[#f2dcdc]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#e53e3e] to-[#b91c1c] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Elder Care Packages</h2>
                    <p className="text-white/90">Choose the perfect care plan for your loved ones</p>
                  </div>
                  <button
                    onClick={() => setIsPackageTableOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close package table"
                  >
                    <X size={24} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
                <div className="min-w-full">
                  {/* Table */}
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 text-left font-bold text-slate-800 border-b-2 border-slate-200">
                          Services Offered
                        </th>
                        <th className="bg-gradient-to-br from-[#fef2f2] to-[#fee2e2] p-4 text-center font-bold text-[#0b1f33] border-b-2 border-[#fecaca]">
                          <div className="flex flex-col items-center">
                            <span className="text-xl">Soul</span>
                            <span className="text-sm font-normal text-slate-600">Basic Care</span>
                          </div>
                        </th>
                        <th className="bg-gradient-to-br from-[#fef2f2] to-[#fee2e2] p-4 text-center font-bold text-[#0b1f33] border-b-2 border-[#fecaca]">
                          <div className="flex flex-col items-center">
                            <span className="text-xl">Grandeur</span>
                            <span className="text-sm font-normal text-slate-600">Premium Care</span>
                          </div>
                        </th>
                        <th className="bg-gradient-to-br from-[#fef2f2] to-[#fee2e2] p-4 text-center font-bold text-[#0b1f33] border-b-2 border-[#fecaca]">
                          <div className="flex flex-col items-center">
                            <span className="text-xl">Maharaja</span>
                            <span className="text-sm font-normal text-slate-600">Elite Care</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Dedicated Personal Manager</td>
                        <td className="p-4 text-center text-slate-600">Assistant Manager</td>
                        <td className="p-4 text-center text-slate-600">Care Manager</td>
                        <td className="p-4 text-center text-slate-600">Care Manager</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Visits by the Care Manager for a personal update</td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                        <td className="p-4 text-center text-slate-600">Bi-Monthly</td>
                        <td className="p-4 text-center text-slate-600">Weekly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Vital Checkups to be done by Trained Staff</td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                        <td className="p-4 text-center text-slate-600">Bi-Monthly</td>
                        <td className="p-4 text-center text-slate-600">Every Week</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Organizing collecting samples and health lab visits</td>
                        <td className="p-4 text-center text-slate-600">Twice a Year</td>
                        <td className="p-4 text-center text-slate-600">Quarterly</td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Assistance with Travel Services</td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                        <td className="p-4 text-center text-slate-600">Bi-Monthly</td>
                        <td className="p-4 text-center text-slate-600">Every time whenever Required</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Assistance to home repair and Maintenance</td>
                        <td className="p-4 text-center text-slate-600">Twice a Year</td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                        <td className="p-4 text-center text-slate-600">Whenever required even multiple times</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Health and Basic updates to next to Kin/Guardian</td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                        <td className="p-4 text-center text-slate-600">Weekly</td>
                        <td className="p-4 text-center text-slate-600">Bi-weekly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Assistance in all Tipping bridge Services</td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                        <td className="p-4 text-center text-slate-600">Bi-Monthly</td>
                        <td className="p-4 text-center text-slate-600">Weekly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">An inventory listing and raising online requisite, ordering of grocery and other consumables for home</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center text-slate-600">Bi-Monthly</td>
                        <td className="p-4 text-center text-slate-600">Weekly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Organizing Annual Health Check ups</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center text-slate-600">Yearly</td>
                        <td className="p-4 text-center text-slate-600">Once a Quarter</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Maintenance of health records on online storage accessible to kin/Guardian</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Medical Emergency Assistance (Ambulance and Hospitalisation Support)</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Social Engagement and wellness camps for mental Health</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Technology Support and Trouble Shooting</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Complementary Runner Service</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Home delivery of Medicines</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Organizing Pill Box</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Tele Consulting with the Empanelled General Physician or Specialists</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center text-slate-600">Monthly/Whenever Required</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-medium text-slate-700">Assisting to Visits to Doctors or Hospitals</td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                        </td>
                        <td className="p-4 text-center text-slate-600">Whenever required even multiple times</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-blue-50/30">
                        <td className="p-4 font-medium text-slate-700">Technological Support and tutorials on apps and social media</td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-blue-50/30">
                        <td className="p-4 font-medium text-slate-700">Assistance visits to Banks or Pension collection office Visits</td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center text-slate-600">Monthly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-blue-50/30">
                        <td className="p-4 font-medium text-slate-700">Helping in police verification of Housemaids and Drivers</td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-blue-50/30">
                        <td className="p-4 font-medium text-slate-700">Assistance in Car Repairs and maintenance</td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center text-slate-600">Quarterly /Half Yearly /Yearly</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-blue-50/30">
                        <td className="p-4 font-medium text-slate-700">Assistance in Utility Bill payments and dispute resolution support</td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-blue-50/30">
                        <td className="p-4 font-medium text-slate-700">Deep Cleaning of Homes for proper hygiene</td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="text-green-600 mx-auto" size={24} />
                        </td>
                        <td className="p-4 text-center text-slate-600">Half Yearly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => setIsPackageTableOpen(false)}
                    className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-[#e53e3e] to-[#b91c1c] text-white rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
