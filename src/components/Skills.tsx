import React from 'react';
import { Code2, Palette, Layout, Terminal, Database, Globe } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

const SkillCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <Icon size={24} className="text-indigo-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Java Full Stack',
      description: 'Spring Boot, Hibernate, React, and modern Java development practices'
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'React.js, TypeScript, and modern CSS frameworks like Tailwind'
    },
    {
      icon: Terminal,
      title: 'Backend Development',
      description: 'RESTful APIs, microservices, and server-side architecture'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'SQL, MongoDB, and database optimization techniques'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design, wireframing, and prototyping'
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and content strategy'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <SkillCard {...skill} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;