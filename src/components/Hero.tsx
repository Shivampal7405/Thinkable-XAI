"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [videoPlaying, setVideoPlaying] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3),transparent_50%)] animate-pulse-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Video Background (Optional) */}
      {videoPlaying && (
        <div className="absolute inset-0 z-10">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-20"
            onLoadedData={() => setVideoPlaying(true)}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-500/30"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Business Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-indigo-400">with AI Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl"
            >
              Harness the power of cutting-edge AI solutions, chatbots, RAG pipelines, and intelligent automation to streamline operations and drive unprecedented growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("features")}
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Trusted by 500+ Companies
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                99.9% Uptime Guarantee
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Enterprise Security
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Visual */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center"
                    >
                      <Sparkles className="w-16 h-16 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI in Action</h3>
                    <p className="text-indigo-200">Intelligent Automation</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-bold text-sm">AI</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-white font-bold text-xs">ML</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
