import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const items = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kumarjd7799@gmail.com',
      href: 'mailto:kumarjd7799@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7799332325',
      href: 'tel:+917799332325'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gundugolanu, Andhra Pradesh, India'
    }
  ];

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start"
        >
          <div className="p-3 rounded-lg bg-white/10">
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4">
            <h4 className="text-white text-lg font-semibold">{item.label}</h4>
            {item.href ? (
              <a 
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-white/80">{item.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;