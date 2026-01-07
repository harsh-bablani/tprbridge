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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: typeof Home;
  gradient: string;
  image: string;
  images: string[];
  features: string[];
  duration: string;
  packages?: {
    name: string;
    services: Record<string, string>;
  }[];
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
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
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
  },
  {
    id: 'long-short-stay',
    title: 'Long and Short Stay',
    shortDescription: 'Curated homes and serviced apartments for every duration, with housekeeping, security, and concierge support.',
    fullDescription: 'Whether you need a place for a few days or several months, we provide carefully selected homes and serviced apartments that feel like home. Our accommodations come with housekeeping, security, and concierge support to ensure your comfort and peace of mind during your stay in India.',
    icon: BedDouble,
    gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    ],
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
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    shortDescription: 'Personalised care plans, home assistance, and wellness monitoring to ensure your loved ones feel supported.',
    fullDescription: 'We provide compassionate and professional care for your elderly family members in India. Our personalized care plans include home assistance, wellness monitoring, medical coordination, and emotional support to ensure your loved ones receive the attention and care they deserve.',
    icon: HeartPulse,
    gradient: 'from-[#e53e3e] to-[#b91c1c]',
    image: 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=1200&q=80',
      'https://images.unsplash.com/photo-1492635592522-04a01f0d6e6a?w=1200&q=80',
    ],
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
    packages: [
      {
        name: 'Soul',
        services: {
          'Dedicated Personal Manager': 'Assistant Manager',
          'Visits by the Care Manager for a personal update': 'Monthly',
          'Vital Check-ups to be done by Trained Staff': 'Monthly',
          'Organizing / collecting samples and health lab visits': 'Twice a Year',
          'Assistance with Travel Services': 'Monthly',
          'Assistance to home repair and Maintenance': 'Twice a Year',
          'Health and Basic updates to Next of Kin / Guardian': 'Monthly',
          'Assistance in all Tipping Bridge Services': 'Monthly',
          'Inventory listing & ordering groceries / consumables for home': '✖',
          'Organizing Annual Health Check-ups': '✖',
          'Maintenance of health records on online storage accessible to Kin / Guardian': '✖',
          'Medical Emergency Assistance (Ambulance & Hospitalisation Support)': '✖',
          'Social Engagement & Wellness Camps for Mental Health': '✖',
          'Technology Support & Troubleshooting': '✖',
          'Complimentary Runner Service': '✖',
          'Home Delivery of Medicines': '✖',
          'Organizing Pill Box': '✖',
          'Tele-Consulting with Empanelled Physicians / Specialists': '✖',
          'Assisting Visits to Doctors or Hospitals': '✖',
          'Technological Support & Tutorials on Apps & Social Media': '✖',
          'Assistance for Bank / Pension Office Visits': '✖',
          'Police Verification of Housemaids / Drivers': '✖',
          'Assistance in Car Repairs & Maintenance': '✖',
          'Assistance in Utility Bill Payments & Dispute Resolution': '✖',
          'Deep Cleaning of Homes for Proper Hygiene': '✖',
        },
      },
      {
        name: 'Grandeur',
        services: {
          'Dedicated Personal Manager': 'Care Manager',
          'Visits by the Care Manager for a personal update': 'Bi-Monthly',
          'Vital Check-ups to be done by Trained Staff': 'Bi-Monthly',
          'Organizing / collecting samples and health lab visits': 'Quarterly',
          'Assistance with Travel Services': 'Bi-Monthly',
          'Assistance to home repair and Maintenance': 'Monthly',
          'Health and Basic updates to Next of Kin / Guardian': 'Weekly',
          'Assistance in all Tipping Bridge Services': 'Bi-Monthly',
          'Inventory listing & ordering groceries / consumables for home': 'Bi-Monthly',
          'Organizing Annual Health Check-ups': 'Yearly',
          'Maintenance of health records on online storage accessible to Kin / Guardian': '✖',
          'Medical Emergency Assistance (Ambulance & Hospitalisation Support)': '✔',
          'Social Engagement & Wellness Camps for Mental Health': '✔',
          'Technology Support & Troubleshooting': '✖',
          'Complimentary Runner Service': '✔',
          'Home Delivery of Medicines': '✔',
          'Organizing Pill Box': '✖',
          'Tele-Consulting with Empanelled Physicians / Specialists': '✖',
          'Assisting Visits to Doctors or Hospitals': '✖',
          'Technological Support & Tutorials on Apps & Social Media': '✖',
          'Assistance for Bank / Pension Office Visits': '✖',
          'Police Verification of Housemaids / Drivers': '✖',
          'Assistance in Car Repairs & Maintenance': '✖',
          'Assistance in Utility Bill Payments & Dispute Resolution': '✖',
          'Deep Cleaning of Homes for Proper Hygiene': '✖',
        },
      },
      {
        name: 'Maharaja',
        services: {
          'Dedicated Personal Manager': 'Care Manager',
          'Visits by the Care Manager for a personal update': 'Weekly',
          'Vital Check-ups to be done by Trained Staff': 'Every Week',
          'Organizing / collecting samples and health lab visits': 'Monthly',
          'Assistance with Travel Services': 'Every time whenever required',
          'Assistance to home repair and Maintenance': 'Whenever required even multiple times',
          'Health and Basic updates to Next of Kin / Guardian': 'Bi-Weekly',
          'Assistance in all Tipping Bridge Services': 'Weekly',
          'Inventory listing & ordering groceries / consumables for home': 'Weekly',
          'Organizing Annual Health Check-ups': 'Once a Quarter',
          'Maintenance of health records on online storage accessible to Kin / Guardian': '✔',
          'Medical Emergency Assistance (Ambulance & Hospitalisation Support)': '✔',
          'Social Engagement & Wellness Camps for Mental Health': '✔',
          'Technology Support & Troubleshooting': 'Monthly',
          'Complimentary Runner Service': '✔',
          'Home Delivery of Medicines': '✔',
          'Organizing Pill Box': 'Monthly',
          'Tele-Consulting with Empanelled Physicians / Specialists': 'Monthly / Whenever Required',
          'Assisting Visits to Doctors or Hospitals': 'Whenever required even multiple times',
          'Technological Support & Tutorials on Apps & Social Media': 'Monthly',
          'Assistance for Bank / Pension Office Visits': 'Monthly',
          'Police Verification of Housemaids / Drivers': '✔',
          'Assistance in Car Repairs & Maintenance': 'Quarterly / Half-Yearly / Yearly',
          'Assistance in Utility Bill Payments & Dispute Resolution': '✔',
          'Deep Cleaning of Homes for Proper Hygiene': 'Half-Yearly',
        },
      },
    ],
  },
  {
    id: 'investments-insurance',
    title: 'Investments and Insurance',
    shortDescription: 'Guided portfolio planning, safe investments, and insurance advisory tailored for NRI risk profiles.',
    fullDescription: 'Make informed financial decisions with our expert investment and insurance advisory services. We help NRIs build secure portfolios, choose the right insurance policies, and navigate India\'s financial landscape with confidence. Our services are tailored to your risk profile and long-term goals.',
    icon: PiggyBank,
    gradient: 'from-[#0b1f33] to-[#102c44]',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80',
      'https://images.unsplash.com/photo-1633356122544-f134ef2944f0?w=1200&q=80',
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80',
    ],
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
  },
  {
    id: 'doctor-hospital-assistance',
    title: 'Doctor & Hospital Assistance',
    shortDescription: 'Priority appointments, hospital coordination, discharge support, and second opinions handled end-to-end.',
    fullDescription: 'Ensure your family receives the best medical care in India with our comprehensive healthcare assistance. We coordinate priority doctor appointments, manage hospital admissions, facilitate second opinions, and provide complete support throughout the medical journey.',
    icon: Stethoscope,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160388-112836e42a98?w=1200&q=80',
      'https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=1200&q=80',
    ],
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
  },
  {
    id: 'government-documentation',
    title: 'Government Documentation',
    shortDescription: 'Fast-track processing for IDs, certificates, attestations, and compliance paperwork across departments.',
    fullDescription: 'Navigate India\'s complex documentation requirements with ease. Our expert team handles all government paperwork, certificates, and documentation, ensuring accuracy and compliance. From birth certificates to property deeds, we manage it all with fast-track processing.',
    icon: FileText,
    gradient: 'from-[#0b1f33] to-[#1d3557]',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
      'https://images.unsplash.com/photo-1507842217343-583f20270319?w=1200&q=80',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
    ],
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
  },
  {
    id: 'events-gathering',
    title: 'Events & Gathering Services',
    shortDescription: 'Intimate celebrations, religious ceremonies, and community meetups planned with venues, décor, and catering.',
    fullDescription: 'Create memorable moments with our comprehensive event planning services. Whether it\'s a wedding, religious ceremony, birthday celebration, or community gathering, we handle everything from venue selection and decoration to catering and coordination, ensuring your event is perfect.',
    icon: PartyPopper,
    gradient: 'from-[#7a0b0b] to-[#c53030]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80',
      'https://images.unsplash.com/photo-1519225421421-9c63335b43a8?w=1200&q=80',
    ],
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
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
    <div className="min-h-screen bg-gradient-to-b from-white/50 via-[#fef9f8]/80 to-[#f0f5fb]/70">
      {/* Premium luxury overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0" />
      <Navigation />
      <PageHero title="Services">
        <motion.button
          onClick={handleOpenModal}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/98 to-white/95 text-[#0b1f33] rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_40px_rgba(197,48,48,0.2)] border-2 border-gradient-to-r from-[#f2dcdc] to-white/30 hover:border-[#c53030] hover:text-[#c53030] transition-all duration-300 backdrop-blur-sm"
        >
          <Download size={20} className="text-[#c53030] group-hover:animate-pulse" />
          <span>Know Us Better</span>
        </motion.button>
      </PageHero>

      {/* Search and Filter Section */}
      <section className="relative -mt-20 pb-12 px-6 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50 overflow-hidden"
          >
            {/* Optimized Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c53030]/5 via-[#7a0b0b]/5 to-[#0b1f33]/5 opacity-30" />

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                  <Search className="text-[#c53030]" size={26} />
                </div>
                <motion.input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/90 backdrop-blur-md border-2 border-[#f2dcdc] text-[#0b1f33] placeholder-[#9aa4b5] focus:outline-none focus:ring-4 focus:ring-[#f87171]/30 focus:border-[#c53030] transition-all shadow-lg hover:shadow-xl"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            </div>

            {/* Category Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={() => setSelectedCategory(null)}
                className={`px-8 py-3 rounded-full font-bold text-base transition-all relative overflow-hidden ${
                  !selectedCategory
                    ? 'bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white shadow-xl shadow-[#c53030]/40'
                    : 'bg-white text-[#0b1f33] border-2 border-[#f2dcdc] hover:bg-[#fef2f2] hover:border-[#c53030]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                  {!selectedCategory && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-50" />
                  )}
                <span className="relative z-10">All Services</span>
              </motion.button>
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedCategory(service.id)}
                  className={`px-8 py-3 rounded-full font-bold text-base transition-all relative overflow-hidden ${
                    selectedCategory === service.id
                      ? 'bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white shadow-xl shadow-[#c53030]/40'
                      : 'bg-white text-[#0b1f33] border-2 border-[#f2dcdc] hover:bg-[#fef2f2] hover:border-[#c53030]'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedCategory === service.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-50" />
                  )}
                  <span className="relative z-10">{service.title}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={searchQuery + selectedCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {filteredServices.map((service, index) => {
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    className="group relative h-full"
                  >
                    <div className="relative h-full rounded-3xl p-[2px] bg-gradient-to-br from-[#c53030]/30 via-[#7a0b0b]/20 to-[#0b1f33]/20 transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(197,48,48,0.5)] group-hover:p-[3px]">

                      {/* Animated border glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#c53030] via-[#7a0b0b] to-[#c53030] opacity-0 group-hover:opacity-100 rounded-3xl"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: "200% 200%" }}
                      />

                      <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-[calc(1.5rem-2px)] overflow-hidden shadow-2xl group-hover:shadow-[0_40px_80px_-20px_rgba(197,48,48,0.4)] transition-all duration-500 border border-white/50">

                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />

                        {/* Image Background */}
                        <div className="relative h-56 overflow-hidden">
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />

                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                            initial={{ opacity: 0.75 }}
                            whileHover={{ opacity: 0.85 }}
                            transition={{ duration: 0.3 }}
                          />

                          {/* Decorative Corners */}
                          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-3xl" />
                          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-3xl" />
                        </div>

                        {/* Content */}
                        <div className="p-8 relative">

                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 blur-3xl -z-10`}
                            transition={{ duration: 0.5 }}
                          />

                          <motion.h3
                            className="text-2xl font-extrabold text-[#0b1f33] group-hover:text-[#c53030] transition-colors mb-4 relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                          >
                            {service.title}

                            <motion.div
                              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#c53030] to-transparent"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                            />
                          </motion.h3>

                          <motion.p
                            className="text-slate-600 leading-relaxed mb-6 text-base sm:text-lg font-medium"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          >
                            {service.shortDescription}
                          </motion.p>

                          <motion.button
                            onClick={() => {
                              setSelectedService(service);
                              setCurrentImageIndex(0);
                            }}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>View Details</span>
                            <ArrowRight size={18} />
                          </motion.button>
                        </div>
                      </div>
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
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_50px_100px_-15px_rgba(0,0,0,0.3)] border border-gradient-to-br from-white/70 to-white/50"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '80rem',
                  maxHeight: '90vh',
                  margin: '0 auto',
                }}
              >
            {/* Premium Border Glow */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${selectedService.gradient} opacity-20 blur-2xl -z-10`} />
              <div className="relative">
                {/* Image Slider */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#0b1f33] to-[#c53030]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedService.images[currentImageIndex]}
                      alt={`${selectedService.title} - Image ${currentImageIndex + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>

                  {/* Dark Overlay Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${selectedService.gradient}`}
                    animate={{ opacity: [0.6, 0.75, 0.6] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Navigation Buttons */}
                  <motion.button
                    onClick={() => {
                      setCurrentImageIndex((prev) => (prev === 0 ? selectedService.images.length - 1 : prev - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all border border-white/30 shadow-xl"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={28} />
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      setCurrentImageIndex((prev) => (prev === selectedService.images.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all border border-white/30 shadow-xl"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={28} />
                  </motion.button>

                  {/* Image Counter and Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
                    {/* Dot Indicators */}
                    <div className="flex gap-3">
                      {selectedService.images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-white shadow-lg'
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                          animate={{
                            width: index === currentImageIndex ? 32 : 12,
                            height: 12,
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>

                    {/* Image Counter */}
                    <motion.div
                      className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-sm font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentImageIndex + 1} / {selectedService.images.length}
                    </motion.div>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all border border-white/30"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <X size={24} />
                  </motion.button>

                  {/* Decorative Corners */}
                  <motion.div
                    className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/40 rounded-tl-3xl pointer-events-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                  <motion.div
                    className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/40 rounded-br-3xl pointer-events-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </div>

                {/* Content */}
                <div className="p-10">
                  <motion.h2
                    className="text-5xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-[#0b1f33] to-[#c53030] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {selectedService.title}
                  </motion.h2>
                  
                  <motion.p
                    className="text-xl text-slate-600 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {selectedService.fullDescription}
                  </motion.p>

                  {/* Features with Stagger Animation */}
                  <div className="mb-10">
                    <motion.h3
                      className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.div
                        className="h-1 w-16 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      />
                      What's Included
                    </motion.h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-[#fef2f2] border border-[#f2dcdc] hover:border-[#c53030] hover:shadow-lg transition-all group/feature"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + index * 0.05,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            x: 5,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <motion.div
                            className="p-2 bg-gradient-to-br from-[#c53030] to-[#7a0b0b] rounded-lg shadow-lg"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Check className="text-white flex-shrink-0" size={20} />
                          </motion.div>
                          <span className="text-slate-700 font-medium group-hover/feature:text-[#c53030] transition-colors pt-1">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Packages Section */}
                  {selectedService.packages && (
                    <motion.div
                      className="mb-10"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                        <motion.div
                          className="h-1 w-16 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: 64 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                        />
                        Care Packages
                      </h3>

                      <div className="overflow-x-auto rounded-2xl shadow-xl border border-[#f2dcdc]">
                        <table className="w-full border-collapse bg-white">
                          <thead>
                            <tr className="bg-gradient-to-r from-[#c53030] to-[#7a0b0b]">
                              <th className="px-6 py-4 text-left font-bold text-white text-lg">Services Offered</th>
                              {selectedService.packages.map((pkg, index) => (
                                <motion.th
                                  key={pkg.name}
                                  className="px-6 py-4 text-center font-bold text-white text-lg"
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                >
                                  {pkg.name}
                                </motion.th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(selectedService.packages[0].services).map((serviceName, rowIndex) => (
                              <motion.tr
                                key={serviceName}
                                className="hover:bg-gradient-to-r hover:from-[#fef2f2] hover:to-white transition-all border-b border-[#f2dcdc]"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 0.9 + rowIndex * 0.03 
                                }}
                              >
                                <td className="px-6 py-4 font-semibold text-slate-700">
                                  {serviceName}
                                </td>
                                {selectedService.packages!.map((pkg, colIndex) => (
                                  <motion.td
                                    key={pkg.name}
                                    className="px-6 py-4 text-center text-slate-600 font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ 
                                      duration: 0.3, 
                                      delay: 1 + rowIndex * 0.03 + colIndex * 0.05 
                                    }}
                                  >
                                    {pkg.services[serviceName] === '✔' ? (
                                      <motion.span
                                        className="inline-block text-2xl text-green-600"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ 
                                          type: "spring",
                                          stiffness: 200,
                                          delay: 1.1 + rowIndex * 0.03 + colIndex * 0.05
                                        }}
                                      >
                                        ✓
                                      </motion.span>
                                    ) : pkg.services[serviceName] === '✖' ? (
                                      <span className="text-xl text-slate-400">—</span>
                                    ) : (
                                      <span>{pkg.services[serviceName]}</span>
                                    )}
                                  </motion.td>
                                ))}
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {/* CTA */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.a
                      href="/contact"
                      className="flex-1 relative overflow-hidden group/cta"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-xl"
                        whileHover={{
                          boxShadow: "0 15px 40px rgba(197, 48, 48, 0.5)"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        transition={{ duration: 0.8 }}
                      />
                      <div className="relative flex items-center justify-center gap-3 px-8 py-5 text-white font-bold text-lg rounded-xl">
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          Get Started
                        </motion.span>
                        <ArrowRight size={22} className="group-hover/cta:translate-x-1 transition-transform" />
                      </div>
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedService(null)}
                      className="px-8 py-5 border-2 border-[#f2dcdc] text-[#0b1f33] rounded-xl font-semibold hover:bg-[#fdf5f5] hover:border-[#c53030] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Close
                    </motion.button>
                  </motion.div>
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
