"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Zap, Star, Crown, Sparkles } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  gradient: string;
  billingCycle: "monthly" | "annual";
}

export default function Pricing() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans: Plan[] = [
    {
      name: "Starter AI",
      price: billingCycle === "monthly" ? "$49" : "$490",
      originalPrice: billingCycle === "monthly" ? undefined : "$588",
      description: "Perfect for small businesses exploring AI automation.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      gradient: "from-yellow-500 to-orange-600",
      billingCycle: billingCycle,
      features: [
        "1 AI Chatbot",
        "Basic Workflow Automation",
        "1000 Monthly Interactions",
        "Email Support",
        "Basic Analytics Dashboard",
        "Standard Response Templates",
      ],
    },
    {
      name: "Professional AI",
      price: billingCycle === "monthly" ? "$149" : "$1490",
      originalPrice: billingCycle === "monthly" ? undefined : "$1788",
      description: "Ideal for growing businesses with advanced AI needs.",
      icon: <Star className="w-6 h-6 text-indigo-400" />,
      gradient: "from-indigo-500 to-purple-600",
      billingCycle: billingCycle,
      popular: true,
      features: [
        "3 AI Chatbots",
        "Advanced RAG Pipelines",
        "10000 Monthly Interactions",
        "Priority Support",
        "Advanced Analytics & Reporting",
        "Custom Training Data",
        "API Access",
        "Multi-channel Integration",
      ],
    },
    {
      name: "Enterprise AI",
      price: billingCycle === "monthly" ? "$499" : "$4990",
      originalPrice: billingCycle === "monthly" ? undefined : "$5988",
      description: "For large organizations requiring enterprise-grade AI solutions.",
      icon: <Crown className="w-6 h-6 text-purple-400" />,
      gradient: "from-purple-500 to-pink-600",
      billingCycle: billingCycle,
      features: [
        "Unlimited AI Chatbots",
        "Custom AI Model Training",
        "Unlimited Monthly Interactions",
        "Dedicated Account Manager",
        "White-label Solutions",
        "Custom Integrations",
        "24/7 Premium Support",
        "Enterprise Security & Compliance",
        "Advanced Analytics Suite",
        "Priority Feature Requests",
      ],
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
      id="pricing"
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
            AI-Powered Pricing
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Choose Your AI Transformation Plan
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Scale your business with our flexible AI solutions. Start small and grow with enterprise-grade features.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                Annual
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">
                Save 20%
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: plan.popular ? "0 25px 50px rgba(99, 102, 241, 0.25)" : "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                plan.popular
                  ? "bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-500/50 shadow-xl shadow-indigo-500/10"
                  : "bg-white/60 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full shadow-lg font-medium">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg`}>
                  {plan.icon}
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center mb-6">
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 self-end mb-2">
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>
                {plan.originalPrice && (
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-lg text-slate-500 line-through">
                      {plan.originalPrice}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Save ${(parseInt(plan.originalPrice.slice(1)) - parseInt(plan.price.slice(1))).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-indigo-500/25"
                    : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                }`}
              >
                Get Started Today
              </motion.button>
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
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
