import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [serviceClicked, setServiceClicked] = useState(false); // Track "services" click

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    if (section === 'services') {
      setServiceClicked(true); // Trigger animation on click
      setTimeout(() => {
        setServiceClicked(false); // Reset after animation duration
      }, 1000); // Animation duration (adjust accordingly)
    }
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Name with color differentiation */}
          <div className="flex-shrink-0 font-bold text-2xl">
            <span className="text-indigo-600">Kumar</span>
            <span className="text-gray-700"> JD</span>
          </div>

          {/* Desktop Menu (Buttons instead of Links) */}
          <div className="hidden md:flex space-x-8 relative">
            {['home', 'about', 'projects', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`relative px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform ${
                  activeSection === section ? 'bg-indigo-600 text-white' : ''
                } ${
                  hoveredSection === section && activeSection !== section
                    ? 'bg-indigo-200 text-indigo-600 opacity-80'
                    : ''
                } ${section === 'services' && serviceClicked ? 'animate-scale' : ''}`} // Add animation on click
              >
                {/* Only one span for the text */}
                <span
                  className={`relative z-20 transition-all duration-300 ease-in-out ${
                    activeSection === section || hoveredSection === section
                      ? 'text-white font-bold'
                      : 'text-gray-700'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('us', ' Us')}
                </span>
                {/* Background Color Transition */}
                <span
                  className={`absolute inset-0 rounded-full bg-indigo-600 transition-all duration-300 ease-in-out ${
                    activeSection === section || hoveredSection === section
                      ? 'opacity-60 z-10' // Reduced opacity for background
                      : 'opacity-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {['home', 'about', 'projects', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block px-3 py-2 w-full text-gray-700 hover:text-indigo-600 ${
                  activeSection === section ? 'text-indigo-600 font-bold' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('us', ' Us')}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
