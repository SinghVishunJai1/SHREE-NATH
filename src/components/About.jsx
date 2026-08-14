import React from 'react';
import { motion } from 'framer-motion';
import { Award, Hammer, Store, Sparkles, Building2, ShieldCheck } from 'lucide-react';

const featuresData = {
  Hindi: [
    {
      icon: Building2,
      title: 'डायरेक्ट खदान (क्वारी) से माल',
      badge: 'सबसे कम दाम',
      description: 'हम सीधा नेचुरल स्टोन की खदानों से बढ़िया माल लाते हैं, ताकि आपको एकदम होलसेल शोरूम रेट पर मिल सके।'
    },
    {
      icon: Hammer,
      title: 'पसंद के हिसाब से कटिंग',
      badge: 'दमदार फिटिंग',
      description: 'सैंडस्टोन चौखट, खिड़की फ्रेम और हाथ से बने वॉशबेसिन आपके घर के साइज और डिज़ाइन के हिसाब से बिल्कुल सही कटते हैं।'
    },
    {
      icon: Store,
      title: 'शोरूम पर आकर देखें',
      badge: 'खुद छूकर देखें',
      description: 'आप हमारे शोरूम पर आकर सारे सैंडस्टोन डिज़ाइन, टाइल्स, ग्रेनाइट और बाथरूम की फिटिंग्स अपनी आँखों से लाइव देख सकते हैं।'
    },
    {
      icon: Award,
      title: 'लाइफटाइम बेस्ट क्वालिटी',
      badge: 'सालों-साल चले',
      description: 'हमारा नेचुरल सैंडस्टोन पानी, दीमक और धूप-बारिश से खराब नहीं होता। यह पीढ़ियों तक बिल्कुल नया जैसा टिका रहता है।'
    }
  ],
  English: [
    {
      icon: Building2,
      title: 'Direct Quarry Sourcing',
      badge: 'Best Rates',
      description: 'We source top-tier raw materials directly from natural stone quarries to offer you competitive wholesale showroom pricing.'
    },
    {
      icon: Hammer,
      title: 'Custom Precision Cutting',
      badge: 'Tailored Fit',
      description: 'Sandstone door frames (chokhat), window frames, and handcrafted washbasins are custom-engineered to match your exact site specifications.'
    },
    {
      icon: Store,
      title: 'Physical Showroom Display',
      badge: 'Touch & Feel',
      description: 'Visit our premier physical showroom to explore our complete live collection of sandstone finishes, tiles, granite slabs, and sanitaryware fittings.'
    },
    {
      icon: Award,
      title: 'Lifetime Best Quality',
      badge: 'Long Lasting',
      description: 'Our natural sandstone is moisture-proof, termite-resistant, and weather-proof, engineered to deliver enduring structural excellence across generations.'
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 }
  }
};

const About = ({ lang = 'Hindi' }) => {
  const features = featuresData[lang];

  return (
    <section 
      id="about" 
      className="py-24 bg-[#F8FAFC] text-[#0B192C] relative overflow-hidden border-t border-slate-300/60 transition-colors duration-500"
    >
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-20 w-96 h-96 bg-sky-300/40 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-slate-300/40 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-white/90 border border-slate-300/80 text-[#0B192C] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xs backdrop-blur-md cursor-default"
          >
            <Sparkles className="w-4 h-4 text-[#0284C7] animate-pulse" />
            <span>{lang === 'Hindi' ? 'बेहतरीन कारीगरी और शोरूम' : 'Craftsmanship & Showroom Excellence'}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B192C] tracking-tight leading-tight">
            {lang === 'Hindi' ? 'श्री नाथ ' : 'About '} 
            <span className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] bg-clip-text text-transparent">
              {lang === 'Hindi' ? 'मार्बल एंड सैनिटरीवेयर' : 'Shree Nath Marble & Sanitaryware'}
            </span>
            {lang === 'Hindi' ? ' के बारे में' : ''}
          </h2>

          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-semibold max-w-2xl mx-auto">
            {lang === 'Hindi' ? (
              <>श्री नाथ मार्बल एंड सैनिटरीवेयर <span className="font-extrabold text-[#0B192C]">भोजपुर (बिहार)</span> में आपके सपनों के घर के लिए नेचुरल सैंडस्टोन डोर फ्रेम (चौखट), टाइल्स, ग्रेनाइट और आधुनिक सैनिटरीवेयर का मुख्य शोरूम है। इस वेबसाइट पर आप हमारी पूरी रेंज आसानी से देख सकते हैं।</>
            ) : (
              <>Shree Nath Marble & Sanitaryware is the premier physical showroom destination in <span className="font-extrabold text-[#0B192C]">Bhojpur (Bihar)</span> for natural sandstone door frames (chokhat), premium tiles, granite, and modern sanitaryware tailored for your dream home. Explore our complete range directly through this digital portal.</>
            )}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white/95 border border-slate-200 hover:border-[#0284C7]/60 p-7 rounded-3xl backdrop-blur-xl shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0284C7]/15 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="p-3.5 w-12 h-12 bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white rounded-2xl flex items-center justify-center font-bold shadow-md shadow-[#0284C7]/20 group-hover:scale-110 transition-transform duration-300"
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>

                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0B192C] bg-slate-100 border border-slate-300/80 px-2.5 py-1 rounded-full shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B192C] mb-2.5 tracking-wide group-hover:text-[#0284C7] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-normal transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] text-[#0284C7] font-extrabold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'Hindi' ? 'भरोसेमंद शोरूम' : 'Showroom Standard'}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default About;