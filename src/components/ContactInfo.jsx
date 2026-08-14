import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Sparkles, Navigation, ExternalLink } from 'lucide-react';

const ContactInfo = ({ lang = 'Hindi' }) => {
  const displayPhone = '+91 62069 66647';
  const rawPhone = '+916206966647';

  const googleMapsUrl = "https://www.google.com/maps/place/25%C2%B031'17.6%22N+84%C2%B038'12.9%22E/@25.5215634,84.6343271,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.5215634!4d84.636902";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-300/80 text-[#0B192C] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#0284C7] animate-pulse" />
          <span>{lang === 'Hindi' ? 'शोरूम और गैलरी का पता' : 'Showroom & Physical Gallery Location'}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-black text-[#0B192C] tracking-tight leading-tight">
          {lang === 'Hindi' ? 'हमारे ' : 'Visit Our '}
          <span className="bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] bg-clip-text text-transparent">
            {lang === 'Hindi' ? 'शोरूम पर आएं' : 'Showroom'}
          </span>
        </h3>

        <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-semibold max-w-lg">
          {lang === 'Hindi' 
            ? 'हमारे शोरूम पर आकर नेचुरल सैंडस्टोन सैंपल, डोर फ्रेम (चौखट), टाइल्स, ग्रेनाइट और सैनिटरी फिटिंग्स सीधे देखें और सबसे कम होलसेल रेट जानें।'
            : 'Hamare showroom par aakar natural sandstone samples, door frames (chokhat), tiles, granite, aur sanitary fittings direct dekhein aur best wholesale rate jaanein.'}
        </p>
      </motion.div>

      <div className="space-y-4">
        
        <motion.div
          variants={itemVariants}
          whileHover={{ x: 6, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative bg-white/95 border border-slate-200 hover:border-[#0284C7]/60 p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0284C7]/15 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-[#0284C7]/15 transition-all duration-500" />
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white font-bold rounded-xl shadow-md shadow-[#0284C7]/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-[#0284C7] uppercase tracking-widest">
                  {lang === 'Hindi' ? 'सीधा कॉल और व्हाट्सएप' : 'Direct Call & WhatsApp'}
                </h4>
                <p className="text-[#0B192C] font-extrabold text-lg tracking-wide mt-0.5">
                  {displayPhone}
                </p>
                <p className="text-xs text-[#475569] font-normal">
                  {lang === 'Hindi' ? 'शोरूम सहायता उपलब्ध है' : 'Showroom Assistance Available'}
                </p>
              </div>
            </div>

            <a
              href={`tel:${rawPhone}`}
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#0B192C] hover:text-[#0284C7] bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl border border-slate-300/80 transition-all cursor-pointer"
            >
              <span>{lang === 'Hindi' ? 'कॉल करें' : 'Call Now'}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ x: 6, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative bg-white/95 border border-slate-200 hover:border-[#0284C7]/60 p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0284C7]/15 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-[#0284C7]/15 transition-all duration-500" />
          
          <div className="flex items-start space-x-4 relative z-10">
            <div className="p-3.5 bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white font-bold rounded-xl shadow-md shadow-[#0284C7]/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-black text-[#0284C7] uppercase tracking-widest">
                  {lang === 'Hindi' ? 'शोरूम का पता' : 'Showroom Address'}
                </h4>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] font-black text-[#0B192C] hover:text-[#0284C7] hover:underline cursor-pointer"
                >
                  <Navigation className="w-3 h-3 text-[#0284C7]" />
                  <span>{lang === 'Hindi' ? 'मैप पर रास्ता देखें' : 'Get Directions'}</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                </a>
              </div>
              <p className="text-[#0B192C] font-extrabold text-base mt-0.5">
                Shree Nath Marble & Sanitary
              </p>
              <p className="text-xs text-[#475569] font-medium mt-1 leading-relaxed">
                {lang === 'Hindi' 
                  ? 'तत्रिया मोड़, आरा सासाराम रोड, भोजपुर, बिहार (802210)'
                  : 'Tatriya Mod, Ara Sasaram Road, Bhojpur, Bihar (802210)'}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ x: 6, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative bg-white/95 border border-slate-200 hover:border-[#0284C7]/60 p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0284C7]/15 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-[#0284C7]/15 transition-all duration-500" />
          
          <div className="flex items-center space-x-4 relative z-10">
            <div className="p-3.5 bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white font-bold rounded-xl shadow-md shadow-[#0284C7]/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-[#0284C7] uppercase tracking-widest">
                {lang === 'Hindi' ? 'खुलने का समय' : 'Business Hours'}
              </h4>
              <p className="text-[#0B192C] font-extrabold text-base mt-0.5">
                {lang === 'Hindi' ? 'सोमवार से शनिवार' : 'Monday – Saturday'}
              </p>
              <div className="flex items-center space-x-2 text-xs text-[#475569] font-medium mt-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>09:00 AM – 08:00 PM</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ContactInfo;