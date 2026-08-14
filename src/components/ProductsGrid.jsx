import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import SampleGalleryModal from './SampleGalleryModal';
import { Sparkles, Layers, Images, ArrowRight } from 'lucide-react';

const categories = {
  Hindi: ['सभी', 'सैनिटरी वेयर', 'सी.पी. फिटिंग्स', 'सैंडस्टोन दरवाज़े और खिड़की फ्रेम', 'टाइल्स', 'ग्रेनाइट'],
  English: ['All', 'Sanitary Ware', 'C.P. Fittings', 'Sandstone Door & Window Frames', 'Tiles', 'Granite']
};

const productsData = [
  {
    id: 1,
    title: { Hindi: 'सैनिटरी वेयर', English: 'Sanitary Ware' },
    category: { Hindi: 'सैनिटरी वेयर', English: 'Sanitary Ware' },
    images: [
      new URL('../assets/products/img10.png', import.meta.url).href,
      new URL('../assets/products/img9.png', import.meta.url).href,
      new URL('../assets/products/img21.png', import.meta.url).href,
      new URL('../assets/products/img5.png', import.meta.url).href,
    ],
    description: { 
      Hindi: 'आधुनिक बाथरूम के लिए बढ़िया सिरेमिक सीट, दीवार पर लगने वाले टॉयलेट और हाथ से बने वॉशबेसिन।',
      English: 'Premium ceramic water closets, wall-hung toilets, and handcrafted stone & ceramic washbasins for modern bathrooms.' 
    },
    features: { 
      Hindi: ['दाग-धब्बे न लगने वाली चमक', 'पानी बचाने वाला डुअल फ्लश', 'लाइफटाइम बेस्ट क्वालिटी'],
      English: ['Stain Guard Glaze Finish', 'Water Saving Dual Flush', 'Lifetime Best Quality'] 
    }
  },
  {
    id: 2,
    title: { Hindi: 'सी.पी. फिटिंग्स', English: 'C.P. Fittings' },
    category: { Hindi: 'सी.पी. फिटिंग्स', English: 'C.P. Fittings' },
    images: [
      new URL('../assets/products/img28.png', import.meta.url).href,
      new URL('../assets/products/img29.png', import.meta.url).href,
    ],
    description: { 
      Hindi: 'मजबूत क्रोम-पलेटेड पीतल के नल, डाइवर्टर, ऊपर लगने वाले शॉवर और आराम से पानी देने वाले फॉसेट।',
      English: 'High-durability chrome-plated brass taps, diverters, overhead showers, and health faucets with smooth water flow.' 
    },
    features: { 
      Hindi: ['कभी न खराब होने वाली पीतल बॉडी', 'शीशे जैसी चमकदार क्रोम पॉलिश', 'लाइफटाइम बेस्ट क्वालिटी'],
      English: ['Corrosion Resistant Brass Body', 'Mirror Chrome Polish Finish', 'Lifetime Best Quality'] 
    }
  },
  {
    id: 3,
    title: { Hindi: 'सैंडस्टोन दरवाज़े और खिड़की फ्रेम', English: 'Sandstone Door & Window Frames' },
    category: { Hindi: 'सैंडस्टोन दरवाज़े और खिड़की फ्रेम', English: 'Sandstone Door & Window Frames' },
    images: [
      new URL('../assets/products/img41.png', import.meta.url).href,
      new URL('../assets/products/img42.png', import.meta.url).href,
    ],
    description: { 
      Hindi: 'दीमक से सुरक्षित और भारी-भरकम नेचुरल सैंडस्टोन के दरवाज़े और खिड़की फ्रेम जो सालो-साल चलते हैं।',
      English: 'Termite-resistant, heavy-duty natural sandstone door and window frames engineered for lifetime structural durability.' 
    },
    features: { 
      Hindi: ['दीमक और मौसम से पूरी सुरक्षा', 'पसंद के अनुसार नक्काशी और कटिंग', 'लाइफटाइम बेस्ट क्वालिटी'],
      English: ['Termite Proof & Weather Resistant', 'Custom Carving & Precision Cutting', 'Lifetime Best Quality'] 
    }
  },
  {
    id: 4,
    title: { Hindi: 'टाइल्स', English: 'Tiles' },
    category: { Hindi: 'टाइल्स', English: 'Tiles' },
    images: [
      new URL('../assets/products/img1.png', import.meta.url).href,
      new URL('../assets/products/img32.png', import.meta.url).href,
      new URL('../assets/products/img33.png', import.meta.url).href,
      new URL('../assets/products/img34.png', import.meta.url).href,
    ],
    description: { 
      Hindi: 'मजबूत विट्रिफाइड टाइल्स, मार्बल डिज़ाइन वाली चमकदार टाइल्स और फिसलने से बचाने वाली बाथरूम टाइल्स।',
      English: 'Vitrified ceramic tiles, high-gloss marble texture tiles, and anti-skid bathroom & outdoor elevation tiles.' 
    },
    features: { 
      Hindi: ['स्क्रैच और दाग-धब्बों से सुरक्षित', 'फिसलन-रोधी बनावट के विकल्प', 'लाइफटाइम बेस्ट क्वालिटी'],
      English: ['Scratch & Stain Resistant', 'Anti-Skid Texture Options', 'Lifetime Best Quality'] 
    }
  },
  {
    id: 5,
    title: { Hindi: 'ग्रेनाइट', English: 'Granite' },
    category: { Hindi: 'ग्रेनाइट', English: 'Granite' },
    images: [
      new URL('../assets/products/img2.png', import.meta.url).href,
      new URL('../assets/products/img3.png', import.meta.url).href,
    ],
    description: { 
      Hindi: 'किचन स्लैब (काउंटरटॉप), सीढ़ियों और फर्श के लिए सबसे बेहतरीन और मजबूत नेचुरल ग्रेनाइट पत्थर।',
      English: 'Heavy-duty natural granite slabs suitable for kitchen countertops, staircase steps, thresholds, and flooring.' 
    },
    features: { 
      Hindi: ['गर्मी और वजन सहने की ताकत', 'शीशे जैसी चमकदार मिरर पॉलिश', 'लाइफटाइम बेस्ट क्वालिटी'],
      English: ['High Heat & Impact Resistance', 'Gloss Mirror Polish Finish', 'Lifetime Best Quality'] 
    }
  }
];

const ProductsGrid = ({ lang = 'Hindi' }) => {
  const [activeCategory, setActiveCategory] = useState(lang === 'Hindi' ? 'सभी' : 'All');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(lang === 'Hindi' ? 'सभी' : 'All');
  }, [lang]);

  const currentCategories = categories[lang];

  const filteredProducts = activeCategory === 'सभी' || activeCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category[lang] === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#F8FAFC] text-[#0B192C] relative overflow-hidden border-t border-slate-300/60 transition-colors duration-500">
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-sky-300/30 rounded-full blur-[150px] pointer-events-none" 
      />
      <div className="absolute -top-24 right-0 w-72 h-72 bg-slate-300/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-300/80 text-[#0B192C] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7] animate-pulse" />
            <span>{lang === 'Hindi' ? 'शोरूम कैटलॉग और लाइव शोकेस' : 'Showroom Catalog & Live Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B192C] tracking-tight leading-tight">
            {lang === 'Hindi' ? (
              <>हमारी विशेष <span className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] bg-clip-text text-transparent">स्टोन, टाइल्स और सैनिटरी</span> रेंज</>
            ) : (
              <>Our Specialty <span className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] bg-clip-text text-transparent">Stone, Tiles & Sanitary</span> Range</>
            )}
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
            {lang === 'Hindi' 
              ? 'होलसेल दाम और लाइव देखने के लिए शोरूम पर आएं। अपनी पसंद का सामान देखने के लिए नीचे दिए गए बटन पर क्लिक करें।' 
              : 'Showroom gallery display for direct wholesale rates. Explore categories or open our full sample collection below.'}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => setIsGalleryOpen(true)}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white shadow-xl shadow-[#0284C7]/20 flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer border border-sky-300/30 group"
        >
          <div className="flex items-center space-x-4 sm:space-x-5 text-center sm:text-left">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shrink-0 group-hover:scale-110 transition-transform">
              <Images className="w-8 h-8 text-sky-300" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block mb-1">
                {lang === 'Hindi' ? 'गोदाम और शोरूम की फोटो गैलरी' : 'Direct Inventory Gallery'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                {lang === 'Hindi' ? '40+ से ज्यादा लाइव डिज़ाइन और नमूने देखें' : 'View 40+ Live Showroom & Yard Samples'}
              </h3>
              <p className="text-xs text-slate-200 font-medium mt-1">
                {lang === 'Hindi' 
                  ? 'मार्बल बेसिन, ग्रेनाइट स्लैब, टाइल्स और बाथरूम फिटिंग्स की असली तस्वीरें देखें।' 
                  : 'Real photos of marble basins, granite slabs, tiles racks, and bathroom fittings.'}
              </p>
            </div>
          </div>

          <button className="inline-flex items-center space-x-2 bg-white text-[#0B192C] font-extrabold px-6 py-3 rounded-2xl text-xs uppercase tracking-wider shadow-md shrink-0 group-hover:bg-sky-50 transition-colors pointer-events-none">
            <span>{lang === 'Hindi' ? 'गैलरी खोलें' : 'Explore Samples'}</span>
            <ArrowRight className="w-4 h-4 text-[#0284C7]" />
          </button>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {currentCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-black tracking-wide transition-all duration-300 cursor-pointer overflow-hidden ${
                activeCategory === cat
                  ? 'text-white shadow-lg shadow-[#0284C7]/20'
                  : 'text-[#0B192C] bg-white/95 border border-slate-200 hover:text-[#0284C7] hover:border-[#0284C7]/40 shadow-xs'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-1.5">
                {(cat === 'सभी' || cat === 'All') && <Layers className="w-3.5 h-3.5 inline-block" />}
                <span>{cat}</span>
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard
                  title={product.title}
                  category={product.category}
                  description={product.description}
                  features={product.features}
                  images={product.images}
                  lang={lang}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <SampleGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        lang={lang}
      />

    </section>
  );
};

export default ProductsGrid;