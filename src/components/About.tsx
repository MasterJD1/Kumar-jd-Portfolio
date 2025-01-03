import React from 'react';
import { Code2, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <FadeIn>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507537509458-b8312d35a233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Developer working"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </motion.div>

          {/* Right side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-8">
                Hello, I’m Kumar JD, a dedicated technology enthusiast hailing from Gundugolanu, Andhra Pradesh, India. 
                Currently, I’m refining my expertise in full-stack Java development while freelancing in UI/UX design, 
                digital marketing, and website creation. My passion lies in blending creativity with technology to deliver impactful solutions.
              </p>

              {/* Skills */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Code2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Full-Stack Development</h3>
                    <p className="text-gray-600">Specializing in Java, Spring Boot, and modern web technologies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Globe className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">UI/UX Design</h3>
                    <p className="text-gray-600">Creating intuitive and engaging user experiences</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Cpu className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Digital Marketing</h3>
                    <p className="text-gray-600">Implementing effective digital marketing strategies</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <motion.a 
                  href="mailto:kumarjd7799@gmail.com"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-shadow hover:shadow-xl hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  Hire Me
                </motion.a>
                <motion.a 
                  href="https://drive.google.com/file/d/1-75wByo4dZ6xH2nx5YfYWBBrnup1eDQy/view?usp=sharing"
                  download
                  className="bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-50 transition-shadow hover:shadow-xl border border-indigo-100 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  Download CV
                </motion.a>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
