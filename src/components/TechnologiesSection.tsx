'use client';

import React from 'react';
import { Code, Database, Cloud, Smartphone, Globe, Shield } from 'lucide-react';

const TechnologiesSection = () => {
  const technologies = [
    { name: 'React', level: 95, icon: Code },
    { name: 'Node.js', level: 90, icon: Code },
    { name: 'TypeScript', level: 88, icon: Code },
    { name: 'PostgreSQL', level: 85, icon: Database },
    { name: 'AWS', level: 80, icon: Cloud },
    { name: 'React Native', level: 75, icon: Smartphone },
  ];

  const categories = [
    {
      title: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: Globe,
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
      icon: Database,
    },
    {
      title: 'DevOps',
      technologies: ['AWS', 'Docker', 'GitHub Actions', 'Vercel'],
      icon: Cloud,
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Nasze <span className="text-orange-500">Technologie</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Używamy najnowszych technologii, aby tworzyć szybkie, skalowalne i bezpieczne aplikacje.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="tech-card bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <IconComponent className="w-6 h-6 text-orange-500 mr-3" />
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-orange-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="skill-bar bg-orange-500 h-full"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center mb-6">
                  <IconComponent className="w-8 h-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border-2 border-[#ff4f19] text-gray-800 dark:text-gray-200 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection; 