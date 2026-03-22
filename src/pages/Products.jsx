import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BadgeCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const ProductSection = ({ title, description, features, images, reverse = false, id }) => {
  const { t } = useTranslation();
  
  return (
    <section id={id} className={`py-32 lg:py-48 relative overflow-hidden ${reverse ? 'bg-surface' : 'bg-surface-container-low'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-20 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-5 space-y-10 text-left ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="space-y-6">
              <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase">San Geronimo Quality</span>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">{title}</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed font-body">
                {description}
              </p>
            </div>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 text-on-surface font-semibold text-lg">
                  <CheckCircle2 className="text-primary shrink-0" size={28} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 101, 44, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-primary to-primary-container text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transition-all flex items-center gap-3"
            >
              {t('products.cta_contact')} <ArrowRight size={20} />
            </motion.button>
          </motion.div>
          
          <div className={`lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
            {images.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`space-y-4 ${index % 2 === 0 ? 'lg:translate-y-12' : ''}`}
              >
                <div className={`rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                  <img className="w-full h-full object-cover" src={img.src} alt={img.alt} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 overflow-hidden">
      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-8 mb-32 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase bg-secondary-container px-4 py-1 rounded-full">
              {t('business.agricultural_excellence')}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface leading-[1.05]">
              {t('products.hero_title').split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-primary">{t('products.hero_title').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-body opacity-90">
              {t('products.hero_subtitle')}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container shadow-2xl border-4 border-white dark:border-slate-800">
              <img className="w-full h-full object-cover" src={`${import.meta.env.BASE_URL}images/turmeric-experience.png`} alt="Vista de cultivos" />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-xs hidden lg:block border border-black/5"
            >
              <div className="flex items-center gap-5 mb-4">
                <BadgeCheck className="text-primary" size={48} />
                <span className="font-headline font-bold text-xl leading-tight">Elite Agricultural Standards</span>
              </div>
              <p className="text-sm text-on-surface-variant font-medium opacity-80 uppercase tracking-widest">{t('contact.offices')}</p>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Sections */}
      <ProductSection 
        id="roots"
        title={t('products.roots_title')}
        description={t('products.roots_desc')}
        features={[t('products.roots_feature1'), t('products.roots_feature2')]}
        images={[
          { src: `${import.meta.env.BASE_URL}images/turmeric-experience.png`, alt: "Turmeric" },
          { src: `${import.meta.env.BASE_URL}images/ginger-hero.png`, alt: "Ginger" }
        ]}
      />

      <ProductSection 
        id="vegetables"
        title={t('products.vegetables_title')}
        description={t('products.vegetables_desc')}
        features={[t('products.vegetables_feature1'), t('products.vegetables_feature2')]}
        images={[
          { src: `${import.meta.env.BASE_URL}images/tomatoes-chiles.png`, alt: "Tomatoes & Chilies" },
          { src: `${import.meta.env.BASE_URL}images/chiles.png`, alt: "Chilies Harvest" }
        ]}
        reverse={true}
      />

      <ProductSection 
        id="grass"
        title={t('products.grass_title')}
        description={t('products.grass_desc')}
        features={[t('products.grass_feature1'), t('products.grass_feature2')]}
        images={[
          { src: `${import.meta.env.BASE_URL}images/zoysia.png`, alt: "St. Augustine & Zoysia Grass" },
          { src: `${import.meta.env.BASE_URL}images/grass.png`, alt: "Zoysia Grass Landscaping" }
        ]}
      />

    </main>
  );
};

export default Products;
