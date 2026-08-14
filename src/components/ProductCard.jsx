import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const ProductCard = ({ title, category, description, features, images, image, lang = 'Hindi' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgList = images && images.length > 0 ? images : (image ? [image] : []);

  const whatsappNumber = '916206966647';
  
  const resolvedTitle = typeof title === 'object' ? title[lang] : title;
  const resolvedCategory = typeof category === 'object' ? category[lang] : category;
  const resolvedDescription = typeof description === 'object' ? description[lang] : description;
  const resolvedFeatures = typeof features === 'object' ? features[lang] : features;

  useEffect(() => {
    if (!imgList || imgList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgList]);

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="bg-white/95 border border-slate-200 hover:border-[#0284C7]/60 rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0284C7]/15 flex flex-col justify-between group backdrop-blur-xl relative transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      <div className="absolute top-0 right-0 w-36 h-36 bg-sky-400/10 rounded-full blur-2xl group-hover:bg-[#0284C7]/20 transition-all duration-500 pointer-events-none z-0" />

      <div className="relative z-10">
        <div className="relative h-60 w-full bg-slate-100 overflow-hidden transition-colors duration-300">
          {imgList.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={imgList[currentIndex]}
                alt={resolvedTitle}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </AnimatePresence>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl text-[#0284C7]">
              <span>🪨</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/60 via-transparent to-transparent pointer-events-none" />

          {resolvedCategory && (
            <span className="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-widest text-[#0B192C] bg-white/95 border border-slate-200/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md z-10">
              {resolvedCategory}
            </span>
          )}

          {imgList.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {imgList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-white w-3' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 space-y-3">
          <h3 className="text-xl font-black text-[#0B192C] group-hover:text-[#0284C7] transition-colors duration-300 tracking-tight">
            {resolvedTitle}
          </h3>
          <p className="text-[#475569] text-xs leading-relaxed font-semibold min-h-[36px]">
            {resolvedDescription}
          </p>

          <div className="space-y-2 pt-4 border-t border-slate-100 transition-colors duration-300">
            {resolvedFeatures && resolvedFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-[#0B192C] font-extrabold">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 stroke-[2.5]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 relative z-10 bg-slate-50/80 border-t border-slate-100 transition-colors duration-300">
        <motion.a
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            lang === 'Hindi'
              ? `नमस्ते, मैं इस प्रोडक्ट के बारे में जानना चाहता हूँ: *${resolvedTitle}*। कृपया इसका सही दाम और डिटेल्स भेजें।`
              : `Hello, I am interested in your product category: *${resolvedTitle}*. Please share the wholesale rates and details.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-emerald-600/20 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 stroke-[2.5]" />
          <span>{lang === 'Hindi' ? 'व्हाट्सएप पर बात करें' : 'Inquire on WhatsApp'}</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;