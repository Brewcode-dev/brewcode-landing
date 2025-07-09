'use client';

import React from 'react';
import { Lightbulb, Code, TestTube, Rocket, Users, Zap } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Analiza',
      description: 'Poznajemy Twoje potrzeby i analizujemy wymagania projektu.',
      icon: Lightbulb,
      color: 'bg-orange-500'
    },
    {
      number: '02',
      title: 'Projektowanie',
      description: 'Tworzymy architekturę i projektujemy interfejs użytkownika.',
      icon: Code,
      color: 'bg-blue-500'
    },
    {
      number: '03',
      title: 'Rozwój',
      description: 'Programujemy aplikację zgodnie z najlepszymi praktykami.',
      icon: TestTube,
      color: 'bg-green-500'
    },
    {
      number: '04',
      title: 'Testowanie',
      description: 'Sprawdzamy jakość i wydajność aplikacji.',
      icon: Zap,
      color: 'bg-purple-500'
    },
    {
      number: '05',
      title: 'Wdrożenie',
      description: 'Uruchamiamy aplikację i zapewniamy wsparcie techniczne.',
      icon: Rocket,
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Jak <span className="text-orange-500">pracujemy</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nasz proces tworzenia aplikacji jest przejrzysty i efektywny. Każdy krok ma znaczenie.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-orange-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="process-step bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] text-center"
                >
                  {/* Step Number */}
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]`}>
                    <span className="text-white font-black text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 border-4 border-[#ff4f19] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black text-gray-800 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Dlaczego wybrać nasz proces?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Współpraca
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Pracujemy blisko z klientem na każdym etapie
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Szybkość
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Dostarczamy wyniki w przewidywalnym czasie
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Jakość
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Każdy projekt to najwyższa jakość kodu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 