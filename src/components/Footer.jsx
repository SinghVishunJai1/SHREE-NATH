import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = ({ lang = 'Hindi' }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F8FAFC] text-[#0B192C] border-t border-slate-300/60 overflow-hidden py-6 transition-colors duration-500">
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-[#0284C7]/20 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative flex flex-col sm:flex-row items-center justify-center">
          
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#475569] font-medium bg-white/90 border border-slate-200/90 px-5 py-2.5 rounded-full shadow-xs backdrop-blur-md">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="font-black text-[#0B192C]">Shree Nath Marble & Sanitaryware</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-500 font-semibold">
              {lang === 'Hindi' ? 'सभी अधिकार सुरक्षित' : 'All Rights Reserved'}
            </span>
          </div>

          <div className="mt-3 sm:mt-0 sm:absolute sm:right-0">
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md shadow-[#0284C7]/20 hover:brightness-110 cursor-pointer"
            >
              <span>{lang === 'Hindi' ? 'ऊपर जाएं' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[3]" />
            </motion.button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;