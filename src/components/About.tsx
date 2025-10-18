"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Target, Award, TrendingUp, Brain, Zap, Globe, Heart } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
    { icon: <Target className="w-6 h-6" />, value: "98%", label: "Success Rate" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "AI Projects" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "300%", label: "Avg ROI" },
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technologies to solve complex business challenges."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Our solutions deliver rapid results without compromising on quality or security."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving businesses worldwide with scalable AI solutions that adapt to any market."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships, not just projects."
    }
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
      id="about"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-500/30"
          >
            <Users className="w-4 h-4" />
            About Thinkable XAi
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Pioneering the Future of <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            We're a team of AI experts, engineers, and innovators dedicated to transforming businesses
            through intelligent automation, machine learning, and cutting-edge AI technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Story
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Founded in 2023, Thinkable XAi emerged from a simple yet powerful idea: every business,
                regardless of size, deserves access to world-class AI solutions. What started as a small
                team of passionate AI researchers has grown into a full-service AI consultancy.
              </p>
              <p>
                We've helped over 500 businesses across industries implement AI solutions that drive
                real results. From automating complex workflows to building custom AI models, we turn
                cutting-edge technology into practical business advantages.
              </p>
              <p>
                Our approach combines technical expertise with deep business understanding, ensuring
                that every solution we deliver not only works but creates measurable value for our clients.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your AI Journey
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
                    <Brain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">AI Expertise</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Deep knowledge in ML, NLP, and computer vision</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl">
                    <Zap className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Fast Delivery</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Rapid prototyping and deployment</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                    <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Results Focused</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Measurable business impact</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl">
                    <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Client First</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Dedicated support and partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover-lift"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Our Core Values
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            These principles guide everything we do and shape how we deliver exceptional AI solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {value.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
