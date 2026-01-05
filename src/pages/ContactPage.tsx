import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser'; // Commented out for demo
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
  User,
  AlertCircle,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Google Sheets Configuration
  // Get this URL from your Google Apps Script Web App deployment
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare data for Google Sheets
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service.trim() || 'Not specified',
        message: formData.message.trim() || 'No message provided',
        timestamp: new Date().toISOString(),
      };

      // Send data to Google Sheets via Google Apps Script
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Google Apps Script requires no-cors
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        // Note: With no-cors mode, we can't check response status
        // But the data will still be sent to Google Sheets
      } else {
        // Fallback: Log to console if no script URL is configured
        console.log('Form submission data:', submissionData);
        console.warn('Google Script URL not configured. Add VITE_GOOGLE_SCRIPT_URL to .env file');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error('Form submission failed:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact us directly at info@tippingbridge.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@tippingbridge.com',
      link: 'mailto:info@tippingbridge.com',
      gradient: 'from-[#c53030] to-[#7a0b0b]',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 73036 67600',
      link: 'tel:+917303667600',
      gradient: 'from-[#7a0b0b] to-[#0b1f33]',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9 AM - 6 PM IST',
      link: '#',
      gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    },
  ];

  const services = [
    'Property Management',
    'Long and Short Stay',
    'Elderly Care',
    'Investments and Insurance',
    'Doctor & Hospital Assistance',
    'Government Documentation',
    'Events & Gathering Services',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <PageHero title="Contact Us" />

      {/* Contact Info Cards */}
      <section className="py-16 px-6 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isClickable = info.link && info.link !== '#';
              
              const cardContent = (
                <>
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${info.gradient} rounded-2xl mb-6 shadow-xl relative`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 360,
                      transition: { duration: 0.6, type: "spring" }
                    }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(197, 48, 48, 0.3)",
                        "0 15px 40px rgba(197, 48, 48, 0.5)",
                        "0 10px 30px rgba(197, 48, 48, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon size={28} className="text-white relative z-10" strokeWidth={2} />
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-[#0b1f33] mb-3 group-hover:text-[#c53030] transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 text-lg font-medium">{info.content}</p>
                </>
              );

              if (isClickable) {
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="group relative block p-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(197,48,48,0.4)] transition-all duration-500 border-2 border-[#f2dcdc] hover:border-[#c53030] overflow-hidden"
                  >
                    {/* Animated gradient border */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 rounded-3xl -z-10`}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      transition={{ duration: 1 }}
                    />
                    
                    {cardContent}
                  </motion.a>
                );
              } else {
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="group relative block p-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(197,48,48,0.4)] transition-all duration-500 border-2 border-[#f2dcdc] hover:border-[#c53030] overflow-hidden cursor-default"
                  >
                    {cardContent}
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-slate-600">
                  Fill out the form below and our team will get back to you within 24 hours.
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
                    We've received your message and will get back to you soon.
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#f2dcdc] focus:border-[#c53030] focus:ring-[#c53030]'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#f2dcdc] focus:border-[#c53030] focus:ring-[#c53030]'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#f2dcdc] focus:border-[#c53030] focus:ring-[#c53030]'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#f2dcdc] rounded-lg focus:outline-none focus:ring-2 focus:border-[#c53030] focus:ring-[#c53030] transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#f2dcdc] focus:border-[#c53030] focus:ring-[#c53030]'
                        }`}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                    <p className="mt-1 text-xs text-slate-500">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-xl font-extrabold text-lg shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(197,48,48,0.5)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      transition={{ duration: 1 }}
                    />
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={22} className="relative z-10" strokeWidth={2.5} />
                        <motion.span
                          className="relative z-10"
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          Send Message
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-[#fdeaea] to-[#f4f1f9] rounded-2xl p-8 border border-[#f6dada]">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Why Choose Tipping Bridge?
                </h3>
                <ul className="space-y-3">
                  {[
                    '5,000+ Happy Families',
                    '24/7 Dedicated Support',
                    'Verified & Trusted Partners',
                    'Transparent Pricing',
                    'Quick Response Times',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="text-[#c53030] flex-shrink-0" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Response Time
                </h3>
                <p className="text-slate-600 mb-4">
                  We understand your time is valuable. Our team typically responds to all inquiries within 24 hours, often much sooner.
                </p>
                <div className="flex items-center gap-2 text-[#c53030] font-semibold">
                  <Clock size={20} />
                  <span>Average Response: 4-6 hours</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#fef2f2] to-[#f3f6fb] rounded-2xl p-8 text-[#0b1f33]">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-[#34445a] mb-6">
                  For urgent matters, call us directly or use our emergency contact line.
                </p>
                <a
                  href="tel:+917303667600"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f87171] to-[#c53030] text-white rounded-lg font-bold hover:shadow-lg transition-colors"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
