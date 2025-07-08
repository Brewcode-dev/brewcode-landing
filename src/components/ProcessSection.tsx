'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Lightbulb, Code, Rocket, Users, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      icon: Search,
      title: "Analiza",
      description: "Poznajemy Twoje potrzeby, analizujemy wymagania i określamy cele projektu.",
      details: ["Spotkanie konsultacyjne", "Analiza wymagań", "Określenie zakresu", "Wycena projektu"]
    },
    {
      icon: Lightbulb,
      title: "Projektowanie",
      description: "Tworzymy architekturę systemu, projektujemy UX/UI i planujemy implementację.",
      details: ["Architektura systemu", "Projekt UX/UI", "Prototypowanie", "Planowanie sprintów"]
    },
    {
      icon: Code,
      title: "Rozwój",
      description: "Programujemy aplikację zgodnie z najlepszymi praktykami i standardami.",
      details: ["Agile development", "Code review", "Testowanie", "Dokumentacja"]
    },
    {
      icon: Rocket,
      title: "Wdrożenie",
      description: "Wdrażamy aplikację na produkcję i zapewniamy jej stabilne działanie.",
      details: ["Deployment", "Monitoring", "Optymalizacja", "Szkolenie zespołu"]
    },
    {
      icon: Users,
      title: "Wsparcie",
      description: "Zapewniamy ciągłe wsparcie techniczne i rozwój aplikacji.",
      details: ["Support 24/7", "Aktualizacje", "Rozwój funkcji", "Konsultacje"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".process-step", 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#FFF2E6] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
            Jak <span className="text-international-orange-500">pracujemy</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Przejrzysty proces, który gwarantuje sukces projektu. Każdy krok jest starannie zaplanowany 
            i realizowany z najwyższą dbałością o jakość.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-international-orange-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="process-step bg-[#FFF2E6] dark:bg-gray-800 p-6 border-2 border-international-orange-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 text-center"
                >
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-international-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                    <span className="text-white font-black text-lg">{index + 1}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-international-orange-500/10 border-2 border-international-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-international-orange-500" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-black text-black dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-black dark:text-gray-300 font-medium mb-4">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-black dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-international-orange-500 mr-2 flex-shrink-0" />
                        <span className="font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-international-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <span className="text-white font-black text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-black text-black dark:text-white mb-3">
              Szybkość
            </h3>
            <p className="text-black dark:text-gray-300 font-medium">
              Agile development pozwala na szybkie dostarczanie funkcji i szybką reakcję na zmiany.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-international-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <span className="text-white font-black text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-black text-black dark:text-white mb-3">
              Precyzja
            </h3>
            <p className="text-black dark:text-gray-300 font-medium">
              Każdy etap jest starannie zaplanowany i realizowany z najwyższą dbałością o szczegóły.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-international-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <span className="text-white font-black text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-black text-black dark:text-white mb-3">
              Współpraca
            </h3>
            <p className="text-black dark:text-gray-300 font-medium">
              Pracujemy blisko z klientem, zapewniając pełną transparentność i regularne aktualizacje.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-international-orange-500 p-8 border-2 border-international-orange-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl font-black text-white mb-4">
              Gotowy na współpracę?
            </h3>
            <p className="text-white/90 font-medium mb-6">
              Skontaktuj się z nami i omówmy Twój projekt. Pierwsza konsultacja jest darmowa!
            </p>
            <button className="bg-white text-international-orange-500 px-8 py-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg">
              Rozpocznij Projekt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 