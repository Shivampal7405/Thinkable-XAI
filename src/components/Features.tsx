"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bot,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Users,
  MessageSquare,
  Database,
  Cpu,
  Sparkles
} from "lucide-react";

export default function Features() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-400" />,
      title: "Intelligent Chatbots",
      description: "Deploy AI-powered chatbots that understand context, learn from interactions, and provide 24/7 customer support.",
      gradient: "from-indigo-500 to-purple-600",
      delay: 0.1,
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "RAG Pipelines",
      description: "Implement Retrieval-Augmented Generation systems for accurate, context-aware responses using your proprietary data.",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.2,
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Workflow Automation",
      description: "Streamline operations with intelligent automation that learns and adapts to your business processes.",
      gradient: "from-yellow-500 to-orange-600",
      delay: 0.3,
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.",
      gradient: "from-green-500 to-teal-600",
      delay: 0.4,
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Advanced Analytics",
      description: "Gain deep insights with AI-driven analytics that predict trends and optimize performance automatically.",
      gradient: "from-blue-500 to-cyan-600",
      delay: 0.5,
    },
    {
      icon: <Database className="w-8 h-8 text-red-400" />,
      title: "Smart Data Processing",
      description: "Process and analyze large datasets with machine learning algorithms for actionable business intelligence.",
      gradient: "from-red-500 to-rose-600",
      delay: 0.6,
    },
  ];

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
      id="features"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            AI-Powered Features
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Cutting-Edge AI Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations,
            enhance customer experiences, and drive unprecedented growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
              }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon Container */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                  {feature.icon}
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-3xl`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
