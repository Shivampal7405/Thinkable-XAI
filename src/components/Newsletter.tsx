"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, CheckCircle, AlertCircle, Sparkles, TrendingUp, BookOpen, Zap } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState("");

  const benefits = [
    {
      icon: TrendingUp,
      title: "Latest AI Trends",
      description: "Stay ahead with weekly insights on AI advancements and industry trends."
    },
    {
      icon: BookOpen,
      title: "Expert Guides",
      description: "Get access to exclusive guides, case studies, and best practices."
    },
    {
      icon: Zap,
      title: "Product Updates",
      description: "Be the first to know about new features and platform enhancements."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to subscribe');
      }

      setStatus('sent');
      setEmail("");

      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setError("Something went wrong. Please try again.");
    }
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
      id="newsletter"
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-500/30"
          >
            <Mail className="w-4 h-4" />
            Stay Connected
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Get AI Insights Delivered to Your Inbox
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of professionals who stay ahead of the AI curve with our weekly newsletter.
            No spam, just valuable insights and updates.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <Sparkles className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Get weekly AI insights, exclusive content, and early access to new features.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all duration-300 text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === 'sent'
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : status === 'sending'
                      ? 'bg-indigo-400 text-white cursor-wait'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {status === 'sent' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Subscribed!
                    </>
                  ) : status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </motion.div>
              )}

              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We respect your privacy. Unsubscribe at any time.
                  <br />
                  <span className="text-xs">
                    By subscribing, you agree to our{" "}
                    <a href="#privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#terms" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      Terms of Service
                    </a>
                    .
                  </span>
                </p>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">15K+</div>
            <div className="text-slate-600 dark:text-slate-400">Subscribers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">200+</div>
            <div className="text-slate-600 dark:text-slate-400">Weekly Reads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">95%</div>
            <div className="text-slate-600 dark:text-slate-400">Open Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">4.9/5</div>
            <div className="text-slate-600 dark:text-slate-400">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
