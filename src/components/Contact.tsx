import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, Download, X, CheckCircle } from 'lucide-react';

// const brochurePath = '/TIPPING BRIDGE BUSINESS BROCHURE.pdf'; // Commented out for demo

export default function Contact() {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  // Google Sheets Configuration
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

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

  useEffect(() => {
    const handleExternalOpen = () => {
      handleOpenModal();
    };
    window.addEventListener('open-brochure-modal', handleExternalOpen);
    return () => window.removeEventListener('open-brochure-modal', handleExternalOpen);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
      // Prepare data for Google Sheets
      const submissionData = {
        name: name,
        email: email,
        phone: phone,
        country: country,
        type: 'Brochure Request',
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
      } else {
        console.log('Brochure request data:', submissionData);
        console.warn('Google Script URL not configured. Add VITE_GOOGLE_SCRIPT_URL to .env file');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 5 seconds
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

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white/60 via-[#fef9f8]/80 to-[#f0f5fb]/70 overflow-hidden px-4 sm:px-6">
      {/* Premium luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#fcd6d6]/40 to-[#c53030]/10 rounded-full mix-blend-multiply filter blur-3xl" animate={{ opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#dbe9ff]/40 to-[#0b1f33]/5 rounded-full mix-blend-multiply filter blur-3xl" animate={{ opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-[#f87171] mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-6 tracking-tight">
            Get in <span className="text-[#c53030]">Touch</span>
          </h2>
          <p className="text-xl text-[#34445a] max-w-3xl mx-auto">
            Ready to experience the peace of mind that comes with trusted NRI services?
            Let's start a conversation about how we can help you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {[
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
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group relative block p-10 bg-gradient-to-br from-white/97 to-white/93 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_40px_80px_-15px_rgba(197,48,48,0.5)] transition-all duration-500 border-2 border-gradient-to-r from-[#f2dcdc] to-white/30 hover:border-[#c53030] overflow-hidden"
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 rounded-3xl -z-10`}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Optimized shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
                
                <motion.div
                  className={`inline-flex p-5 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 shadow-xl relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={36} className="text-white" strokeWidth={2} />
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
                <h3 className="text-2xl font-extrabold text-[#0b1f33] mb-3 group-hover:text-white transition-colors relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-lg font-medium relative z-10">
                  {item.content}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-full font-extrabold text-lg shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(197,48,48,0.5)] transition-all duration-500 overflow-hidden"
            >
              {/* Optimized shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
              
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                Get in Touch
              </motion.span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1
                }}
                className="relative z-10"
              >
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} strokeWidth={2.5} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

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
                    We've received your information and will get back to you soon.
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
    </section>
  );
}
