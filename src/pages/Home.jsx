import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-8 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="w-full h-full object-cover"
            src={`${import.meta.env.BASE_URL}images/ginger-hero.webp`}
            alt="Finca San Geronimo"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed/95 via-on-primary-fixed/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left lg:pr-12"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-6 py-2 rounded-full bg-primary/20 backdrop-blur-md text-primary-fixed font-bold text-xs uppercase tracking-[0.3em] border border-primary/20"
                >
                  {t('hero.legacy')}
                </motion.span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight drop-shadow-2xl">
                  {t('hero.title').split(' ').slice(0, -2).join(' ')} <br />
                  <span className="text-primary-fixed">{t('hero.title').split(' ').slice(-2).join(' ')}</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed font-body drop-shadow-md">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 30px -5px rgba(0, 101, 44, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/products')}
                  className="px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-bold text-xl transition-all flex items-center gap-4 shadow-2xl border border-white/10"
                >
                  {t('hero.cta_catalog')} <ArrowRight size={28} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/10 backdrop-blur-3xl shadow-2xl">
                <img className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}images/ginger_alternative.webp`} alt="Calidad San Geronimo" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-black/5 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-2xl text-primary font-bold text-3xl">35+</div>
                  <div className="text-sm font-bold uppercase tracking-widest leading-tight">{t('hero.years_experience').split(' ').slice(0, 1).join(' ')} <br />{t('hero.years_experience').split(' ').slice(1).join(' ')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Business Lines */}
      <section className="py-40 px-8 bg-surface relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12"
          >
            <div className="max-w-3xl text-left">
              <label className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{t('business.agricultural_excellence')}</label>
              <h2 className="text-5xl md:text-6xl font-extrabold text-on-surface mb-8 tracking-tight">{t('business.title')}</h2>
              <p className="text-on-surface-variant text-xl leading-relaxed border-l-4 border-primary pl-8">
                {t('business.subtitle')}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => navigate('/products')}
              className="group relative overflow-hidden rounded-2xl bg-surface-container-low h-[550px] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                src="/images/ginger-category.webp" 
                alt="Ginger" 
                width="512"
                height="512"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/40 to-transparent"></div>
              <div className="absolute bottom-0 p-12 space-y-6 text-left">
                <h3 className="text-4xl font-bold text-white">{t('business.ginger_title')}</h3>
                <p className="text-surface-variant/90 text-lg">{t('business.ginger_desc')}</p>
                <div className="flex items-center text-primary-fixed font-bold gap-3 pt-4 group-hover:gap-6 transition-all duration-300">
                  {t('business.explore_category')} <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() => navigate('/products')}
              className="group relative overflow-hidden rounded-2xl bg-surface-container-low h-[550px] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                src="/images/vegetables-category.webp" 
                alt="Vegetables" 
                width="512"
                height="512"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/40 to-transparent"></div>
              <div className="absolute bottom-0 p-12 space-y-6 text-left">
                <h3 className="text-4xl font-bold text-white">{t('business.vegetables_title')}</h3>
                <p className="text-surface-variant/90 text-lg">{t('business.vegetables_desc')}</p>
                <div className="flex items-center text-primary-fixed font-bold gap-3 pt-4 group-hover:gap-6 transition-all duration-300">
                  {t('business.explore_category')} <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => navigate('/products')}
              className="group relative overflow-hidden rounded-2xl bg-surface-container-low h-[550px] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 reveal lg:col-span-1 md:col-span-2 lg:col-auto"
            >
              <img 
                src="/images/garden-category.webp" 
                alt="Garden"
                width="512"
                height="512"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/40 to-transparent"></div>
              <div className="absolute bottom-0 p-12 space-y-6 text-left">
                <h3 className="text-4xl font-bold text-white">{t('business.grass_title')}</h3>
                <p className="text-surface-variant/90 text-lg">{t('business.grass_desc')}</p>
                <div className="flex items-center text-primary-fixed font-bold gap-3 pt-4 group-hover:gap-6 transition-all duration-300">
                  {t('business.view_catalog')} <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-32 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={`${import.meta.env.BASE_URL}images/pompilio-real.webp`} alt="Pompilio Sagastume - Legacy" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block"
            >
              <p className="font-headline font-bold text-primary text-2xl italic">{t('legacy.quote')}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8 text-left"
          >
            <label className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">{t('legacy.heritage')}</label>
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight">{t('legacy.title').split(':').slice(0, 1).join('')}: <br />{t('legacy.title').split(':').slice(1).join('')}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {t('legacy.desc')}
            </p>
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all group"
            >
              {t('legacy.read_more')}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
