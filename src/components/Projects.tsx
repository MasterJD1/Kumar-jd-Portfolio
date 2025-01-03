import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import Modal from './shared/Modal';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  challenges: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
  >
    <div className="h-48 overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="max-w-4xl mx-auto">
    <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
    <p className="text-gray-600 mb-6">{project.longDescription}</p>
    
    <div className="grid md:grid-cols-2 gap-8 mb-6">
      <div>
        <h3 className="text-xl font-semibold mb-3">Key Features</h3>
        <ul className="space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Challenges & Solutions</h3>
        <ul className="space-y-2">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
              {challenge}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {(project.liveUrl || project.githubUrl) && (
      <div className="flex space-x-4">
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            className="flex items-center text-indigo-600 hover:text-indigo-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="mr-1" /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl}
            className="flex items-center text-gray-600 hover:text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="mr-1" /> View Code
          </a>
        )}
      </div>
    )}
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Online Vehicle Insurance Platform',
      description: 'Comprehensive platform for vehicle insurance with user authentication and payment integration',
      longDescription: 'A full-featured vehicle insurance platform that streamlines the process of obtaining insurance. Users can register, input vehicle details, compare insurance providers, and complete payments securely.',
      image: 'https://plus.unsplash.com/premium_photo-1733317485899-e2ac315b63cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Java', 'Spring Boot', 'MySQL', 'JUnit'],
      features: [
        'User authentication system',
        'Vehicle details management',
        'Insurance provider comparison',
        'Secure payment integration',
        'Policy generation and management'
      ],
      challenges: [
        'Implementing secure payment gateway',
        'Handling complex insurance calculations',
        'Managing user session security',
        'Optimizing database queries'
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Food Ordering Platform',
      description: 'User-friendly food ordering system with category-based selection and authentication',
      longDescription: 'A comprehensive food ordering platform that allows users to browse different food categories, place orders, and manage their accounts securely.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
      tags: ['Java', 'MySQL', 'Web Development'],
      features: [
        'User registration and authentication',
        'Category-based food selection',
        'Order management system',
        'Real-time order tracking'
      ],
      challenges: [
        'Implementing real-time updates',
        'Managing concurrent orders',
        'Optimizing search functionality',
        'Ensuring data consistency'
      ],
      techStack: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'JDBC']
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive system for managing student data with CRUD operations',
      longDescription: 'A Java-based student management system that enables efficient handling of student records with create, read, update, and delete operations.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
      tags: ['Java', 'MySQL', 'CRUD'],
      features: [
        'Student record management',
        'Grade tracking system',
        'Attendance management',
        'Performance analytics'
      ],
      challenges: [
        'Designing efficient database schema',
        'Implementing data validation',
        'Creating user-friendly interface',
        'Ensuring data security'
      ],
      techStack: ['Java', 'MySQL', 'JDBC', 'Swing']
    },
    {
      title: 'Interactive Portfolio Website with Dynamic Content',
      description: 'Designed and developed a personal portfolio website to showcase skills, projects, and achievements using HTML5, CSS3, and JavaScript.',
      longDescription: 'A fully interactive portfolio website that dynamically loads project details, blogs, and client testimonials with smooth interactions and animations. The website is designed to be responsive and optimized for all screen sizes. It incorporates interactive elements such as image sliders, modals, and animations for an engaging user experience. The website is also SEO-friendly and optimized for performance, ensuring quick load times and better visibility on search engines.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace with actual image URL
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
      features: [
        'Dynamic content loading for projects, blogs, and testimonials',
        'Interactive elements like sliders, modals, and animations',
        'SEO and performance optimization for faster load times',
        'Mobile-responsive design ensuring accessibility across all devices',
        'User-friendly navigation with easy access to portfolio sections'
      ],
      challenges: [
        'Ensuring cross-browser compatibility and responsiveness',
        'Optimizing performance for faster load times',
        'Implementing smooth dynamic content transitions',
        'Balancing interactive elements with user experience'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design']
    },
    {
      title: 'UI/UX Design for "Be to Better, Create Brand Kit"',
      description: 'Led the design and development of user-centered interfaces, ensuring an intuitive and seamless experience across web and mobile platforms.',
      longDescription: 'I was responsible for designing a complete brand kit for "Be to Better," creating wireframes, prototypes, and high-fidelity mockups for their website and mobile app. The design process involved user research through surveys and interviews, which helped me understand user needs and behaviors. I used Figma and Canva to create the brand kit, including logos, color schemes, and typography. The project focused on creating a responsive, user-friendly interface with a consistent visual style across devices.',
      image: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace with actual image URL
      tags: ['UI/UX Design', 'Figma', 'Canva', 'Branding', 'Prototyping'],
      features: [
        'Brand kit design including logo, color scheme, and typography',
        'Wireframes and high-fidelity mockups using Figma and Canva',
        'Responsive design for web and mobile platforms',
        'User research through surveys and interviews to guide design decisions',
        'Collaboration with developers for smooth design handoff'
      ],
      challenges: [
        'Ensuring brand consistency across web and mobile platforms',
        'Incorporating user feedback to iterate on designs',
        'Creating a visually appealing yet functional interface',
        'Optimizing design for various screen sizes and devices'
      ],
      techStack: ['UI/UX Design', 'Figma', 'Canva', 'Responsive Design', 'Branding']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <ProjectCard 
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </Modal>
    </section>
  );
};

export default Projects;