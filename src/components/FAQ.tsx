"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqItems: FAQItem[] = [
    {
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI solutions including custom AI chatbots, RAG pipelines, workflow automation, AI model training, and enterprise-grade AI implementations. Our services are tailored to businesses across all industries.",
      category: "services"
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on complexity. Simple chatbot deployments can take 2-4 weeks, while complex enterprise solutions may require 8-12 weeks. We'll provide a detailed timeline during your consultation.",
      category: "timeline"
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and technical support. Our enterprise clients also get dedicated account managers.",
      category: "support"
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in seamless integrations with existing CRM, ERP, marketing automation, and other business systems. Our API-first approach ensures compatibility with most modern platforms.",
      category: "integration"
    },
    {
      question: "What industries do you serve?",
      answer: "We serve businesses across all industries including healthcare, finance, retail, manufacturing, logistics, education, and professional services. Each solution is customized to industry-specific requirements and regulations.",
      category: "industries"
    },
    {
      question: "How secure is your AI technology?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including data encryption, GDPR compliance, SOC 2 certification, and regular security audits. Your data never leaves your infrastructure unless explicitly requested.",
      category: "security"
    },
    {
      question: "Can you train AI models on our proprietary data?",
      answer: "Yes, we offer custom AI model training services. We'll work with your data to create specialized models that understand your business context, terminology, and requirements for optimal performance.",
      category: "training"
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing including monthly subscriptions, annual plans with discounts, and custom enterprise pricing. Each plan includes different levels of features, support, and usage limits. Contact us for a personalized quote.",
      category: "pricing"
    },
    {
      question: "Do you offer free trials or demos?",
      answer: "Yes! We provide free consultations and demos for all our services. You can also start with our Starter plan to test our platform. We'll help you evaluate the ROI before making any commitment.",
      category: "trial"
    },
    {
      question: "What makes your AI solutions different from competitors?",
      answer: "Our solutions combine cutting-edge AI technology with deep industry expertise. We focus on practical, ROI-driven implementations rather than just technology. Our white-label solutions and custom integrations set us apart.",
      category: "differentiation"
    }
  ];

  const categories = [
    { id: "all", name: "All Questions", count: faqItems.length },
    { id: "services", name: "Services", count: faqItems.filter(item => item.category === "services").length },
    { id: "timeline", name: "Timeline", count: faqItems.filter(item => item.category === "timeline").length },
    { id: "support", name: "Support", count: faqItems.filter(item => item.category === "support").length },
    { id: "integration", name: "Integration", count: faqItems.filter(item => item.category === "integration").length },
    { id: "security", name: "Security", count: faqItems.filter(item => item.category === "security").length },
  ];

  const filteredItems = activeCategory === "all"
    ? faqItems
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
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
    hidden: { opacity: 0, y: 20 },
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
      id="faq"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-indigo-500/3 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Everything you need to know about our AI solutions, implementation process, and how we can help transform your business.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openItems.has(index) ? "auto" : 0,
                  opacity: openItems.has(index) ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-indigo-200/50 dark:border-indigo-800/50">
            <Sparkles className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our AI experts are here to help.
              Schedule a free consultation and get personalized answers to your specific needs.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Expert Help
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
