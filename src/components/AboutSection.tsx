'use client';

import React from 'react';
import { Users, Target, Award, Code, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '50+', label: 'Projektów', icon: Code },
    { number: '15+', label: 'Klientów', icon: Users },
    { number: '3', label: 'Lata doświadczenia', icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: 'Jakość',
      description: 'Każdy projekt to dbałość o najmniejsze szczegóły i najwyższą jakość kodu.'
    },
    {
      icon: Heart,
      title: 'Pasja',
      description: 'Łączymy pasję do piwa z miłością do technologii.'
    },
    {
      icon: Rocket,
      title: 'Innowacja',
      description: 'Nieustannie eksperymentujemy z nowymi technologiami.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Kim <span className="text-orange-500">jesteśmy</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Jesteśmy zespołem pasjonatów, którzy łączą miłość do piwa kraftowego z nowoczesną technologią. 
            Tworzymy aplikacje, które pomagają browarom, pubom i miłośnikom piwa w ich codziennej pracy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="text-3xl font-black text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
                Nasza Misja
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Chcemy zrewolucjonizować sposób, w jaki branża piwowarska korzysta z technologii. 
                Od prostych aplikacji do zarządzania recepturami, po zaawansowane systemy analityczne 
                - tworzymy narzędzia, które naprawdę pomagają.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center">
              <span className="text-orange-500 font-black text-xl">💻</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center">
              <span className="text-orange-500 font-black text-lg">🚀</span>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="about-card bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-lg border-2 border-[#ff4f19]">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-black text-gray-800 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 