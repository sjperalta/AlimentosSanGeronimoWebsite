import React from 'react';
import { Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-inter text-sm leading-relaxed transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-xl font-bold text-green-900 dark:text-green-100 brand-font">
            Alimentos San Geronimo
          </div>
          <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Facebook" className="p-3 rounded-full bg-white dark:bg-slate-900 border border-outline/10 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="p-3 rounded-full bg-white dark:bg-slate-900 border border-outline/10 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Linkedin" className="p-3 rounded-full bg-white dark:bg-slate-900 border border-outline/10 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 uppercase tracking-widest text-xs">{t('contact.offices')}</h3>
          <a className="text-slate-700 dark:text-slate-400 hover:text-primary transition-colors" href="/contact">{t('contact.honduras')}</a>
          <a className="text-slate-700 dark:text-slate-400 hover:text-primary transition-colors" href="/contact">{t('contact.guatemala')}</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 uppercase tracking-widest text-xs">{t('footer.explore')}</h3>
          <a className="text-slate-700 dark:text-slate-400 hover:text-primary transition-colors" href="/products">{t('nav.products')}</a>
          <a className="text-slate-700 dark:text-slate-400 hover:text-primary transition-colors" href="/about">{t('nav.about')}</a>
          <a className="text-slate-700 dark:text-slate-400 hover:text-primary transition-colors" href="/contact">{t('nav.contact')}</a>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 uppercase tracking-widest text-xs">{t('footer.newsletter')}</h3>
          <div className="flex">
            <input 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-l-lg w-full focus:ring-1 focus:ring-green-500 text-sm px-4 py-3 outline-none transition-all" 
              placeholder="Email" 
              type="email"
              aria-label="Email address for newsletter"
            />
            <button aria-label="Send Newsletter" className="bg-green-800 text-white px-6 rounded-r-lg hover:bg-green-700 transition-colors flex items-center justify-center">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 dark:text-slate-400 text-xs">
        <div>© {new Date().getFullYear()} {t('contact.corporate_name')}. {t('footer.rights')}</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest font-bold text-slate-700 dark:text-slate-400">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest font-bold text-slate-700 dark:text-slate-400">{t('footer.cookies')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
