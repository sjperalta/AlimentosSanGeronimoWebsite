import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { History, Handshake, Brain, Dumbbell } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-8 py-32 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 text-left"
          >
            <div className="inline-flex items-center gap-3 bg-tertiary-fixed text-on-tertiary-fixed px-6 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase shadow-lg shadow-tertiary/10">
              <History size={18} />
              {t('about.heritage')}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface leading-[1.05]">
              {t('about.hero_title').split(' ').slice(0, -2).join(' ')} <br />
              <span className="text-primary">{t('about.hero_title').split(' ').slice(-2).join(' ')}</span>.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-body opacity-90">
              {t('about.hero_subtitle')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Sgui4QROb47tR1kSQuGaGojMx2pyREqKRGkog6G3QfV36ZKpE9Nqei93YtmqV8HiEPEyVRRePqGqJrMLoAA3kdT1VkJOw_afqHJpOMflsyOAXnEJuv3DLm_v-v7es7WOKl3B6AaoccjBphv0h8WO9Ba_oHPaMEs-9gC7mE2wIoGkJEa3axBKdFpEatRM-RoceW5ZLTzKopHkJoi9DcxQbASGIF37mt7Fm5yWX6_GKfTm_6m5brlk52p1YcNEqZhPBXdIWsmREgx8" alt="Campos de cultivo" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-2xl max-w-sm hidden lg:block border border-black/5"
            >
              <p className="font-headline font-bold text-primary text-2xl italic leading-relaxed">
                {t('legacy.quote')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-container-low py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="aspect-[4/5] bg-surface rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <img
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110"
                    src={`${import.meta.env.BASE_URL}images/pompilio-animated.png`}
                    alt="Pompilio Sagastume - Illustration"
                  />
                </div>
                <div className="absolute top-8 -right-4 bg-secondary-container text-on-secondary-container p-3 px-4 rounded-xl rotate-3 shadow-2xl border border-white/20">
                  <p className="font-headline font-extrabold text-base">Pompilio Sagastume</p>
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mt-0.5">{t('about.founder_title')}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10 text-left"
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface leading-tight">
                {t('about.heart_title')}
              </h2>
              <div className="space-y-8 text-on-surface-variant text-xl leading-relaxed font-body">
                <p>{t('about.heart_desc1')}</p>
                <p>{t('about.heart_desc2')}</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-24 items-center pt-24 border-t border-outline-variant/30">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-10 text-left"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                {t('about.cristofer_role')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface leading-tight">
                {t('about.cristofer_title')}
              </h2>
              <div className="space-y-8 text-on-surface-variant text-xl leading-relaxed font-body">
                <p>{t('about.cristofer_desc')}</p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-outline-variant/30">
                <div className="text-center group">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Brain size={28} />
                  </motion.div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-primary">{t('about.values.vision')}</p>
                </div>
                <div className="text-center group">
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Handshake size={28} />
                  </motion.div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-primary">{t('about.values.honesty')}</p>
                </div>
                <div className="text-center group">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Dumbbell size={28} />
                  </motion.div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-primary">{t('about.values.discipline')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="aspect-[4/5] bg-surface rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <img
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                    src={`${import.meta.env.BASE_URL}images/cristofer-manager.jpeg`}
                    alt="Cristopher Sagastume"
                  />
                </div>
                <div className="absolute top-8 -right-4 bg-primary-container text-on-primary-container p-3 px-4 rounded-xl -rotate-3 shadow-2xl border border-white/20">
                  <p className="font-headline font-extrabold text-base">Cristopher Sagastume</p>
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mt-0.5">General Manager</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
