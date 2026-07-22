'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  text: string;
  image: string;
  platform: 'Shopify' | 'Framer' | 'WordPress' | 'Squarespace';
}

const testimonials: Testimonial[] = [
      {
    id: 1,
    name: "Daniel Carter",
    position: "Founder",
    company: "Peak Nutrition",
    rating: 5,
    text: "The Shopify store exceeded every expectation. From the product pages to the checkout flow, everything feels premium and our customers have noticed the difference. Sales increased within the first few weeks after launch.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Daniel",
    platform: "Shopify",
  },
  {
    id: 2,
    name: "Olivia Bennett",
    position: "Creative Director",
    company: "Studio Eleven",
    rating: 5,
    text: "Our Framer website looks absolutely stunning. The animations are smooth, the layout is modern, and the entire experience perfectly represents our brand. It was a pleasure working together.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Michael",
    platform: "Framer",
  },
  {
    id: 3,
    name: "Michael Foster",
    position: "Marketing Manager",
    company: "Wellness Plus",
    rating: 5,
    text: "The WordPress website is incredibly fast, responsive, and easy for our team to manage. Communication throughout the project was excellent, and every deadline was met.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Olivia",
    platform: "WordPress",
  },
  {
    id: 4,
    name: "Sophia Turner",
    position: "Owner",
    company: "Glow Beauty Lounge",
    rating: 5,
    text: "Our Squarespace website finally reflects the quality of our salon. The booking experience is seamless, the design is elegant, and we've received countless compliments from clients.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Sophia",
    platform: "Squarespace",
  },
  {
    id: 5,
    name: "Ethan Brooks",
    position: "CEO",
    company: "Titan Gear",
    rating: 5,
    text: "Working together was effortless. Every feature we requested was delivered with care, and the final Shopify store performs exceptionally well on both desktop and mobile devices.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Ryan",
    platform: "Shopify",
  },
  {
    id: 6,
    name: "Grace Morgan",
    position: "Brand Manager",
    company: "Luna Creative",
    rating: 5,
    text: "The Framer website is visually impressive and incredibly interactive. Every animation feels purposeful, and the final result helped elevate our online presence.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Grace",
    platform: "Framer",
  },
  {
    id: 7,
    name: "Ryan Hughes",
    position: "Operations Director",
    company: "NorthStar Medical",
    rating: 5,
    text: "The new WordPress website is clean, professional, and easy for patients to navigate. The project was delivered on time, and the entire process was smooth from start to finish.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Chloe",
    platform: "WordPress",
  },
  {
    id: 8,
    name: "Chloe Evans",
    position: "Founder",
    company: "The Scent Social",
    rating: 5,
    text: "Our online perfume store feels luxurious and modern. The product pages are beautifully designed, and the shopping experience is exactly what we envisioned.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Ethan",
    platform: "Squarespace",
  },
];

const platformColors: Record<string, { bg: string; text: string }> = {
  Shopify: { bg: 'bg-green-100', text: 'text-green-700' },
  Framer: { bg: 'bg-purple-100', text: 'text-purple-700' },
  WordPress: { bg: 'bg-blue-100', text: 'text-blue-700' },
  Squarespace: { bg: 'bg-orange-100', text: 'text-orange-700' },
};

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const filteredTestimonials = testimonials;
  const totalPages = Math.max(1, Math.ceil(filteredTestimonials.length / itemsPerPage));

  // Responsive card display
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTestimonials = filteredTestimonials.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <motion.div
      className="flex gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 + i * 0.05 }}
          whileHover={{ scale: 1.2 }}
        >
          <Star
            size={18}
            className={`${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="relative w-full min-h-screen bg-white/40 backdrop-blur-2xl overflow-hidden py-20 px-4 md:px-8 lg:px-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh Gradient */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-bl from-purple-100 to-transparent rounded-full blur-3xl opacity-15" />
        
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200/50 backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl">💬</span>
            <span className="text-sm font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Clients Say
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Genuine client feedback highlighting professionalism, communication,
            design quality, and development expertise.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Large Decorative Quote Icon */}
          <motion.div
            className="absolute -left-8 top-8 opacity-5"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Quote size={200} className="text-blue-600" />
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <AnimatePresence mode="wait">
                {paginatedTestimonials.map((testimonial, idx) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.1,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                      }}
                      className="h-full"
                    >
                      <motion.div
                        className="relative h-full p-8 rounded-2xl bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 border border-white/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                        whileHover={{
                          scale: 1.03,
                          y: -8,
                          boxShadow:
                            '0 20px 40px rgba(59, 130, 246, 0.15), 0 0 80px rgba(59, 130, 246, 0.1)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        {/* Background Blur on Hover */}
                        <motion.div
                          className="absolute inset-0 bg-linear-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 rounded-2xl blur-xl transition-all duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Top Section */}
                          <div className="flex items-start justify-between mb-4">
                            <motion.div
                              whileHover={{ rotate: 12, scale: 1.1 }}
                              transition={{ type: 'spring', stiffness: 200 }}
                            >
                              <Quote size={32} className="text-blue-400/40" />
                            </motion.div>
                            <div
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                platformColors[testimonial.platform].bg
                              } ${platformColors[testimonial.platform].text}`}
                            >
                              {testimonial.platform}
                            </div>
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-gray-700 text-base leading-relaxed mb-6 grow italic">
                            "{testimonial.text}"
                          </p>

                          {/* Rating */}
                          <div className="mb-6">
                            <StarRating rating={testimonial.rating} />
                          </div>

                          {/* Client Info */}
                          <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                            <motion.div
                              className="relative w-14 h-14 rounded-full overflow-hidden shrink-0"
                              whileHover={{ scale: 1.15 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {testimonial.position} at {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-4">
              {/* Previous Button */}
              <motion.button
                type="button"
                onClick={prevPage}
                className="p-3 rounded-full bg-linear-to-br  from-blue-50 to-purple-50 border border-blue-200/50 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <motion.button
                    key={idx}
                    type="button"
                    onClick={() => goToPage(idx + 1)}
                    aria-label={`Go to page ${idx + 1}`}
                    aria-current={idx + 1 === currentPage ? 'page' : undefined}
                    className={`transition-all duration-300 ${
                      idx + 1 === currentPage
                        ? 'bg-linear-to-r from-blue-600 to-purple-600 w-8 h-3 rounded-full'
                        : 'bg-gray-300 w-3 h-3 rounded-full hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                type="button"
                onClick={nextPage}
                className="p-3 rounded-full bg-linear-to-br from-blue-50 to-purple-50 border border-blue-200/50 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 pt-16 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's build something amazing together.
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always excited to work on innovative projects and help bring
            your vision to life. Let's collaborate and create something
            extraordinary.
          </motion.p>
          <motion.button
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
              onClick={() => scrollToSection("contact")}
          >
            Get In Touch
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
