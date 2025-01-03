import React from 'react';
import { Code, Palette, Globe, Database, Layout, Search } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) => (
  <ScaleIn>
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} className="text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </ScaleIn>
);

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies',
      features: [
        'Custom web applications',
        'RESTful API development',
        'Database design and optimization',
        'Performance optimization'
      ]
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      features: [
        'React.js applications',
        'Responsive design',
        'Modern UI frameworks',
        'Animation and interactions'
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust and scalable server-side solutions',
      features: [
        'Java Spring Boot',
        'Microservices architecture',
        'API integration',
        'Security implementation'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions for digital products',
      features: [
        'Wireframing',
        'Prototyping',
        'User research',
        'Interface design'
      ]
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your website\'s search engine visibility',
      features: [
        'Technical SEO',
        'Content optimization',
        'Performance tuning',
        'Analytics setup'
      ]
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions',
      features: [
        'Social media marketing',
        'Content strategy',
        'Email marketing',
        'Analytics and reporting'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;