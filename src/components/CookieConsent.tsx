"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setHasConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setHasConsented(true);
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setHasConsented(true);
    setIsVisible(false);
  };

  if (hasConsented) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  We use cookies
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm"
              >
                Accept All
              </button>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
