import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
  User,
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
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

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
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Mumbai, India',
      link: '#',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9 AM - 6 PM IST',
      link: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const services = [
    'Property Management',
    'Documentation Services',
    'Healthcare Support',
    'Business Services',
    'Education Consulting',
    'Legal & Compliance',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Ready to experience premium NRI services? Let's start a conversation about how we can help you.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${info.gradient} rounded-xl mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
                  <p className="text-slate-600">{info.content}</p>
                </motion.a>
              );
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 text-center"
                >
                  <CheckCircle className="mx-auto mb-4 text-green-600" size={64} />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600">
                    We've received your message and will get back to you soon.
                  </p>
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
                            : 'border-slate-200 focus:border-indigo-600 focus:ring-indigo-600'
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
                            : 'border-slate-200 focus:border-indigo-600 focus:ring-indigo-600'
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
                            : 'border-slate-200 focus:border-indigo-600 focus:ring-indigo-600'
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
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-indigo-600 focus:ring-indigo-600 transition-all"
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
                      Message <span className="text-red-500">*</span>
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
                            : 'border-slate-200 focus:border-indigo-600 focus:ring-indigo-600'
                        }`}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                    <p className="mt-1 text-xs text-slate-500">
                      {formData.message.length}/1000 characters (minimum 10)
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
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
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Why Choose Tipping Bridge?
                </h3>
                <ul className="space-y-3">
                  {[
                    '15+ Years of Experience',
                    '5,000+ Happy Families',
                    '24/7 Dedicated Support',
                    'Verified & Trusted Partners',
                    'Transparent Pricing',
                    'Quick Response Times',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="text-indigo-600 flex-shrink-0" size={20} />
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
                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                  <Clock size={20} />
                  <span>Average Response: 4-6 hours</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/80 mb-6">
                  For urgent matters, call us directly or use our emergency contact line.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-slate-900 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
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
