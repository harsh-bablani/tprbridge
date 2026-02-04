import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';
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
  ArrowRight,
  Search,
  Download,
  CheckCircle,
} from 'lucide-react';

import PMImg from '../assets/images/PM.png';
import ECImg from '../assets/images/EC.png';
import LSImg from '../assets/images/LS.png';
import LDImg from '../assets/images/LD.png';
import SEGImg from '../assets/images/SEG.png';
import IIImg from '../assets/images/II.png';
import ASImg from '../assets/images/AS.png';
import InsuranceImg from '../assets/images/Insurance.png';
import ElderImg from '../assets/images/Elder.png';
import DoctorImg from '../assets/images/Doctor.png';
import PropertyImg from '../assets/images/Property.png';
import LegaldocImg from '../assets/images/Legaldoc.png';
import PartyyImg from '../assets/images/Partyy.png';
import LongstayImg from '../assets/images/Longstay.png';

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: typeof Home;
  gradient: string;
  image: string;
  images: string[];
  contentSections: string[];
  imagePosition: number;
  serviceImage: string;
  features?: string[];
  packages?: {
    name: string;
    services: Record<string, string>;
  }[];
}

const services: Service[] = [
  {
  id: 'property-management',
  title: 'Property Management for NRIs',
  shortDescription:
    'Your India home should be an asset, not a source of constant follow-ups. Tipping Bridge manages your property end-to-end with discreet on-ground execution, clear approvals, and timely updates, so you stay in control from anywhere.',
  fullDescription:

    'Your India home should be an asset, not a source of constant follow-ups. Tipping Bridge manages your property end-to-end with discreet on-ground execution, clear approvals, and timely updates, so you stay in control from anywhere.\n\n' +

    '• Tenant & Tenancy: Listing and marketing, enquiries and viewings, tenant onboarding, and ongoing tenancy coordination.\n\n' +

    '• Rent & Deposit: Rent collection support, deposit tracking, and clear visibility of paid, due, and pending amounts.\n\n' +

    '• Keys & Access: Secure key custody and strictly authorised access for inspections, maintenance, and handovers.\n\n' +

    '• Maintenance & Repairs: Preventive upkeep and repairs coordinated with trusted vendors, with documented scope and cost transparency.\n\n' +

    '• Possession & Handover: Support for move-ins, tenant transitions, and possession formalities for newly purchased or recently vacated homes.\n\n' +

    'One dependable point of contact. Professional reporting. Reliable execution.',
  contentSections: [
    'Your India home should be an asset, not a source of constant follow-ups. Tipping Bridge manages your property end-to-end with discreet on-ground execution, clear approvals, and timely updates, so you stay in control from anywhere.',
    '• Tenant & Tenancy: Listing and marketing, enquiries and viewings, tenant onboarding, and ongoing tenancy coordination.',
    '• Rent & Deposit: Rent collection support, deposit tracking, and clear visibility of paid, due, and pending amounts.',
    '• Keys & Access: Secure key custody and strictly authorised access for inspections, maintenance, and handovers.',
    '• Maintenance & Repairs: Preventive upkeep and repairs coordinated with trusted vendors, with documented scope and cost transparency.',
    '• Possession & Handover: Support for move-ins, tenant transitions, and possession formalities for newly purchased or recently vacated homes.',
    'One dependable point of contact. Professional reporting. Reliable execution.'
  ],
  imagePosition: 1,
  serviceImage: PropertyImg,
  icon: Home,
  gradient: 'from-[#c53030] to-[#7a0b0b]',
  image: PMImg,
  images: ['/P1.jpeg', '/P2.jpeg', '/P3.jpeg'],
},

{
  id: 'elderly-care',
  title: 'Eldery Care',
  shortDescription:
    'When you live overseas, caring for ageing parents in India takes more than calls. It takes dependable, on-ground coordination, trusted professionals, timely support, and compassionate care that ensures their safety, dignity, comfort, and your complete peace of mind.',
  fullDescription:

    'When you live overseas, supporting ageing parents in India takes more than calls, it takes dependable, on-ground coordination. Tipping Bridge Elder Care brings structured assistance across Health & Fitness, Filing & Forms, Technology & Troubleshooting, Home Security & Maintenance, and Memories & Milestones, so support continues even whilst you are miles away. \n\n' +

    '• Health & Fitness: Our healthcare team is trained to handle emergency situations, and can arrange tele-consultations, home doctor visits, sample home collections for lab tests, nurse/medical attendant services, post-surgical support, medicine delivery, medical equipment rentals, physiotherapy, medical-record maintenance, and ambulance/hospitalisation assistance. \n\n' +

    '• Filing & Forms: Support for income tax return filing, banking assistance, legal documentation help, and Aadhaar/Voter ID and senior citizen card assistance. \n\n' +

    '• Technology & Troubleshooting: Zoom/Google Hangouts support, social media setup, popular apps (Zomato/Uber/Netflix), hardware repair support, and personalised tutorials to bridge the digital gap. \n\n' +

    '• Home Security & Maintenance: Plumber/electrician/carpenter support, whitewash, appliance repairs, pest control, annual maintenance contracts, CCTV/video doorbell installation, and police verification of domestic staff, with supervision where needed. \n\n' +

    '• Memories & Milestones: Birthdays, anniversaries and festivals, gifts, décor, food, florist and pooja services, because emotional wellbeing matters too.',
  contentSections: [
    'When you live overseas, supporting ageing parents in India takes more than calls, it takes dependable, on-ground coordination. Tipping Bridge Elder Care brings structured assistance across Health & Fitness, Filing & Forms, Technology & Troubleshooting, Home Security & Maintenance, and Memories & Milestones, so support continues even whilst you are miles away.',
    '• Health & Fitness: Our healthcare team is trained to handle emergency situations, and can arrange tele-consultations, home doctor visits, sample home collections for lab tests, nurse/medical attendant services, post-surgical support, medicine delivery, medical equipment rentals, physiotherapy, medical-record maintenance, and ambulance/hospitalisation assistance.',
    '• Filing & Forms: Support for income tax return filing, banking assistance, legal documentation help, and Aadhaar/Voter ID and senior citizen card assistance.',
    '• Technology & Troubleshooting: Zoom/Google Hangouts support, social media setup, popular apps (Zomato/Uber/Netflix), hardware repair support, and personalised tutorials to bridge the digital gap.',
    '• Home Security & Maintenance: Plumber/electrician/carpenter support, whitewash, appliance repairs, pest control, annual maintenance contracts, CCTV/video doorbell installation, and police verification of domestic staff, with supervision where needed.',
    '• Memories & Milestones: Birthdays, anniversaries and festivals, gifts, décor, food, florist and pooja services, because emotional wellbeing matters too.'
  ],
  imagePosition: 1,
  serviceImage: ElderImg,
  icon: HeartPulse,
  gradient: 'from-[#e53e3e] to-[#b91c1c]',
  image: ECImg,
  images: ['/E1.jpeg', '/E2.jpeg', '/E3.jpeg'],

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
  id: 'long-short-stay',
  title: 'Long and Short Stay Service Apartments',
  shortDescription:
    'Returning to India for a family reunion, executive travel, a friends’ get-together, or a longer relocation? Tipping Bridge provides luxurious serviced apartments for NRIs across key Indian cities, designed for a few days, or longer extended stays.',
  fullDescription:

    'Returning to India for a family reunion, executive travel, a friends\' get-together, or a longer relocation? Tipping Bridge provides luxurious serviced apartments for NRIs across key Indian cities, designed for a few days, a few weeks, or longer extended stays.\n\n' +

    '• If you feel homesick when you travel or you\'re back in India seasonally, our apartment homes are built to feel like a second home, neatly furnished so you\'re not burdened with carrying essentials. From food to furniture and other amenities, our carefully selected properties help you start each day fresh, focused, and settled.\n\n' +

    '• Expect spacious rooms, basic Wi-Fi support, laundry and fitness rooms, and additional kitchen items, close to grocery, shopping, entertainment, and pharmacies, so you get hotel-like convenience without sacrificing home-like comfort.\n\n' +

    '• Choose flexible move-in and move-out dates, with simple monthly pricing, special rates/discounts for longer stays, and a single monthly payment. Book with confidence: properties are reviewed by our trusted guest community, and you receive 24/7 support during your stay.\n\n' +

    '• Need to work while you\'re here? Find work-friendly spaces with high-speed Wi-Fi and dedicated working areas, ideal for staffing, displacement, and relocation.',
  contentSections: [
    'Returning to India for a family reunion, executive travel, a friends\' get-together, or a longer relocation? Tipping Bridge provides luxurious serviced apartments for NRIs across key Indian cities, designed for a few days, a few weeks, or longer extended stays.',
    '• If you feel homesick when you travel or you\'re back in India seasonally, our apartment homes are built to feel like a second home, neatly furnished so you\'re not burdened with carrying essentials. From food to furniture and other amenities, our carefully selected properties help you start each day fresh, focused, and settled.',
    '• Expect spacious rooms, basic Wi-Fi support, laundry and fitness rooms, and additional kitchen items, close to grocery, shopping, entertainment, and pharmacies, so you get hotel-like convenience without sacrificing home-like comfort.',
    '• Choose flexible move-in and move-out dates, with simple monthly pricing, special rates/discounts for longer stays, and a single monthly payment. Book with confidence: properties are reviewed by our trusted guest community, and you receive 24/7 support during your stay.',
    '• Need to work while you\'re here? Find work-friendly spaces with high-speed Wi-Fi and dedicated working areas, ideal for staffing, displacement, and relocation.'
  ],
  imagePosition: 1,
  serviceImage: LongstayImg,
  icon: BedDouble,
  gradient: 'from-[#7a0b0b] to-[#0b1f33]',
  image: LSImg,
  // Map to existing apartment/stay images in the public folder
  images: ['/S1.jpeg', '/S2.jpeg', '/S1.jpeg'],
  //images: ['/IN1.jpeg', '/IN2.jpeg', '/IN3.jpeg'],

},


  {
    id: 'investments-insurance',
    title: 'Investments & Insurance',
    shortDescription:
      'Manage India-side financial matters with clarity, even when you live overseas. Our expert guidance, transparent processes, and trusted partners help NRIs protect assets, grow wealth, and make confident financial decisions from anywhere in the world.',
    fullDescription:

      'Manage India-side financial matters with clarity, even when you live overseas. Tipping Bridge supports NRIs through Investment & Wealth Management across Insurance, Mutual Funds and Real Estate, helping you plan and execute from anywhere.\n\n' +

      '• Insurance: Support for Life/Term, Motor/Auto, Health and Home insurance. Insurance solicitation in India is governed by IRDA. Our Insurance Specialist provides competitive rates for term plans and motor insurance specially negotiated for NRI clients. Motor cover includes comprehensive car insurance, third-party liability and personal accident cover. For health insurance, we guide you to a tailor-made plan based on your requirements and pass on benefits from negotiated rates. For home insurance, we guide you to policies that are cost competitive on premium pricing and strong on consumer benefits.\n\n' +

      '• Mutual Funds & Investing: Unbiased recommendations focused on long-term wealth creation, with execution support across Direct Mutual Funds, Stocks, ETFs, Bonds and Savings. Our wealth advisory helps create a robust plan aligned to your risk-return needs, stay disciplined during volatile markets, and diversify across assets.\n\n' +

      '• Real Estate: Guidance for NRI clients with best/transparent/unbiased deals, and support on formalities and negotiations to acquire your chosen property.',
    contentSections: [
      'Manage India-side financial matters with clarity, even when you live overseas. Tipping Bridge supports NRIs through Investment & Wealth Management across Insurance, Mutual Funds and Real Estate, helping you plan and execute from anywhere.',
      '• Insurance: Support for Life/Term, Motor/Auto, Health and Home insurance. Insurance solicitation in India is governed by IRDA. Our Insurance Specialist provides competitive rates for term plans and motor insurance specially negotiated for NRI clients. Motor cover includes comprehensive car insurance, third-party liability and personal accident cover. For health insurance, we guide you to a tailor-made plan based on your requirements and pass on benefits from negotiated rates. For home insurance, we guide you to policies that are cost competitive on premium pricing and strong on consumer benefits.',
      '• Mutual Funds & Investing: Unbiased recommendations focused on long-term wealth creation, with execution support across Direct Mutual Funds, Stocks, ETFs, Bonds and Savings. Our wealth advisory helps create a robust plan aligned to your risk-return needs, stay disciplined during volatile markets, and diversify across assets.',
      '• Real Estate: Guidance for NRI clients with best/transparent/unbiased deals, and support on formalities and negotiations to acquire your chosen property.'
    ],
    imagePosition: 1,
    serviceImage: InsuranceImg,
    icon: PiggyBank,
    gradient: 'from-[#0b1f33] to-[#102c44]',
      image: IIImg,
    images: ['/I1.jpeg', '/I2.jpeg', '/I3.jpeg'],

  },

  {
    id: 'government-documentation',
    title: 'Legal & Documentation',
    shortDescription:
      'When you’re overseas, even routine paperwork in India can become time-consuming and stressful. Our expert support ensures accurate filings and dependable execution, so NRIs stay compliant without constant coordination.',
    fullDescription:
      'When you’re overseas, even routine paperwork in India can become time-consuming and stressful. With just a phone call, Tipping Bridge can connect you to a dedicated team of legal experts to help address your family’s tax and legal documentation needs in India, so work moves forward in your absence.\n\n' +

      'We support documentation and facilitation across:\n\n' +

      '• Certificates: birth certificate, marriage certificate, death certificate, and changes/non-availability of birth certificate.\n\n' +

      '• Education & references: degree certificate, marksheet/transcription, syllabus copy, and reference letters.\n\n' +

      '• Identity & filings: PAN card application/submission, document procurement, and filing of IT returns.\n\n' +

      '• Tax & compliance support: attending to IT notice / tax authority visits, and financial taxation and legal advice.\n\n' +

      '• Claims, loans & legal guidance: life/general insurance and mediclaim claim follow-ups, loan syndicate follow-up, and arranging lawyers’ opinions and legal matter expert advice.\n\n' +

      '• Court-related formalities: legalisation, notarisation and attestation of documents, including court visits.\n\n' +

      '• Hidden Wealth Facilitation.\n\n' +

      'A single professional point of coordination, built for NRIs who want reliable execution in India without repeated follow-ups.',
    contentSections: [
      'When you’re overseas, even routine paperwork in India can become time-consuming and stressful. With just a phone call, Tipping Bridge can connect you to a dedicated team of legal experts to help address your family’s tax and legal documentation needs in India, so work moves forward in your absence.',
      'We support documentation and facilitation across:',
      '• Certificates: birth certificate, marriage certificate, death certificate, and changes/non-availability of birth certificate.',
      '• Education & references: degree certificate, marksheet/transcription, syllabus copy, and reference letters.',
      '• Identity & filings: PAN card application/submission, document procurement, and filing of IT returns.',
      '• Tax & compliance support: attending to IT notice / tax authority visits, and financial taxation and legal advice.',
      '• Claims, loans & legal guidance: life/general insurance and mediclaim claim follow-ups, loan syndicate follow-up, and arranging lawyers’ opinions and legal matter expert advice.',
      '• Court-related formalities: legalisation, notarisation and attestation of documents, including court visits.',
      '• Hidden Wealth Facilitation.',
      'A single professional point of coordination, built for NRIs who want reliable execution in India without repeated follow-ups.'
    ],
    imagePosition: 1,
    serviceImage: LegaldocImg,
    icon: FileText,
    gradient: 'from-[#0b1f33] to-[#1d3557]',
    image: LDImg,
    // Legal & Documentation service images - using appropriate documentation/legal imagery
    images: ['/I3.jpeg'],

  },

  {
    id: 'doctor-hospital-assistance',
    title: 'Assistance Services with Doctor & Hospitalisation',
    shortDescription:
      'Medical coordination in India can be stressful when you are overseas, especially when a routine check-up becomes urgent, requiring timely support, trusted professionals, and clear on-ground coordination.',
    fullDescription:

      'Medical coordination in India can be stressful when you are overseas, especially when a routine check-up becomes urgent. \n\n' +

      'Tipping Bridge supports NRIs with end-to-end assistance for doctor appointments and hospitalisation so your family receives timely care, at home and at the hospital, with clear coordination. \n\n' +

      '• We organise tele-consultations with qualified and experienced doctors and can ensure you are on the same call with your parents and the doctor/specialist, so decisions are informed and connected. \n\n' +

      '• We also coordinate home visits by doctors, sample home collection for lab tests, and post-surgical support through nurses and medical attendants. \n\n' +

      '• When ongoing support is required, we can help with home delivery of medicines, rental of medical equipment, medical supplies, physiotherapy coordination, and maintenance of medical records. \n\n' +

      '• For nutrition and lifestyle, support can include a dietician, fitness coaches, and health menu/food delivery aligned to the diet plan. \n\n' +

      '• In emergencies, we provide ambulance assistance and emergency support for hospitalisation, along with medicine routine planning and reminder schedules.',
    contentSections: [
      'Medical coordination in India can be stressful when you are overseas, especially when a routine check-up becomes urgent.',
      'Tipping Bridge supports NRIs with end-to-end assistance for doctor appointments and hospitalisation so your family receives timely care, at home and at the hospital, with clear coordination.',
      '• We organise tele-consultations with qualified and experienced doctors and can ensure you are on the same call with your parents and the doctor/specialist, so decisions are informed and connected.',
      '• We also coordinate home visits by doctors, sample home collection for lab tests, and post-surgical support through nurses and medical attendants.',
      '• When ongoing support is required, we can help with home delivery of medicines, rental of medical equipment, medical supplies, physiotherapy coordination, and maintenance of medical records.',
      '• For nutrition and lifestyle, support can include a dietician, fitness coaches, and health menu/food delivery aligned to the diet plan.',
      '• In emergencies, we provide ambulance assistance and emergency support for hospitalisation, along with medicine routine planning and reminder schedules.'
    ],
    imagePosition: 1,
    serviceImage: DoctorImg,
    icon: Stethoscope,
    gradient: 'from-[#d33b3b] to-[#7a0b0b]',
    image: ASImg,
    // Map to existing healthcare-related images in the public folder
    //
    images: ['/D1.jpeg', '/D2.jpeg', '/D3.jpeg'],

  },

  {
    id: 'events-gathering',
    title: 'Small Events & Gathering Services',
    shortDescription:
      'Being overseas shouldn’t mean missing the moments that matter at home. We help NRIs plan and manage celebrations, milestones, and meaningful gatherings in India through trusted coordination, thoughtful execution, and seamless on-ground support.',
    fullDescription:
      'Being overseas shouldn’t mean missing the moments that matter at home. Tipping Bridge helps NRIs create and coordinate small celebrations in India so your family can enjoy the occasion, while we take on the organisation and responsibility.\n\n' +

      'Allow us to help you celebrate every special occasion and milestone in style, without having to manage the details from abroad.\n\n' +

      '• From birthdays and anniversaries to festivals, or a simple Havan/Pooja, we plan the celebration and coordinate the key elements, including decoration, personalised gifts and experiences, and food, so what remains are beautiful memories to cherish.\n\n' +

      '• We also support “Memories & Milestones” requests such as florist services, festival décor and essentials, home salon and spa services, personalised family photo shoots, runner services, and movie/theatre tickets.\n\n' +

      '• Even without a fixed occasion, we can help turn an ordinary day into a special one with doorstep surprises, such as a manicure or pedicure, a massage or facial, or even a haircut arranged with care.',
    contentSections: [
      'Being overseas shouldn’t mean missing the moments that matter at home. Tipping Bridge helps NRIs create and coordinate small celebrations in India so your family can enjoy the occasion, while we take on the organisation and responsibility.',
      'Allow us to help you celebrate every special occasion and milestone in style, without having to manage the details from abroad.',
      '• From birthdays and anniversaries to festivals, or a simple Havan/Pooja, we plan the celebration and coordinate the key elements, including decoration, personalised gifts and experiences, and food, so what remains are beautiful memories to cherish.',
      '• We also support “Memories & Milestones” requests such as florist services, festival décor and essentials, home salon and spa services, personalised family photo shoots, runner services, and movie/theatre tickets.',
      '• Even without a fixed occasion, we can help turn an ordinary day into a special one with doorstep surprises, such as a manicure or pedicure, a massage or facial, or even a haircut arranged with care.'
    ],
    imagePosition: 1,
    serviceImage: PartyyImg,
    icon: PartyPopper,
    gradient: 'from-[#7a0b0b] to-[#c53030]',
    image: SEGImg,
    // Map to existing celebration/event style images in the public folder

    images: ['/PE1.jpeg', '/PE2.jpeg', '/PE3.jpeg'],

  },
];


export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showPackages, setShowPackages] = useState(false);
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

  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId && mounted) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
        setShowPackages(false);
      }
    }
  }, [searchParams, mounted]);

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
          <span>Know More</span>
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
                className="relative"
              >
                <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                  <Search className={`transition-colors ${searchQuery ? 'text-[#c53030]' : 'text-[#9aa4b5]'}`} size={26} />
                </div>
                <motion.input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-14 ${searchQuery ? 'pr-14' : 'pr-6'} py-5 rounded-2xl bg-white/90 backdrop-blur-md border-2 transition-all shadow-lg hover:shadow-xl ${
                    searchQuery 
                      ? 'border-[#c53030] bg-white shadow-xl shadow-[#c53030]/20' 
                      : 'border-[#f2dcdc] focus:border-[#c53030]'
                  } text-[#0b1f33] placeholder-[#9aa4b5] focus:outline-none focus:ring-4 focus:ring-[#f87171]/30`}
                  whileFocus={{ scale: 1.02 }}
                />
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-[#fef2f2] text-[#9aa4b5] hover:text-[#c53030] transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Clear search"
                  >
                    <X size={20} />
                  </motion.button>
                )}
                {searchQuery && (() => {
                  const count = services.filter((service) => {
                    const matchesSearch =
                      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesCategory = !selectedCategory || service.id === selectedCategory;
                    return matchesSearch && matchesCategory;
                  }).length;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 mt-2 px-4 py-1.5 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white text-sm font-semibold rounded-full shadow-lg whitespace-nowrap"
                    >
                      {count} {count === 1 ? 'result' : 'results'} found
                    </motion.div>
                  );
                })()}
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
                              setShowPackages(false);
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#fef2f2] to-[#fdeaea] rounded-full mb-6"
              >
                <Search className="text-[#c53030]" size={40} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#0b1f33] mb-3">No services found</h3>
              <p className="text-lg text-slate-600 mb-4">
                {searchQuery 
                  ? `We couldn't find any services matching "${searchQuery}"`
                  : 'No services match your selected filters'
                }
              </p>
              {(searchQuery || selectedCategory) && (
                <motion.button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear filters
                </motion.button>
              )}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur-md hover:bg-[#c53030] hover:text-white text-slate-800 rounded-full transition-all shadow-lg border border-slate-100"
                >
                  <X size={24} />
                </button>

                {/* Left Side - Image (Desktop) / Top (Mobile) */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative flex-shrink-0 bg-slate-100">
                  <img
                    src={selectedService.images[0]}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0b1f33]/10" />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-3/5 overflow-y-auto bg-white">
                  <div className="p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f33] mb-6 leading-tight">
                        {selectedService.title}
                      </h2>
                      
                      <div className="h-1 w-20 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] rounded-full mb-8" />

                      <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                        {selectedService.contentSections.map((section, index) => (
                          <div key={index}>
                            <p>{section}</p>
                            {index === selectedService.imagePosition - 1 && (
                              <div className="my-8 flex justify-center">
                                <img
                                  src={selectedService.serviceImage}
                                  alt={`${selectedService.title} illustration`}
                                  className="max-w-full h-auto rounded-lg shadow-lg"
                                  style={{ maxWidth: '400px' }}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Packages Section */}
                    {selectedService.packages && selectedService.packages.length > 0 && (
                      <div className="mt-10">
                        {!showPackages ? (
                          <button
                            onClick={() => setShowPackages(true)}
                            className="inline-flex items-center gap-2 text-[#c53030] font-bold text-lg hover:gap-3 transition-all group"
                          >
                            <span>View Care Packages</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden"
                          >
                            <h3 className="text-2xl font-bold text-[#0b1f33] mb-6">Available Packages</h3>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                              <table className="w-full border-collapse bg-white text-left text-sm">
                                <thead>
                                  <tr className="bg-[#0b1f33] text-white">
                                    <th className="px-4 py-3 font-semibold">Services</th>
                                    {selectedService.packages.map((pkg) => (
                                      <th key={pkg.name} className="px-4 py-3 font-semibold text-center border-l border-white/10">
                                        {pkg.name}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                  {Object.keys(selectedService.packages[0].services).map((serviceName) => (
                                    <tr key={serviceName} className="hover:bg-slate-50/50 transition-colors">
                                      <td className="px-4 py-3 text-slate-700 font-medium">{serviceName}</td>
                                      {selectedService.packages!.map((pkg) => (
                                        <td key={pkg.name} className="px-4 py-3 text-center text-slate-600 border-l border-slate-100">
                                          {pkg.services[serviceName] === '✔' ? (
                                            <CheckCircle className="inline-block text-green-500" size={18} />
                                          ) : pkg.services[serviceName] === '✖' ? (
                                            <span className="text-slate-300">—</span>
                                          ) : (
                                            <span className="text-xs font-medium">{pkg.services[serviceName]}</span>
                                          )}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                      <a
                        href="/contact#contact-form"
                        className="flex-1 inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#0b1f33] text-white rounded-xl font-bold text-lg hover:bg-[#1a2e44] transition-all shadow-lg hover:shadow-xl"
                      >
                        <span>Get Started</span>
                        <ArrowRight size={20} />
                      </a>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all"
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
                  Know More
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