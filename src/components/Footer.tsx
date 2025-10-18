"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { name: "AI Chatbots", href: "#features" },
        { name: "RAG Pipelines", href: "#features" },
        { name: "Workflow Automation", href: "#features" },
        { name: "Custom AI Models", href: "#pricing" },
        { name: "Enterprise Solutions", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#case-studies" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "Webinars", href: "#webinars" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR Compliance", href: "#gdpr" },
        { name: "Security", href: "#security" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/thinkable_xai", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/thinkable-xai", color: "hover:text-blue-600" },
    { name: "GitHub", icon: Github, href: "https://github.com/thinkable-xai", color: "hover:text-gray-300" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@thinkable-xai", color: "hover:text-red-500" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/thinkable_xai", color: "hover:text-pink-500" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@thinkable-xai.com", href: "mailto:hello@thinkable-xai.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "123 AI Innovation Drive, Tech Valley, CA 94043", href: "#" },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setNewsletterStatus('sending');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setNewsletterStatus('sent');
    setEmail("");

    setTimeout(() => setNewsletterStatus('idle'), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer
      ref={ref}
      className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-300 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-indigo-500/3 to-transparent rounded-full" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Thinkable XAi</h3>
                  <p className="text-sm text-slate-400">AI Solutions & Automation Experts</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Transforming businesses with cutting-edge AI technology. From intelligent chatbots to enterprise automation,
                we deliver solutions that drive real results.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <info.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm group-hover:text-indigo-300 transition-colors">
                      {info.text}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants} className="space-y-4">
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-indigo-300 transition-colors text-sm flex items-center gap-1 group"
                      >
                        {link.name}
                        {link.external && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-800"
          >
            <div className="max-w-md mx-auto lg:mx-0">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-400 text-sm mb-4">
                Get the latest AI insights, product updates, and industry trends delivered to your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'sending' || newsletterStatus === 'sent'}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    newsletterStatus === 'sent'
                      ? 'bg-green-600 text-white cursor-not-allowed'
                      : newsletterStatus === 'sending'
                      ? 'bg-indigo-500 text-white cursor-wait'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {newsletterStatus === 'sent' ? 'Subscribed!' :
                   newsletterStatus === 'sending' ? '...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>© {new Date().getFullYear()} Thinkable XAi. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline flex items-center gap-1">
                  Built with ❤️ using Next.js & Tailwind CSS
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400 mr-2">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-slate-800`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile copyright */}
            <div className="md:hidden mt-4 text-center text-xs text-slate-500 flex items-center justify-center gap-1">
              Built with ❤️using Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
