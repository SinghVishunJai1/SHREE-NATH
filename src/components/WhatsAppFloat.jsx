import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ lang = 'Hindi' }) => {
  const phoneNumber = '916206966647';
  
  const defaultMessage = encodeURIComponent(
    lang === 'Hindi'
      ? 'नमस्ते श्री नाथ मार्बल, मुझे आपके सामान (सैंडस्टोन, टाइल्स आदि) का रेट और डिटेल जाननी है।'
      : 'Hi Shree Nath Marble & Sanitary, I am interested in inquiring about your product range.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <span className="absolute w-14 h-14 rounded-full bg-[#0284C7]/40 animate-ping pointer-events-none" />
      <span className="absolute w-10 h-10 rounded-full bg-sky-300/40 blur-md pointer-events-none" />

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative bg-gradient-to-tr from-[#0B192C] via-[#1E3E62] to-[#0284C7] hover:brightness-110 text-white p-4 rounded-full shadow-2xl shadow-[#0284C7]/30 border border-sky-300/30 flex items-center justify-center group backdrop-blur-md cursor-pointer overflow-hidden"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none group-hover:rotate-12 transition-transform duration-300" />

        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 ease-in-out text-xs font-black uppercase tracking-wider text-white">
          {lang === 'Hindi' ? 'व्हाट्सएप करें' : 'Chat with Us'}
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;