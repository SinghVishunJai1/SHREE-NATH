import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const InquiryForm = ({ lang = 'Hindi' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productInterest: 'Sandstone Door & Window Frame (Chokhat)',
    message: ''
  });

  const whatsappNumber = '916206966647';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, productInterest, message } = formData;

    const waText = lang === 'Hindi'
      ? `*नई शोरूम इंक्वायरी*\n\n*नाम:* ${name}\n*मोबाइल:* ${phone}\n*सामान:* ${productInterest}\n*डिटेल:* ${message || 'कोई डिटेल नहीं'}`
      : `*New Showroom Inquiry*\n\n*Name:* ${name}\n*Mobile:* ${phone}\n*Product:* ${productInterest}\n*Details:* ${message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      phone: '',
      productInterest: 'Sandstone Door & Window Frame (Chokhat)',
      message: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white/95 border border-slate-200/90 hover:border-[#0284C7]/60 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-slate-900/5 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center space-x-2 text-[#0284C7] text-xs font-black uppercase tracking-widest mb-1">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#0284C7]" />
          <span>{lang === 'Hindi' ? 'तेज़ शोरूम सहायता' : 'Fast Showroom Assistance'}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C] tracking-tight mb-1">
          {lang === 'Hindi' ? 'ऑनलाइन इंक्वायरी भेजें' : 'Send Instant Inquiry'}
        </h3>
        <p className="text-[#475569] text-xs sm:text-sm font-semibold mb-6">
          {lang === 'Hindi' 
            ? 'फॉर्म भरें, आपकी जानकारी सीधे हमारे व्हाट्सएप पर आ जाएगी।' 
            : 'Fill the form, your details will be sent directly to our WhatsApp.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-black text-[#0B192C] uppercase tracking-widest mb-1.5">
              {lang === 'Hindi' ? 'पूरा नाम *' : 'Full Name *'}
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={lang === 'Hindi' ? 'अपना पूरा नाम लिखें' : 'Aapka Naam'}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B192C] placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-[11px] font-black text-[#0B192C] uppercase tracking-widest mb-1.5">
              {lang === 'Hindi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder={lang === 'Hindi' ? '10 अंकों का मोबाइल नंबर' : '10-digit mobile number'}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B192C] placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-[11px] font-black text-[#0B192C] uppercase tracking-widest mb-1.5">
              {lang === 'Hindi' ? 'कौन सा सामान चाहिए' : 'Product Required'}
            </label>
            <select
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B192C] text-xs sm:text-sm outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all duration-300 cursor-pointer"
            >
              <option value="Sandstone Door & Window Frame (Chokhat)" className="bg-white text-[#0B192C]">
                {lang === 'Hindi' ? 'सैंडस्टोन दरवाज़ा और खिड़की फ्रेम (चौखट)' : 'Sandstone Door & Window Frame (Chokhat)'}
              </option>
              <option value="Sanitary Ware & Washbasins" className="bg-white text-[#0B192C]">
                {lang === 'Hindi' ? 'सैनिटरी वेयर और वॉशबेसिन' : 'Sanitary Ware & Washbasins'}
              </option>
              <option value="Luxury C.P. Fittings" className="bg-white text-[#0B192C]">
                {lang === 'Hindi' ? 'बाथरूम नल और फिटिंग्स (C.P. Fittings)' : 'Luxury C.P. Fittings'}
              </option>
              <option value="Flooring & Wall Tiles" className="bg-white text-[#0B192C]">
                {lang === 'Hindi' ? 'फर्श और दीवार की टाइल्स' : 'Flooring & Wall Tiles'}
              </option>
              <option value="Polished Granite Slabs" className="bg-white text-[#0B192C]">
                {lang === 'Hindi' ? 'पॉलिश किया हुआ ग्रेनाइट' : 'Polished Granite Slabs'}
              </option>
              <option value="Other Custom Orders" className="bg-white text-[#0B192C]">
                {lang === 'Hindi' ? 'अन्य कोई दूसरा सामान' : 'Other Custom Orders'}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-black text-[#0B192C] uppercase tracking-widest mb-1.5">
              {lang === 'Hindi' ? 'ज़रूरत या डिटेल लिखें' : 'Details / Requirements'}
            </label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder={lang === 'Hindi' ? 'कितना सामान चाहिए या कोई खास साइज़ हो तो बताएं...' : 'Quantity, custom sizes, or specific requirements...'}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B192C] placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0284C7] text-white font-extrabold py-4 rounded-xl transition-all shadow-xl shadow-[#0284C7]/20 flex items-center justify-center space-x-2 text-xs sm:text-sm tracking-wide uppercase mt-2 cursor-pointer hover:brightness-110"
          >
            <Send className="w-4 h-4 stroke-[2.5]" />
            <span>{lang === 'Hindi' ? 'इंक्वायरी भेजें' : 'Submit Inquiry'}</span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default InquiryForm;