import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

const TopNavBar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-sm border-b border-black/5 transition-all duration-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 lg:px-12 py-5 lg:py-6">
          <Link to="/" className="text-2xl lg:text-3xl font-extrabold tracking-tight text-green-900 dark:text-green-50 brand-font hover:opacity-80 transition-opacity">
            San Geronimo
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 lg:space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-manrope text-sm lg:text-base font-bold tracking-widest uppercase transition-all duration-300 pb-1 relative ${isActive(link.path)
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-green-900 dark:hover:text-green-200'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-700 dark:bg-green-400"
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 lg:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-xs uppercase tracking-widest border border-black/5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Globe size={16} className="text-green-600" />
              {i18n.language === 'es' ? 'ES' : 'EN'}
            </motion.button>
            
            <motion.a
              href="https://wa.me/+50498039586"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 101, 44, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-green-700 text-white border-2 border-green-700/20 px-8 py-3 rounded-full font-bold text-sm lg:text-base transition-all text-center"
            >
              {t('nav.whatsapp')}
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-extrabold tracking-tight uppercase ${
                    isActive(link.path) ? 'text-green-700 dark:text-green-400' : 'text-slate-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="https://wa.me/+50498039586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-between items-center bg-green-700 text-white p-6 rounded-2xl font-bold text-xl"
                >
                  {t('nav.whatsapp')}
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNavBar;
