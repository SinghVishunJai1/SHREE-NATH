import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductsGrid from './components/ProductsGrid';
import ContactInfo from './components/ContactInfo';
import InquiryForm from './components/InquiryForm';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('Hindi');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B192C] font-sans selection:bg-[#0284C7] selection:text-white overflow-x-hidden transition-colors duration-500">
      
      <Navbar lang={lang} setLang={setLang} />

      <Hero lang={lang} />

      <About lang={lang} />

      <ProductsGrid lang={lang} />

      <section 
        id="contact" 
        className="py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] relative overflow-hidden border-t border-slate-300/80 transition-colors duration-500"
      >
        
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.35, 0.55, 0.35]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-sky-300/40 rounded-full blur-[140px] pointer-events-none" 
        />

        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-slate-400/30 rounded-full blur-[160px] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-flex items-center space-x-2.5 px-4.5 py-1.5 rounded-full bg-white border border-slate-300/90 text-[#0B192C] text-xs font-black uppercase tracking-widest shadow-xs backdrop-blur-md cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284C7]" />
              </span>
              <span>{lang === 'Hindi' ? 'शोरूम से तुरंत मदद' : 'Quick Showroom Assistance'}</span>
            </motion.div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0B192C] tracking-tight leading-tight">
              {lang === 'Hindi' ? 'हमसे संपर्क करें और ' : 'Get In Touch & '}
              <motion.span 
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-[#0B192C] via-[#0284C7] to-[#1E3E62] bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                {lang === 'Hindi' ? 'रेट जानें' : 'Request a Quote'}
              </motion.span>
            </h2>
            
            <p className="text-[#475569] text-xs sm:text-sm font-semibold max-w-md mx-auto leading-relaxed">
              {lang === 'Hindi' 
                ? 'नीचे दिया गया फॉर्म भरें, हमारी टीम आपको सबसे सही होलसेल रेट के साथ जल्द ही कॉल करेगी।' 
                : 'Fill out the form below, and our showroom team will contact you shortly with a competitive wholesale quote.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactInfo lang={lang} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <InquiryForm lang={lang} />
            </motion.div>

          </div>

        </div>
      </section>

      <WhatsAppFloat lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;