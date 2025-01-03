import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.form 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
        />
      </div>
      <div>
        <textarea
          rows={4}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;