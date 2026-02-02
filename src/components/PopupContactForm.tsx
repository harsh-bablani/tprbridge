import React, { useState, useEffect, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function PopupContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Use a separate environment variable for the popup's Google Sheet
  const POPUP_SCRIPT_URL = import.meta.env.VITE_POPUP_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxLsF8n-Jxgyi4nng-Ui_ju6cCOe5IyPF4cMpa57P5pEs75XGPhP0JHkWY27RMGCIIW2Q/exec';

  const services = [
    'Property Management',
    'Long and Short Stay',
    'Elderly Care',
    'Investments and Insurance',
    'Doctor & Hospital Assistance',
    'Government Documentation',
    'Events & Gathering Services',
    'Others',
  ];

  useEffect(() => {
    // Check if already shown in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (hasSeenPopup) return;

    // Track visit start time to handle navigation between pages
    const visitStart = sessionStorage.getItem('visitStart');
    const now = Date.now();
    let delay = 60000; // 20 seconds default

    if (visitStart) {
      const elapsed = now - parseInt(visitStart, 10);
      delay = Math.max(0, 60000 - elapsed);
    } else {
      sessionStorage.setItem('visitStart', now.toString());
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      await fetch(POPUP_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(submissionData),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Close popup automatically after success message
      setTimeout(() => {
        setIsVisible(false);
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      }, 3000);

    } catch (error) {
      console.error('Popup submission error:', error);
      setIsSubmitting(false);
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Header Background */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#c53030] to-[#7a0b0b]" />
            
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>

            <div className="relative px-8 pt-8 pb-8">
              <div className="mb-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-white/90 text-sm">Let us help you with your needs in India.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Thank You!</h4>
                    <p className="text-slate-600">We have received your details and will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-[#c53030] focus:ring-1 focus:ring-[#c53030] outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mobile No.</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-[#c53030] focus:ring-1 focus:ring-[#c53030] outline-none transition-all"
                          placeholder="+91..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-[#c53030] focus:ring-1 focus:ring-[#c53030] outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Service Interest</label>
                      <select
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-[#c53030] focus:ring-1 focus:ring-[#c53030] outline-none transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-[#c53030] focus:ring-1 focus:ring-[#c53030] outline-none transition-all resize-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    {submitError && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                        <AlertCircle size={16} />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}