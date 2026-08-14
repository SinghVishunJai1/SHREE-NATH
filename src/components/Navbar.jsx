import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Languages, Loader2 } from 'lucide-react';

import logoImg from '../assets/logo.png';

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const rawPhone = '+916206966647';

  const handleTranslate = () => {
    setIsTranslating(true);
    setTimeout(() => {
      setLang(prevLang => (prevLang === 'Hindi' ? 'English' : 'Hindi'));
      setIsTranslating(false);
    }, 600);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F8FAFC]/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-40 blur-md group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="relative bg-white border border-slate-200 p-1.5 rounded-2xl flex items-center justify-center overflow-hidden h-12 sm:h-13 w-12 sm:w-13 shadow-sm group-hover:rotate-1 transition-transform duration-300">
                <img 
                  src={logoImg} 
                  alt="Shree Nath Logo" 
                  className="h-full w-full object-contain filter drop-shadow-xs"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden text-[#0B192C] font-black text-xl tracking-tighter items-center justify-center">
                  SN
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#0B192C] tracking-tight block leading-none transition-colors duration-300 group-hover:text-[#0284C7]">
                SHREE NATH
              </span>
              <span className="text-[10px] text-slate-500 font-extrabold tracking-widest uppercase block mt-1">
                {lang === 'Hindi' ? 'मार्बल और सैनिटरी' : 'Marble & Sanitary'}
              </span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8 text-xs sm:text-sm font-extrabold tracking-wide text-[#0B192C]">
            <a href="#hero" className="hover:text-[#0284C7] transition-colors relative group py-1">
              {lang === 'Hindi' ? 'होम' : 'Home'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0284C7] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#about" className="hover:text-[#0284C7] transition-colors relative group py-1">
              {lang === 'Hindi' ? 'हमारे बारे में' : 'About Us'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0284C7] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#products" className="hover:text-[#0284C7] transition-colors relative group py-1">
              {lang === 'Hindi' ? 'उत्पाद' : 'Products'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0284C7] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="hover:text-[#0284C7] transition-colors relative group py-1">
              {lang === 'Hindi' ? 'संपर्क करें' : 'Contact'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0284C7] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTranslate}
              disabled={isTranslating}
              className="inline-flex items-center space-x-2 bg-white border border-slate-300 hover:border-[#0284C7] text-[#0B192C] px-3.5 py-2 rounded-2xl text-xs font-black shadow-sm transition-all cursor-pointer disabled:opacity-70"
            >
              {isTranslating ? (
                <Loader2 className="w-4 h-4 text-[#0284C7] animate-spin" />
              ) : (
                <Languages className="w-4 h-4 text-[#0284C7]" />
              )}
              <span>{lang === 'Hindi' ? '🌐 English' : '🌐 हिंदी'}</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${rawPhone}`}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] hover:brightness-110 text-white font-extrabold px-5 py-2.5 rounded-2xl text-xs shadow-md shadow-[#0284C7]/20 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current stroke-none" />
              <span>{lang === 'Hindi' ? 'कॉल करें' : 'Call Showroom'}</span>
            </motion.a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handleTranslate}
              disabled={isTranslating}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#0284C7] shadow-xs flex items-center justify-center cursor-pointer"
            >
              {isTranslating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Languages className="w-5 h-5" />}
            </button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0B192C] p-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none shadow-xs"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#F8FAFC]/98 border-b border-slate-200 backdrop-blur-2xl px-6 py-6 space-y-3 overflow-hidden shadow-xl"
          >
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="block text-[#0B192C] font-extrabold py-2.5 border-b border-slate-200/80 hover:text-[#0284C7] transition-colors"
            >
              {lang === 'Hindi' ? 'होम' : 'Home'}
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-[#0B192C] font-extrabold py-2.5 border-b border-slate-200/80 hover:text-[#0284C7] transition-colors"
            >
              {lang === 'Hindi' ? 'हमारे बारे में' : 'About Us'}
            </a>
            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="block text-[#0B192C] font-extrabold py-2.5 border-b border-slate-200/80 hover:text-[#0284C7] transition-colors"
            >
              {lang === 'Hindi' ? 'उत्पाद' : 'Products'}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-[#0B192C] font-extrabold py-2.5 border-b border-slate-200/80 hover:text-[#0284C7] transition-colors"
            >
              {lang === 'Hindi' ? 'संपर्क करें' : 'Contact'}
            </a>
            
            <a
              href={`tel:${rawPhone}`}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white font-extrabold w-full py-3.5 rounded-2xl shadow-md mt-4 text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{lang === 'Hindi' ? 'कॉल करें' : 'Call Showroom'}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;