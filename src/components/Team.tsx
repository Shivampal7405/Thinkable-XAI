"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter, Github, Mail, Sparkles, Award, Users, Brain } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  achievements: string[];
}

export default function Team() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief AI Officer & Co-Founder",
      bio: "Former Google AI researcher with 10+ years in machine learning. PhD in Computer Science from Stanford. Led AI initiatives at Fortune 500 companies.",
      image: "/api/placeholder/300/300",
      expertise: ["Machine Learning", "NLP", "AI Strategy", "Research"],
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen_ai",
        email: "sarah@thinkable-xai.com"
      },
      achievements: [
        "Published 50+ papers in top AI conferences",
        "Former Google AI researcher",
        "PhD Stanford University",
        "Led AI transformation at 3 Fortune 500 companies"
      ]
    },
    {
      name: "Marcus Rodriguez",
      title: "VP of Engineering",
      bio: "Full-stack engineering leader with expertise in scalable AI systems. Previously at Meta building large-scale ML infrastructure.",
      image: "/api/placeholder/300/300",
      expertise: ["System Architecture", "MLOps", "Cloud Platforms", "Engineering Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        github: "https://github.com/marcusrodriguez",
        email: "marcus@thinkable-xai.com"
      },
      achievements: [
        "Built ML infrastructure serving 1B+ users at Meta",
        "Led engineering teams of 50+ developers",
        "AWS Machine Learning Hero",
        "Open source contributor to TensorFlow"
      ]
    },
    {
      name: "Dr. Emily Watson",
      title: "Head of AI Research",
      bio: "AI ethics and responsible AI expert. Leads our research initiatives in trustworthy AI and bias mitigation. Former MIT professor.",
      image: "/api/placeholder/300/300",
      expertise: ["AI Ethics", "Responsible AI", "Bias Mitigation", "Research"],
      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        twitter: "https://twitter.com/emilywatson_ai",
        email: "emily@thinkable-xai.com"
      },
      achievements: [
        "Former MIT professor",
        "Authored book on AI Ethics",
        "Led AI governance at major tech company",
        "Keynote speaker at AI conferences worldwide"
      ]
    },
    {
      name: "James Park",
      title: "Chief Technology Officer",
      bio: "Enterprise software veteran with deep expertise in AI product development. Previously CTO at leading SaaS companies.",
      image: "/api/placeholder/300/300",
      expertise: ["Product Strategy", "Enterprise Software", "AI Products", "Technical Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/jamespark",
        github: "https://github.com/jamespark",
        email: "james@thinkable-xai.com"
      },
      achievements: [
        "Scaled AI products to $100M+ ARR",
        "Former CTO at 2 SaaS unicorns",
        "Patented 15+ AI technologies",
        "Y Combinator mentor"
      ]
    },
    {
      name: "Lisa Thompson",
      title: "VP of Customer Success",
      bio: "Customer experience expert focused on AI adoption. Helps enterprises successfully implement and scale AI solutions.",
      image: "/api/placeholder/300/300",
      expertise: ["Customer Success", "AI Adoption", "Change Management", "Enterprise Sales"],
      social: {
        linkedin: "https://linkedin.com/in/lisathompson",
        twitter: "https://twitter.com/lisathompson_ai",
        email: "lisa@thinkable-xai.com"
      },
      achievements: [
        "Achieved 98% customer retention rate",
        "Led AI transformation for 200+ enterprises",
        "Former Gartner analyst",
        "Published research on AI adoption"
      ]
    },
    {
      name: "David Kim",
      title: "Head of Data Science",
      bio: "Data science leader specializing in production ML systems. Expert in model deployment, monitoring, and optimization.",
      image: "/api/placeholder/300/300",
      expertise: ["Data Science", "Model Deployment", "ML Monitoring", "Performance Optimization"],
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        github: "https://github.com/davidkim",
        email: "david@thinkable-xai.com"
      },
      achievements: [
        "Built ML systems processing 10TB+ daily",
        "Kaggle Grandmaster",
        "PhD in Statistics from Berkeley",
        "Led data science at major fintech company"
      ]
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "AI Experts" },
    { icon: Brain, value: "100+", label: "AI Projects Delivered" },
    { icon: Award, value: "25+", label: "Industry Awards" },
    { icon: Sparkles, value: "10+", label: "Years Experience" }
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
      id="team"
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
            <Users className="w-4 h-4" />
            Meet Our Team
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            AI Experts Driving Innovation
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our world-class team combines deep AI expertise with real-world business experience to deliver
            cutting-edge solutions that drive measurable results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {member.title}
                </p>
              </div>

              {/* Bio */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Expertise */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {member.achievements.slice(0, 2).map((achievement, i) => (
                    <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </a>
                )}
              </div>
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
            <Users className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented AI researchers, engineers, and business experts to join our mission
              of democratizing AI for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </button>
              <a
                href="mailto:careers@thinkable-xai.com"
                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                Send Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
