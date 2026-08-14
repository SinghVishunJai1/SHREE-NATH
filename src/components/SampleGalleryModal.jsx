import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Eye, MessageCircle, ChevronDown } from 'lucide-react';

const TOTAL_SAMPLES = 40;

const sampleList = Array.from({ length: TOTAL_SAMPLES }, (_, i) => ({
  id: i + 1,
  src: new URL(`../assets/products/img${i + 1}.png`, import.meta.url).href,
  title: `Exclusive Showroom Design #${i + 1}`
}));

const SampleGalleryModal = ({ isOpen, onClose, lang = 'Hindi' }) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [previewImage, setPreviewImage] = useState(null);
  
  const whatsappNumber = '916206966647'; 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0B192C]/80 backdrop-blur-xl flex flex-col overflow-hidden"
      >
        <div className="sticky top-0 z-30 bg-white/95 border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-sky-100 text-[#0284C7] rounded-xl">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#0B192C]">
                {lang === 'Hindi' ? `लाइव शोरूम डिज़ाइन (${TOTAL_SAMPLES})` : `Live Showroom Samples (${TOTAL_SAMPLES})`}
              </h3>
              <p className="text-xs text-[#475569] font-semibold">
                {lang === 'Hindi' ? 'गोदाम और शोरूम की फोटो गैलरी' : 'Direct Quarry & Yard Inventory'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 hover:bg-slate-100 text-[#0B192C] rounded-2xl border border-slate-200 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {sampleList.slice(0, visibleCount).map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onClick={() => setPreviewImage(item)}
                    className="group bg-white border border-slate-200 hover:border-[#0284C7]/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col"
                  >
                    <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={item.src}
                        alt="Showroom Design"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600';
                        }}
                      />
                      <div className="absolute inset-0 bg-[#0B192C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-3 bg-white text-[#0284C7] rounded-full shadow-lg">
                          <Eye className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 flex items-center justify-between bg-white border-t border-slate-100">
                      <span className="text-xs font-black text-[#0B192C]">
                        {lang === 'Hindi' ? 'प्रीमियम डिज़ाइन' : 'Premium Collection'}
                      </span>
                      <span className="text-[10px] font-bold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full uppercase">
                        {lang === 'Hindi' ? 'स्टॉक में' : 'In Yard'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {visibleCount < TOTAL_SAMPLES && (
              <div className="mt-12 text-center pb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 12, TOTAL_SAMPLES))}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-lg cursor-pointer text-xs uppercase tracking-wider"
                >
                  <span>
                    {lang === 'Hindi' 
                      ? `और डिज़ाइन देखें (${TOTAL_SAMPLES - visibleCount} बाकी)` 
                      : `Load More Samples (${TOTAL_SAMPLES - visibleCount} Left)`}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>
              </div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {previewImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
              className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-h-[70vh] bg-slate-950 flex items-center justify-center">
                  <img
                    src={previewImage.src}
                    alt="Preview Design"
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                </div>

                <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
                  <div>
                    <h3 className="text-lg font-black text-[#0B192C]">
                      {lang === 'Hindi' ? 'आपकी पसंद का डिज़ाइन' : 'Selected Showroom Design'}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {lang === 'Hindi' ? 'इस डिज़ाइन के सही रेट जानने के लिए मैसेज करें' : 'Direct Showroom Wholesale Rate Available'}
                    </p>
                  </div>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      lang === 'Hindi'
                        ? `नमस्ते, मैं इस डिज़ाइन (फोटो आईडी: ${previewImage.id}) के बारे में जानना चाहता हूँ। कृपया इसका होलसेल दाम और डिटेल बताएं।`
                        : `Hello, I am interested in this showroom design sample (ID: ${previewImage.id}). Please share the wholesale rates and availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] hover:brightness-110 text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'Hindi' ? 'व्हाट्सएप पर रेट पूछें' : 'Inquire on WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default SampleGalleryModal;