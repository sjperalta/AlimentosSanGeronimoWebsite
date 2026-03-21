import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            products: 'Products',
            about: 'About Us',
            contact: 'Contact',
            whatsapp: 'WhatsApp'
          },
          hero: {
            founded: 'Founded in 1985',
            legacy: 'Legacy Sagastume • Est. 1985',
            title: 'Excellence from the Earth',
            subtitle: 'Leading providers of high-quality Ginger, Turmeric, and Agricultural Solutions in Honduras and Guatemala.',
            cta_catalog: 'Explore Catalog',
            cta_contact: 'Contact Us',
            years_experience: 'Years of Experience'
          },
          business: {
            agricultural_excellence: 'Agricultural Excellence',
            title: 'Our Business Lines',
            subtitle: 'Agricultural diversity with the technical rigor your company needs to thrive in competitive markets.',
            ginger_title: 'Ginger & Turmeric',
            ginger_desc: 'Manually selected roots with high purity standards for the international market.',
            vegetables_title: 'Fresh Vegetables',
            vegetables_desc: 'Daily harvest guaranteeing maximum freshness and extended shelf life for distributors.',
            grass_title: 'Grass & Ornamentals',
            grass_desc: 'Resilient landscaping solutions for large-scale commercial projects.',
            explore_category: 'Explore Category',
            view_catalog: 'View Catalog'
          },
          legacy: {
            heritage: 'Our Heritage',
            title: 'Pompilio Sagastume: A Legacy of Integrity',
            desc: 'Founded on the vision of Don Pompilio Sagastume, Alimentos San Geronimo doesn\'t just produce food; it cultivates relationships of trust. What started as a small dream in the heart of Honduras is today a pillar of the regional agribusiness.',
            quote: '"The earth is not an inheritance from our fathers, it is a loan from our children."',
            read_more: 'Read more about our history',
            founder_role: 'Founder & Visionary'
          },
          about: {
            heritage: 'Our Heritage',
            hero_title: 'Cultivating a Vision of Legacy',
            hero_subtitle: 'Since our beginnings, Alimentos San Geronimo has been a benchmark of agricultural excellence, merging ancient traditions with precision technology.',
            heart_title: 'The Heart of San Geronimo',
            heart_desc1: 'Pompilio Sagastume didn\'t just see land; he saw a sacred responsibility. His life was a testimony that discipline and integrity are the only foundations of real growth.',
            heart_desc2: 'Every furrow plowed and every seed sown under his watch was done with a standard of excellence that defines us today. He taught us that respecting the land is respecting ourselves.',
            founder_title: 'Founder & Visionary',
            cristofer_title: 'Cristopher Sagastume',
            cristofer_role: 'General Manager • Continuing the Legacy',
            cristofer_desc: 'Leading the new generation with the same technical rigor and values of integrity that defined our beginnings.',
            values: {
              vision: 'Vision',
              honesty: 'Honesty',
              discipline: 'Discipline'
            }
          },
          products: {
            hero_title: 'Excellence from the Earth',
            hero_subtitle: 'Selected collections of Ginger, Turmeric and Fresh Tubers for the most demanding global markets.',
            cta_contact: 'Request Information',
            categories: {
              roots: 'Roots & Tubers',
              vegetables: 'Fresh Vegetables',
              ornamentals: 'Grass & Ornamentals'
            },
            roots_title: 'Ginger & Turmeric',
            roots_desc: 'Our flagship Ginger (Jengibre) and Turmeric (Cúrcuma) roots, cultivated with specialized techniques for maximum purity and potency.',
            roots_feature1: 'Manual selection and detailed cleaning',
            roots_feature2: 'Certified Elite Quality Standards',
            vegetables_title: 'Verduras',
            vegetables_desc: 'A premium harvest of fresh tomatoes, a variety of chilies, lemons, and other produce. An exciting and vibrant selection that brings the energy of the tropics directly to your distribution chain.',
            vegetables_feature1: 'Optimal nutrient density and flavor',
            vegetables_feature2: 'Sustainable greenhouse and open-field techniques',
            grass_title: 'St. Augustine & Zoysia Grass',
            grass_desc: 'High-density sod varieties like St. Augustine and Zoysia, designed for resilient and beautiful luxury landscaping.',
            grass_feature1: 'Weed-free, high-density uniform growth',
            grass_feature2: 'Drought-resistant tropical varieties'
          },
          contact: {
            title: 'Contact Our Experts',
            subtitle: 'Ready to take your agribusiness to the next level? Our regional team is here to assist you.',
            form_title: 'Send us a Message',
            offices: 'Strategic Locations',
            honduras: 'Honduras',
            guatemala: 'Guatemala',
            honduras_name: 'Honduras Headquarters',
            guatemala_name: 'Guatemala Distribution',
            email_main: 'info@sangeronimofoods.com',
            email_ops: 'Cristopher.sagastume@sangeronimofoods.com',
            phone_hn: '+504 9803-9586',
            phone_gt: '+502 3046-6351',
            corporate_name: 'Alimentos San Geronimo S.A. de S.R.L.',
            sector: 'Agroindustrial / Agricultural Marketing / Ornamental',
            sector_label: 'Business Sector',
            razon_social_label: 'Corporate Name',
            placeholder_name: 'Your Name',
            placeholder_email: 'your@email.com',
            placeholder_message: 'How can we help you?',
            send_btn: 'Send Inquiry'
          },
          footer: {
            follow_us: 'Follow Us',
            rights: 'All rights reserved.',
            description: 'Leading agricultural excellence through heritage and innovation since 1985.',
            explore: 'Explore',
            newsletter: 'Newsletter',
            privacy: 'Privacy Policy',
            cookies: 'Cookies'
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: 'Inicio',
            products: 'Productos',
            about: 'Nosotros',
            contact: 'Contacto',
            whatsapp: 'WhatsApp'
          },
          hero: {
            founded: 'Fundada en 1985',
            legacy: 'Legado Sagastume • Est. 1985',
            title: 'Excelencia de la Tierra',
            subtitle: 'Proveedores líderes de Jengibre, Cúrcuma y Soluciones Agrícolas de alta calidad en Honduras y Guatemala.',
            cta_catalog: 'Explorar Catálogo',
            cta_contact: 'Contactar',
            years_experience: 'Años de Experiencia'
          },
          business: {
            agricultural_excellence: 'Excelencia Agrícola',
            title: 'Nuestras Líneas de Negocio',
            subtitle: 'Diversidad agrícola con el rigor técnico que su empresa necesita para prosperar en mercados competitivos.',
            ginger_title: 'Jengibre y Cúrcuma',
            ginger_desc: 'Raíces seleccionadas manualmente con altos estándares de pureza para el mercado internacional.',
            vegetables_title: 'Vegetales Frescos',
            vegetables_desc: 'Cosecha del día garantizando frescura máxima y vida útil prolongada para distribuidores.',
            grass_title: 'Gramas y Ornamentales',
            grass_desc: 'Soluciones paisajísticas de alta resistencia para proyectos comerciales de gran escala.',
            explore_category: 'Explorar Categoría',
            view_catalog: 'Ver Catálogo'
          },
          legacy: {
            heritage: 'Nuestra Herencia',
            title: 'Pompilio Sagastume: Un Legado de Integridad',
            desc: 'Fundada sobre la visión de Don Pompilio Sagastume, Alimentos San Geronimo no solo produce alimentos; cultiva relaciones de confianza. Lo que comenzó como un pequeño sueño en el corazón de Honduras, hoy es un pilar de la agroindustria regional.',
            quote: '"La tierra no es una herencia de nuestros padres, es un préstamo de nuestros hijos."',
            read_more: 'Leer más sobre nuestra historia',
            founder_role: 'Fundador y Visionario'
          },
          about: {
            heritage: 'Nuestra Herencia',
            hero_title: 'Cultivando una Visión de Legado',
            hero_subtitle: 'Desde nuestros inicios, Alimentos San Geronimo ha sido un referente de excelencia agrícola, fusionando tradiciones ancestrales con tecnología de precisión.',
            heart_title: 'El Corazón de San Geronimo',
            heart_desc1: 'Pompilio Sagastume no solo vio tierra; vio una responsabilidad sagrada. Su vida fue un testimonio de que la disciplina e integridad son los únicos cimientos del crecimiento real.',
            heart_desc2: 'Cada surco arado y cada semilla sembrada bajo su mirada se hizo con un estándar de excelencia que hoy nos define. Él nos enseñó que respetar la tierra es respetarnos a nosotros mismos.',
            founder_title: 'Fundador y Visionario',
            cristofer_title: 'Cristopher Sagastume',
            cristofer_role: 'Gerente General • Continuando el Legado',
            cristofer_desc: 'Liderando la nueva generación con el mismo rigor técnico y valores de integridad que definieron nuestros inicios.',
            values: {
              vision: 'Visión',
              honesty: 'Honestidad',
              discipline: 'Disciplina'
            }
          },
          products: {
            hero_title: 'Excelencia de la Tierra',
            hero_subtitle: 'Colecciones seleccionadas de Jengibre, Cúrcuma y Tubérculos frescos para los mercados globales más exigentes.',
            cta_contact: 'Solicitar Información',
            categories: {
              roots: 'Raíces y Tubérculos',
              vegetables: 'Vegetales Frescos',
              ornamentals: 'Gramas y Ornamentales'
            },
            roots_title: 'Cúrcuma y Jengibre',
            roots_desc: 'Nuestros cultivos estrella de Jengibre y Cúrcuma, cultivados con técnicas especializadas para máxima pureza y potencia.',
            roots_feature1: 'Selección manual y limpieza detallada',
            roots_feature2: 'Estándares de Calidad de Élite',
            vegetables_title: 'Verduras',
            vegetables_desc: 'Cosecha fresca de tomates, chiles, limones y otros productos agrícolas. Una selección vibrante e interesante que lleva la energía del trópico directamente a su cadena de distribución.',
            vegetables_feature1: 'Densidad nutricional y sabor óptimos',
            vegetables_feature2: 'Técnicas sostenibles de invernadero y campo abierto',
            grass_title: 'Gramas San Agustín y Zoysia',
            grass_desc: 'Variedades de grama de alta densidad como San Agustín y Zoysia, diseñadas para proyectos de paisajismo de lujo.',
            grass_feature1: 'Crecimiento uniforme libre de malezas',
            grass_feature2: 'Variedades tropicales resistentes a sequías'
          },
          contact: {
            title: 'Contacte a Nuestros Expertos',
            subtitle: '¿Listo para llevar su agroindustria al siguiente nivel? Nuestro equipo regional está aquí para asistirle.',
            form_title: 'Envíenos un Mensaje',
            offices: 'Ubicaciones Estratégicas',
            honduras: 'Honduras',
            guatemala: 'Guatemala',
            honduras_name: 'Sede Honduras',
            guatemala_name: 'Distribución Guatemala',
            email_main: 'info@sangeronimofoods.com',
            email_ops: 'Cristopher.sagastume@sangeronimofoods.com',
            phone_hn: '+504 9803-9586',
            phone_gt: '+502 3046-6351',
            corporate_name: 'Alimentos San Geronimo S.A. de S.R.L.',
            sector: 'Agroindustrial / Comercialización Agrícola / Ornamental',
            sector_label: 'Sector Económico',
            razon_social_label: 'Razón Social',
            placeholder_name: 'Su Nombre',
            placeholder_email: 'su@email.com',
            placeholder_message: '¿En qué podemos ayudarle?',
            send_btn: 'Enviar Consulta'
          },
          footer: {
            follow_us: 'Síguenos',
            rights: 'Todos los derechos reservados.',
            description: 'Liderando la excelencia agrícola a través de la herencia e innovación desde 1985.',
            explore: 'Explorar',
            newsletter: 'Boletín',
            privacy: 'Política de Privacidad',
            cookies: 'Cookies'
          }
        }
      }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
