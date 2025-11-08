import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh & Priya Sharma',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    quote: 'Tipping Bridge has been our lifeline. They managed our property in Mumbai while we were in the US, and everything was handled flawlessly. True professionals who care.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amit & Sunita Patel',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    quote: 'From visa documentation to managing our parents\' healthcare, they\'ve been incredible. We can focus on our lives abroad knowing everything at home is in good hands.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram & Anjali Reddy',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    quote: 'The peace of mind they provide is priceless. They handled complex legal matters and property transactions with expertise and transparency. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ravi & Meera Kumar',
    location: 'Toronto, Canada',
    image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80',
    quote: 'Their team became like family. They understand the unique challenges NRIs face and provide solutions that actually work. Exceptional service throughout.',
    rating: 5,
  },
];

const familyImages = [
  {
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
    alt: 'Happy family in India',
    title: 'Connecting Families Across Continents',
    description: 'Bringing peace of mind to NRI families worldwide',
  },
  {
    src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80',
    alt: 'Family gathering',
    title: 'Your Trusted Partner in India',
    description: '15+ years of dedicated service to NRI families',
  },
  {
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80',
    alt: 'Family celebration',
    title: 'Building Bridges, Strengthening Bonds',
    description: 'Making your connection to India seamless',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    alt: 'Multi-generational family',
    title: 'Caring for What Matters Most',
    description: 'Your family, our priority',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#fef7f7] to-white overflow-hidden px-4 sm:px-6">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fde2e2] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#ddebff] rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-[#c53030] mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0b1f33] mb-6 tracking-tight">
            Trusted by <span className="text-[#c53030]">5,000+ Families</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real stories from NRI families who have made Tipping Bridge their trusted partner
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 h-[360px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <ImageCarousel images={familyImages} autoPlay={true} interval={5000} />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f2dcdc]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-[#fde4e4]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0b1f33] mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-500 text-sm">{testimonial.location}</p>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={`star-${testimonial.id}-${i}`}
                        size={16}
                        className="fill-[#f97373] text-[#f97373]"
                      />
                    ))}
                  </div>
                </div>
                <Quote size={32} className="text-[#fbd5d5] flex-shrink-0" />
              </div>
              <p className="text-slate-700 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

