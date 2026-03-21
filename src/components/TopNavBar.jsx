import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const TopNavBar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-sm border-b border-black/5 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 lg:px-12 py-5 lg:py-6">
        <Link to="/" className="text-2xl lg:text-3xl font-extrabold tracking-tight text-green-900 dark:text-green-50 brand-font hover:opacity-80 transition-opacity">
          San Geronimo
        </Link>
        <div className="hidden md:flex items-center space-x-10 lg:space-x-14">
          {[
            { name: t('nav.home'), path: '/' },
            { name: t('nav.products'), path: '/products' },
            { name: t('nav.about'), path: '/about' },
            { name: t('nav.contact'), path: '/contact' },
          ].map((link) => (
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
        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface font-bold text-xs uppercase tracking-widest border border-outline/10 hover:bg-surface-container-highest transition-colors"
          >
            <Globe size={16} className="text-primary" />
            {i18n.language === 'es' ? 'ES' : 'EN'}
          </motion.button>
          <motion.a
            href="https://wa.me/+50498039586"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 101, 44, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary text-white border-2 border-primary/20 px-8 py-3 rounded-full font-bold text-sm lg:text-base transition-all text-center"
          >
            {t('nav.whatsapp')}
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
