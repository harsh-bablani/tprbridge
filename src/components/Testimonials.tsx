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
    description: 'Dedicated service to NRI families',
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
    <section className="relative py-28 sm:py-40 bg-gradient-to-b from-white/50 via-[#fef9f8]/70 to-[#f0f5fb]/70 overflow-hidden px-4 sm:px-6">
      {/* Premium luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      
      {/* Luxury Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#fde2e2] to-[#c53030]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />
        <motion.div
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#ddebff] to-[#0b1f33]/15 rounded-full mix-blend-multiply filter blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-24"
        >
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              className="h-1.5 w-24 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] mx-auto rounded-full shadow-lg shadow-[#c53030]/50"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-6xl md:text-7xl font-extrabold text-[#0b1f33] mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#7a0b0b]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              5,000+ Families
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real stories from NRI families who have made Tipping Bridge their trusted partner
          </motion.p>
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
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4 } }}
              className="group relative"
            >
              {/* Luxury Card Container */}
              <div className="relative h-full rounded-3xl p-[2px] bg-gradient-to-br from-[#c53030]/20 via-[#7a0b0b]/20 to-[#0b1f33]/20 transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(197,48,48,0.4)] group-hover:p-[3px]">
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c53030] via-[#e63946] to-[#c53030] opacity-0 group-hover:opacity-100 rounded-3xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
                
                <div className="relative h-full bg-gradient-to-br from-white/97 to-white/93 backdrop-blur-xl rounded-[calc(1.5rem-2px)] p-10 shadow-2xl group-hover:shadow-[0_50px_100px_-20px_rgba(197,48,48,0.5)] transition-all duration-500 border border-gradient-to-br from-white/70 to-white/50 overflow-hidden">
                  {/* Premium Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  <div className="flex items-start gap-6 mb-8 relative z-10">
                    <motion.div
                      className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-gradient-to-r from-[#c53030] to-[#7a0b0b] shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#c53030]/20 to-transparent" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold text-[#0b1f33] mb-2 group-hover:text-[#c53030] transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-slate-500 text-base font-medium mb-3">{testimonial.location}</p>
                      <motion.div
                        className="flex gap-1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      >
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <motion.div
                            key={`star-${testimonial.id}-${i}`}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.4 + i * 0.1, type: "spring" }}
                          >
                            <Star
                              size={20}
                              className="fill-[#f97373] text-[#f97373] drop-shadow-lg"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Quote size={40} className="text-[#fbd5d5] flex-shrink-0 drop-shadow-lg" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                  
                  <motion.p
                    className="text-slate-700 leading-relaxed text-lg font-medium italic relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#f2dcdc] rounded-br-3xl opacity-50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

