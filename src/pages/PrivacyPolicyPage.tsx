import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <PageHero title="Privacy Policy & Terms">
        <p className="text-slate-600 mt-4">Last Updated: 30 December 2025</p>
      </PageHero>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#c53030] hover:text-[#7a0b0b] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-[#f2dcdc]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-slate max-w-none"
            >
              {/* Privacy Policy Section */}
              <div className="mb-16">
                <h1 className="text-4xl font-bold text-[#0b1f33] mb-6">Privacy Policy - Tipping Bridge</h1>
                <p className="text-slate-600 mb-8">Last Updated: 30 December 2025</p>
                
                <p className="text-slate-700 mb-8 leading-relaxed">
                  Tipping Bridge ("we", "our", "us") respects your privacy and is committed to protecting the personal information of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.tippingbridge.com or use our services.
                </p>
                <p className="text-slate-700 mb-8 leading-relaxed">
                  By using our website, you agree to the terms of this Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">1. Information We Collect</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">We may collect the following types of information:</p>

                <h3 className="text-xl font-semibold text-[#0b1f33] mt-6 mb-3">a. Personal Information</h3>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Address (India or overseas)</li>
                  <li>Identification details (only when required for services such as property, legal, or financial assistance)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0b1f33] mt-6 mb-3">b. Service-Related Information</h3>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Property details</li>
                  <li>Medical assistance requests</li>
                  <li>Investment or insurance inquiries</li>
                  <li>Any information voluntarily provided through forms, emails, or calls</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0b1f33] mt-6 mb-3">c. Technical Information</h3>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Cookies and usage data</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">We use the collected information to:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Provide and manage our services</li>
                  <li>Communicate regarding service requests</li>
                  <li>Improve our website and offerings</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                  <li>Send essential service-related updates (not spam)</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">3. Sharing of Information</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">We do not sell or rent your personal data.</p>
                <p className="text-slate-700 mb-4 leading-relaxed">Information may be shared only with:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Trusted service partners (lawyers, doctors, property managers, etc.) strictly for service delivery</li>
                  <li>Government or regulatory authorities when legally required</li>
                  <li>IT and hosting providers for secure platform operations</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">All partners are required to maintain confidentiality.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">4. Data Security</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">We implement appropriate technical and organizational security measures to protect your data against:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Unauthorized access</li>
                  <li>Loss or misuse</li>
                  <li>Alteration or disclosure</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">However, no online transmission is 100% secure. Users share data at their own risk.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">5. Cookies Policy</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">Our website uses cookies to:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Enhance user experience</li>
                  <li>Analyze website traffic and performance</li>
                  <li>Remember user preferences</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">You can manage or disable cookies through your browser settings.</p>
                <p className="text-slate-700 mb-6 leading-relaxed">For full details, see our Cookies Policy below.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">6. Data Retention</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">We retain personal data only for as long as necessary for:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Service delivery</li>
                  <li>Legal compliance</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">After this, data is securely deleted.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">7. User Rights</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">You may:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent (subject to service limitations)</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">Requests can be sent to: <a href="mailto:support@tippingbridge.com" className="text-[#c53030] hover:underline">support@tippingbridge.com</a></p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">8. Third-Party Links</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">We may update this Policy from time to time. Updates will be posted on this page with a revised date.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">10. Contact Us</h2>
                <p className="text-slate-700 mb-2 leading-relaxed">For privacy concerns or questions:</p>
                <p className="text-slate-700 mb-2 leading-relaxed">Email: <a href="mailto:support@tippingbridge.com" className="text-[#c53030] hover:underline">support@tippingbridge.com</a></p>
                <p className="text-slate-700 mb-6 leading-relaxed">Location: India</p>
              </div>

              {/* Cookies Policy Section */}
              <div className="mb-16 border-t-2 border-slate-200 pt-12">
                <h1 className="text-4xl font-bold text-[#0b1f33] mb-6">Cookies Policy - Tipping Bridge</h1>
                <p className="text-slate-600 mb-8">Last Updated: 30 December 2025</p>
                
                <p className="text-slate-700 mb-8 leading-relaxed">
                  This Cookies Policy explains how Tipping Bridge ("we", "our", "us") uses cookies and similar technologies when you visit www.tippingbridge.com.
                </p>
                <p className="text-slate-700 mb-8 leading-relaxed">
                  By using our website, you consent to the use of cookies as described here.
                </p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">1. What Are Cookies?</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">Cookies are small text files stored on your device to improve user experience and website performance.</p>
                <p className="text-slate-700 mb-6 leading-relaxed">They do not collect personal details unless you provide them voluntarily.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-[#0b1f33] mt-6 mb-3">a. Essential Cookies</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">Required for website functionality such as navigation and form submission.</p>

                <h3 className="text-xl font-semibold text-[#0b1f33] mt-6 mb-3">b. Analytics Cookies</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">Used to understand:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Pages visited</li>
                  <li>Time spent</li>
                  <li>Site performance</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0b1f33] mt-6 mb-3">c. Preference Cookies</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">Store user preferences such as language.</p>

                <h3 className="text-xl font-semibold text-[#0b1f33] mt-6 mb-3">d. Third-Party Cookies</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">Used by trusted service providers (e.g., analytics tools).</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">3. Why We Use Cookies</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">To:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Improve functionality</li>
                  <li>Analyze traffic</li>
                  <li>Enhance security</li>
                  <li>Personalize user experience</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">We do not use cookies for spam.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">4. Managing Cookies</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">You may disable cookies via browser settings. Some features may not function correctly if disabled.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">5. Updates to This Policy</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">We may update this policy periodically.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">6. Contact Us</h2>
                <p className="text-slate-700 mb-2 leading-relaxed">Email: <a href="mailto:support@tippingbridge.com" className="text-[#c53030] hover:underline">support@tippingbridge.com</a></p>
                <p className="text-slate-700 mb-2 leading-relaxed">Website: <a href="https://www.tippingbridge.com" className="text-[#c53030] hover:underline">www.tippingbridge.com</a></p>
                <p className="text-slate-700 mb-6 leading-relaxed">Location: India</p>
              </div>

              {/* Terms & Conditions Section */}
              <div className="border-t-2 border-slate-200 pt-12">
                <h1 className="text-4xl font-bold text-[#0b1f33] mb-6">Terms & Conditions - Tipping Bridge</h1>
                <p className="text-slate-600 mb-8">Last Updated: 30 December 2025</p>
                
                <p className="text-slate-700 mb-8 leading-relaxed">
                  Welcome to Tipping Bridge. By accessing or using our website and services, you agree to comply with these Terms & Conditions.
                </p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">1. Use of Services</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">Our services are primarily intended for NRIs and individuals seeking assistance in India.</p>
                <p className="text-slate-700 mb-4 leading-relaxed">Users must:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Provide accurate information</li>
                  <li>Use services lawfully</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">Misuse or false information may result in service termination.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">2. Nature of Services</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">Tipping Bridge acts as a facilitator and coordinator.</p>
                <p className="text-slate-700 mb-4 leading-relaxed">We do not:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Provide legal, medical, or financial advice directly</li>
                  <li>Guarantee outcomes of third-party services</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">Final responsibility remains with the user.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">3. Payments & Fees</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Service fees (if applicable) will be communicated in advance</li>
                  <li>Payments are non-refundable unless otherwise stated</li>
                  <li>Third-party charges are outside our control</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">4. Limitation of Liability</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">Tipping Bridge shall not be liable for:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Third-party delays or actions</li>
                  <li>Losses from reliance on external professionals</li>
                  <li>Indirect, incidental, or consequential damages</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">5. Intellectual Property</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">All website content including:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Text</li>
                  <li>Logos</li>
                  <li>Graphics</li>
                  <li>Design</li>
                </ul>
                <p className="text-slate-700 mb-6 leading-relaxed">is owned by Tipping Bridge and may not be reproduced without permission.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">6. Confidentiality</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">User information will be treated as confidential, subject to legal requirements.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">7. Termination</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">We reserve the right to:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                  <li>Suspend or terminate access</li>
                  <li>Refuse service for policy violations</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">8. Governing Law</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">These Terms are governed by the laws of India. Disputes shall fall under Indian court jurisdiction.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">9. Changes to Terms</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">We may modify these Terms at any time. Continued use constitutes acceptance.</p>

                <h2 className="text-2xl font-bold text-[#0b1f33] mt-10 mb-4">10. Contact Information</h2>
                <p className="text-slate-700 mb-2 leading-relaxed">Email: <a href="mailto:support@tippingbridge.com" className="text-[#c53030] hover:underline">support@tippingbridge.com</a></p>
                <p className="text-slate-700 mb-6 leading-relaxed">Website: <a href="https://www.tippingbridge.com" className="text-[#c53030] hover:underline">www.tippingbridge.com</a></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}






