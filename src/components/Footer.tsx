import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kumar JD</h3>
            <p className="text-gray-400">
              Full Stack Developer specializing in Java development and UI/UX design.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:kumarjd7799@gmail.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail size={16} className="mr-2" />
                kumarjd7799@gmail.com
              </a>
              <a href="tel:+917799332325" className="flex items-center text-gray-400 hover:text-white">
                <Phone size={16} className="mr-2" />
                +91 7799332325
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white">About</a>
              <a href="#services" className="block text-gray-400 hover:text-white">Services</a>
              <a href="#projects" className="block text-gray-400 hover:text-white">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Kumarjd7799" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/badireddy-jyothi-durga-kumar-5649b7283" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:kumarjd7799@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kumar JD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;