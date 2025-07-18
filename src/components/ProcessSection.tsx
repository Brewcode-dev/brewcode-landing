'use client';

import React from 'react';
import { Lightbulb, Code, TestTube, Rocket, Users, Zap } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '../hooks/useScrollAnimation';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Analiza i Planowanie',
      description: 'Rozmawiamy o Twoich potrzebach, analizujemy wymagania i planujemy architekturę rozwiązania.',
      icon: Lightbulb,
      color: 'bg-[#ff4f19]',
    },
    {
      number: '02',
      title: 'Projektowanie UX/UI',
      description: 'Tworzymy intuicyjne interfejsy użytkownika, które są zarówno piękne, jak i funkcjonalne.',
      icon: Code,
      color: 'bg-[#ff4f19]',
    },
    {
      number: '03',
      title: 'Rozwój i Testowanie',
      description: 'Programujemy aplikację zgodnie z najlepszymi praktykami i testujemy każdy element.',
      icon: TestTube,
      color: 'bg-[#ff4f19]',
    },
    {
      number: '04',
      title: 'Wdrożenie i Szkolenie',
      description: 'Wdrażamy aplikację w środowisku produkcyjnym i szkolimy zespół z jej użytkowania.',
      icon: Rocket,
      color: 'bg-[#ff4f19]',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Współpraca',
      description: 'Pracujemy w bliskiej współpracy z Twoim zespołem przez cały proces.',
    },
    {
      icon: Zap,
      title: 'Szybkość',
      description: 'Dostarczamy rozwiązania szybko, bez kompromisów w jakości.',
    },
    {
      icon: Rocket,
      title: 'Innowacja',
      description: 'Wykorzystujemy najnowsze technologie i trendy w branży.',
    },
  ];

  // Animation refs
  const headerRef = useFadeInUp();
  const stepsRef = useStaggerAnimation(0.2);
  const benefitsRef = useStaggerAnimation(0.15);
  const ctaRef = useFadeInUp();

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Nasz <span className="text-[#ff4f19]">Proces</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pracujemy według sprawdzonego procesu, który gwarantuje sukces każdego projektu.
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="process-card bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${step.color} flex items-center justify-center shadow-lg border-2 border-[#ff4f19]`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-[#ff4f19]">{step.number}</span>
                </div>
                <h3 className="text-xl font-black text-gray-800 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mb-6 shadow-lg border-2 border-[#ff4f19]">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-800 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Gotowy na rozpoczęcie projektu?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Skontaktuj się z nami i opowiedz o swoim projekcie. Razem stworzymy coś wyjątkowego.
            </p>
            <button className="bg-[#ff4f19] text-white font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px]">
              Rozpocznij projekt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 