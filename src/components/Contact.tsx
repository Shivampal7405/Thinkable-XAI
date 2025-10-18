"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles, MessageSquare, Clock, Shield } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  service: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
}

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@thinkable-xai.com", "sales@thinkable-xai.com"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 AI Innovation Drive", "Tech Valley, CA 94043"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    "AI Chatbot Development",
    "RAG Pipeline Implementation",
    "Workflow Automation",
    "Custom AI Model Training",
    "Enterprise AI Solutions",
    "AI Consulting",
    "Other"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    if (!form.name.trim()) {
      setError('Please enter your name.');
      return false;
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!form.message.trim()) {
      setError('Please enter your message.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    try {
      setStatus('sending');

      // Simulate API call delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      const res = await fetch('/api/save-to-excel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Network error');

      setStatus('sent');
      setShowSuccessModal(true);
      setForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: ''
      });

      // Hide success modal after 5 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
        setStatus('idle');
      }, 5000);

    } catch (err) {
      setStatus('error');
      setError('Something went wrong, please try again.');
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
      id="contact"
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
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can drive growth and efficiency for your organization.
            Get a free consultation and custom proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Whether you're looking to automate workflows, implement AI chatbots, or build custom AI solutions,
                we're here to help you succeed.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300/50 transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-600 dark:text-slate-300 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">24h</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Response Time</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">100%</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Secure</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">Free</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Consultation</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none px-4 py-3 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full rounded-xl bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none px-4 py-3 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full rounded-xl bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none px-4 py-3 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full rounded-xl bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none px-4 py-3 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none px-4 py-3 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  className="w-full rounded-xl bg-white/80 dark:bg-slate-700/80 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none px-4 py-3 resize-none transition-all duration-300"
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full rounded-xl py-4 px-6 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
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
                    Message Sent Successfully!
                  </>
                ) : status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours with a personalized response.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Got it!
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
