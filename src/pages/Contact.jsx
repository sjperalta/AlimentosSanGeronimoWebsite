import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-40 overflow-hidden">
      <section className="max-w-7xl mx-auto px-8 mb-24 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-end p-12 lg:p-20 shadow-2xl border-4 border-white dark:border-slate-800"
        >
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src={`${import.meta.env.BASE_URL}images/vegetable-variety.png`}
            alt="Hero de contacto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-5 py-2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs uppercase tracking-[0.3em] mb-6 shadow-xl"
            >
              Contact Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight"
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/80 text-xl lg:text-2xl max-w-xl leading-relaxed font-body"
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-5 space-y-12 text-left"
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">{t('contact.offices')}</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed opacity-80 decoration-primary/30 underline-offset-8">
              Regional coverage for wholesale and international distribution.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="bg-primary/10 p-5 rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white shadow-lg">
                <MapPin size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-2xl font-bold">{t('contact.honduras_name')}</h3>
                <p className="text-on-surface-variant font-bold text-sm uppercase tracking-widest opacity-60">Main Distribution Center</p>
                <a className="flex items-center gap-3 text-lg font-semibold text-on-surface hover:text-primary transition-colors mt-4" href={`mailto:${t('contact.email_main')}`}>
                  <Mail size={20} />
                  {t('contact.email_main')}
                </a>
                <a className="flex items-center gap-3 text-lg font-semibold text-on-surface hover:text-primary transition-colors mt-2" href={`tel:${t('contact.phone_hn').replace(/\s+/g, '')}`}>
                  <span className="text-primary font-bold">HN:</span>
                  {t('contact.phone_hn')}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-secondary/10 p-5 rounded-2xl text-secondary transition-colors group-hover:bg-secondary group-hover:text-white shadow-lg">
                <MapPin size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-2xl font-bold">{t('contact.guatemala_name')}</h3>
                <p className="text-on-surface-variant font-bold text-sm uppercase tracking-widest opacity-60">Operations & Exports</p>
                <a className="flex items-center gap-3 text-lg font-semibold text-on-surface hover:text-primary transition-colors mt-4" href={`mailto:${t('contact.email_ops')}`}>
                  <Mail size={20} />
                  {t('contact.email_ops')}
                </a>
                <a className="flex items-center gap-3 text-lg font-semibold text-on-surface hover:text-primary transition-colors mt-2" href={`tel:${t('contact.phone_gt').replace(/\s+/g, '')}`}>
                  <span className="text-secondary font-bold">GT:</span>
                  {t('contact.phone_gt')}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-8">
            <div className="group">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary mb-2 block opacity-70 group-hover:opacity-100 transition-opacity">
                {t('contact.sector_label')}
              </span>
              <p className="text-xl font-bold text-on-surface leading-tight transition-colors group-hover:text-primary">
                {t('contact.sector')}
              </p>
            </div>
            <div className="group">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary mb-2 block opacity-70 group-hover:opacity-100 transition-opacity">
                {t('contact.razon_social_label')}
              </span>
              <p className="text-xl font-bold text-on-surface leading-tight transition-colors group-hover:text-primary">
                {t('contact.corporate_name')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 lg:p-16 border-4 border-slate-100 dark:border-slate-800 shadow-2xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">{t('contact.form_title')}</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary ml-1">{t('contact.placeholder_name')}</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white p-5 rounded-2xl transition-all shadow-inner outline-none text-lg font-medium" placeholder={t('contact.placeholder_name')} type="text" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary ml-1">{t('contact.placeholder_email')}</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white p-5 rounded-2xl transition-all shadow-inner outline-none text-lg font-medium" placeholder={t('contact.placeholder_email')} type="email" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary ml-1">{t('contact.placeholder_message')}</label>
                <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white p-5 rounded-2xl transition-all shadow-inner outline-none text-lg font-medium resize-none" rows="5" placeholder={t('contact.placeholder_message')}></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 101, 44, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:w-auto px-14 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-bold text-xl transition-all flex items-center justify-center gap-4 shadow-xl shadow-primary/20"
              >
                {t('contact.send_btn')} <Send size={24} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
