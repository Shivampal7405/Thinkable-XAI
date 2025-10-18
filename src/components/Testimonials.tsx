"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  industry: string;
}

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      title: "CEO",
      company: "TechFlow Solutions",
      image: "/api/placeholder/80/80",
      quote: "The AI automation platform transformed our customer service operations. We reduced response times by 85% and increased customer satisfaction scores dramatically. The RAG pipelines are incredibly accurate and context-aware.",
      rating: 5,
      industry: "SaaS",
    },
    {
      name: "Marcus Rodriguez",
      title: "Operations Director",
      company: "Global Logistics Inc",
      image: "/api/placeholder/80/80",
      quote: "Implementing their workflow automation saved us 40 hours per week in manual data entry. The AI chatbots handle 70% of our customer inquiries automatically, and the quality is outstanding. Best investment we've made.",
      rating: 5,
      industry: "Logistics",
    },
    {
      name: "Dr. Emily Watson",
      title: "Head of Innovation",
      company: "MediCare Plus",
      image: "/api/placeholder/80/80",
      quote: "The enterprise security and compliance features gave us confidence to scale our AI initiatives. Their dedicated support team helped us customize solutions for healthcare regulations. Exceptional results across the board.",
      rating: 5,
      industry: "Healthcare",
    },
    {
      name: "James Park",
      title: "CTO",
      company: "FinTech Innovations",
      image: "/api/placeholder/80/80",
      quote: "The advanced analytics and predictive capabilities have revolutionized our risk assessment models. We've seen a 60% improvement in accuracy while reducing processing time by 75%. Game-changing technology.",
      rating: 5,
      industry: "Finance",
    },
    {
      name: "Lisa Thompson",
      title: "VP of Sales",
      company: "RetailMax",
      image: "/api/placeholder/80/80",
      quote: "Our sales team's productivity increased by 200% with the AI-powered lead scoring and automated follow-ups. The multi-channel integration works seamlessly across all our platforms. Highly recommend!",
      rating: 5,
      industry: "Retail",
    },
    {
      name: "David Kim",
      title: "Founder",
      company: "EduTech Academy",
      image: "/api/placeholder/80/80",
      quote: "The custom AI model training for our educational content has been phenomenal. Student engagement increased by 150% and learning outcomes improved significantly. The ROI has exceeded all expectations.",
      rating: 5,
      industry: "Education",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-indigo-500/3 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-500/30"
          >
            <Sparkles className="w-4 h-4" />
            Client Success Stories
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            See how businesses across industries are transforming operations with our AI-powered solutions.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-white/60 to-slate-50/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">
                    {testimonials[currentIndex].industry}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </button>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-indigo-600 scale-125"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
            <div className="text-slate-600 dark:text-slate-400">Happy Clients</div>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</div>
            <div className="text-slate-600 dark:text-slate-400">Uptime SLA</div>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">24/7</div>
            <div className="text-slate-600 dark:text-slate-400">Support</div>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">50+</div>
            <div className="text-slate-600 dark:text-slate-400">Industries</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
