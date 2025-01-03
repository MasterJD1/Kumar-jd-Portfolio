import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

const EducationCard = ({ icon: Icon, title, institution, grade, year }: {
  icon: React.ElementType;
  title: string;
  institution: string;
  grade: string;
  year: string;
}) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <Icon size={24} className="text-indigo-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <h4 className="font-semibold text-indigo-600 mb-2">{institution}</h4>
    <p className="text-gray-600">Grade: {grade}</p>
    <p className="text-gray-500 mt-1">{year}</p>
  </div>
);

const Education = () => {
  const educationDetails = [
    {
      icon: GraduationCap,
      title: 'Master of Computer Applications (MCA)',
      institution: 'Kite Institute of Technology, Kakinada',
      grade: 'Expected Graduation: August 2025',
      year: '2025',
    },
    {
      icon: GraduationCap,
      title: 'Bachelor of Science in Computer Science',
      institution: 'SIR CR REDDY COLLEGE, Eluru',
      grade: '81%',
      year: '2023',
    },
    {
      icon: GraduationCap,
      title: 'Intermediate (12th Grade)',
      institution: 'NRI Junior College, Eluru',
      grade: '72%',
      year: '2020',
    },
    {
      icon: GraduationCap,
      title: 'Secondary School Certificate (SSC)',
      institution: 'Z.P.H. High School, Gundugolanu',
      grade: '83%',
      year: '2018',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Education Journey</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((education, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <EducationCard {...education} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
