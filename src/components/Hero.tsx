import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';

const SocialLink = ({ href, icon: Icon, delay }: { 
  href: string; 
  icon: React.ElementType;
  delay: number;
}) => (
  <ScaleIn delay={delay}>
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition shadow-md hover:shadow-lg hover:scale-110 hover:-translate-y-1"
    >
      <Icon size={24} className="text-gray-700" />
    </a>
  </ScaleIn>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-rose-100 via-purple-50 to-indigo-100">
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?auto=format&fit=crop&q=80')] opacity-5"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <FadeIn direction="up" delay={0.2}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                  <motion.span 
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block"
                    animate={{ 
                      backgroundPosition: ['0%', '100%'],
                      opacity: [0.8, 1] 
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                  >
                    Kumar JD
                  </motion.span>
                  <br />
                  <motion.span 
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent inline-block"
                    animate={{ 
                      backgroundPosition: ['100%', '0%'],
                      opacity: [0.8, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                  >
                    Full Stack Developer
                  </motion.span>
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <p className="text-lg text-gray-600 mb-8">
                  A passionate technology enthusiast specializing in Java Full Stack Development,
                  UI/UX Design, and Digital Marketing.
                </p>
              </FadeIn>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <FadeIn direction="up" delay={0.6}>
                <a 
                  href="mailto:kumarjd7799@gmail.com" 
                  className="flex items-center justify-center bg-indigo-600 text-white px-8 py-3 text-lg font-medium rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                >
                  Hire Me
                </a>
              </FadeIn>
              <FadeIn direction="up" delay={0.7}>
                <a 
                  href="https://drive.google.com/file/d/1-75wByo4dZ6xH2nx5YfYWBBrnup1eDQy/view?usp=sharing" 
                  download
                  className="flex items-center justify-center bg-white/80 backdrop-blur-sm text-indigo-600 px-8 py-3 text-lg font-medium rounded-full hover:bg-white transition shadow-lg hover:shadow-xl border border-indigo-100 hover:scale-105 hover:-translate-y-1"
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </a>
              </FadeIn>
            </div>

            <div className="flex space-x-4 justify-center lg:justify-start">
              <SocialLink href="https://github.com/Kumarjd7799" icon={Github} delay={0.8} />
              <SocialLink href="https://www.linkedin.com/in/badireddy-jyothi-durga-kumar-5649b7283" icon={Linkedin} delay={0.9} />
              <SocialLink href="mailto:kumarjd7799@gmail.com" icon={Mail} delay={1.0} />
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] blur-3xl opacity-20"
              animate={{ 
                rotate: [0, 12, 0],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <ScaleIn delay={0.5}>
              <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-xl border-8 border-white/50 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1507207908229-c59ddb730e40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
