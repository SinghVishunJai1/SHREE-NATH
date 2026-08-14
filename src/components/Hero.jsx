import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ShieldCheck, ArrowRight, Sparkles, Store, CheckCircle2, Gem } from 'lucide-react';

const heroShowcaseData = {
  Hindi: [
    {
      title: 'प्राकृतिक सैंडस्टोन चौखट',
      subtitle: 'दीमक-रोधी और मौसम-प्रतिरोधी स्टोन फ्रेम',
      tag: 'प्रमुख संग्रह',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
      stat1: '100% प्राकृतिक क्वारी स्टोन',
      stat2: 'लाइफटाइम स्ट्रक्चरल गारंटी'
    },
    {
      title: 'डिज़ाइनर सैनिटरी',
      subtitle: 'लक्ज़री स्टोन वॉशबेसिन और वॉल-हंग टॉयलेट',
      tag: 'प्रीमियम फिटिंग',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      stat1: 'स्टेन गार्ड ग्लेज फिनिश',
      stat2: 'वॉटर-सेविंग डुअल फ्लश'
    },
    {
      title: 'पॉलिश ग्रेनाइट और टाइल्स',
      subtitle: 'काउंटरटॉप्स के लिए हाई-ग्लोस भारी-भरकम स्लैब',
      tag: 'शोरूम स्पेशल',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      stat1: 'हाई हीट और स्क्रैच प्रूफ',
      stat2: 'मिरर पॉलिश फिनिश'
    }
  ],
  English: [
    {
      title: 'Natural Sandstone Chokhat',
      subtitle: 'Termite-Proof & Weather-Resistant Stone Frames',
      tag: 'Flagship Collection',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
      stat1: '100% Natural Quarry Stone',
      stat2: 'Lifetime Structural Guarantee'
    },
    {
      title: 'Designer Sanitary',
      subtitle: 'Luxury Stone Washbasins & Wall-Hung Closets',
      tag: 'Premium Fitting',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      stat1: 'Stain Guard Glaze Finish',
      stat2: 'Water-Saving Dual Flush'
    },
    {
      title: 'Polished Granite & Tiles',
      subtitle: 'High-Gloss Heavy Duty Slabs for Countertops',
      tag: 'Showroom Special',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      stat1: 'High Heat & Scratch Proof',
      stat2: 'Mirror Polish Finish'
    }
  ]
};

const Hero = ({ lang = 'Hindi' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroShowcase = heroShowcaseData[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroShowcase.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroShowcase.length]);

  const activeItem = heroShowcase[currentIndex];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="relative bg-[#F8FAFC] text-[#0B192C] overflow-hidden py-20 lg:py-32 transition-colors duration-500">
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sky-300/40 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-10 w-[380px] h-[380px] bg-slate-300/40 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-white/90 border border-slate-300/80 text-[#0B192C] px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest backdrop-blur-md shadow-xs cursor-default"
            >
              <Sparkles className="w-4 h-4 text-[#0284C7] animate-pulse" />
              <span>{lang === 'Hindi' ? 'रॉयल क्वालिटी स्टोन्स और सैनिटरी गैलरी' : 'Royal Quality Stones & Sanitary Gallery'}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B192C] leading-[1.15]">
              {lang === 'Hindi' ? (
                <>सैंडस्टोन और सैनिटरी के साथ <br className="hidden sm:inline" />अपने स्थान को <span className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] bg-clip-text text-transparent">बदलें</span></>
              ) : (
                <>Transform Your Space With <br className="hidden sm:inline" /><span className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] bg-clip-text text-transparent">Sandstone</span> & <span className="bg-gradient-to-r from-[#0B192C] via-[#0284C7] to-[#1E3E62] bg-clip-text text-transparent">Sanitary</span></>
              )}
            </h1>

            <p className="text-[#475569] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
              {lang === 'Hindi'
                ? 'सैंडस्टोन डोर फ्रेम (चौखट), कस्टम वॉशबेसिन, टाइल्स, ग्रेनाइट और आधुनिक बाथरूम फिटिंग के लिए प्रीमियर फिजिकल शोरूम गंतव्य।'
                : 'Premier physical showroom destination for Sandstone Door Frames (Chokhat), Custom Washbasins, Tiles, Granite, and Modern Bathroom Fittings.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] hover:brightness-110 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-[#0284C7]/20 transition-all cursor-pointer"
              >
                <span>{lang === 'Hindi' ? 'शोरूम पर आएं / मूल्य कोट' : 'Visit Showroom / Quote'}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#products"
                className="inline-flex items-center justify-center space-x-2 bg-white/95 hover:bg-slate-100 text-[#0B192C] border border-slate-300 px-8 py-4 rounded-xl font-bold backdrop-blur-md shadow-xs transition-all cursor-pointer"
              >
                <Store className="w-5 h-5 text-[#0284C7]" />
                <span>{lang === 'Hindi' ? 'उत्पाद देखें' : 'Explore Showcase'}</span>
              </motion.a>
            </div>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0" />
                <span className="text-xs sm:text-sm text-[#0B192C] font-bold">{lang === 'Hindi' ? '100% प्राकृतिक पत्थर' : '100% Natural Stone'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0" />
                <span className="text-xs sm:text-sm text-[#0B192C] font-bold">{lang === 'Hindi' ? 'थोक मूल्य निर्धारण' : 'Wholesale Pricing'}</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0" />
                <span className="text-xs sm:text-sm text-[#0B192C] font-bold">{lang === 'Hindi' ? 'कस्टम आयाम' : 'Custom Dimensions'}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative cursor-pointer group"
          >
            <div className="absolute -inset-2 rounded-[38px] bg-gradient-to-tr from-[#0B192C] via-[#0284C7] to-sky-400 opacity-30 blur-2xl group-hover:opacity-65 transition-opacity duration-500" />

            <div className="relative bg-white/95 border-2 border-slate-300 rounded-[32px] p-6 shadow-2xl backdrop-blur-3xl space-y-5 overflow-hidden transition-all duration-300">
              
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeItem.title}
                    src={activeItem.image}
                    alt={activeItem.title}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-[#0B192C]/90 border border-slate-400/40 text-sky-300 font-extrabold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                  <Gem className="w-3.5 h-3.5 text-sky-400" />
                  <span>{activeItem.tag}</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-black text-sky-300 tracking-tight drop-shadow-md">
                        {activeItem.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1 leading-snug">
                        {activeItem.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute top-4 right-4 flex space-x-1.5 z-20">
                  {heroShowcase.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-7 bg-[#0284C7]' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeItem.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-center space-x-3">
                    <div className="p-2 bg-[#0284C7]/10 text-[#0284C7] rounded-xl shrink-0">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <p className="text-[#0B192C] font-black text-xs leading-snug">
                      {activeItem.stat1}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-center space-x-3">
                    <div className="p-2 bg-[#0284C7]/10 text-[#0284C7] rounded-xl shrink-0">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <p className="text-[#0B192C] font-black text-xs leading-snug">
                      {activeItem.stat2}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;