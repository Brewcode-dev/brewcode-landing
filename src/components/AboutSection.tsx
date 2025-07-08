'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, Award, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Target,
      title: "Innowacyjność",
      description: "Stale poszukujemy nowych rozwiązań i technologii, które pomogą naszym klientom osiągnąć więcej."
    },
    {
      icon: Users,
      title: "Współpraca",
      description: "Pracujemy blisko z klientami, aby zrozumieć ich potrzeby i stworzyć rozwiązania, które naprawdę działają."
    },
    {
      icon: Award,
      title: "Jakość",
      description: "Każdy projekt traktujemy jako dzieło sztuki - dbamy o każdy szczegół i najwyższą jakość kodu."
    },
    {
      icon: Zap,
      title: "Szybkość",
      description: "Dostarczamy rozwiązania szybko, ale bez kompromisów w jakości. Czas to pieniądz."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-card", 
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
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
    <section ref={sectionRef} className="py-20 bg-[#F5E6D3] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
            Kim <span className="text-international-orange-500">jesteśmy</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Jesteśmy zespołem pasjonatów technologii, którzy tworzą innowacyjne rozwiązania dla biznesu.
            Łączymy kreatywność z techniczną precyzją.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-black dark:text-white">
              Nasza Historia
            </h3>
            <p className="text-lg text-black dark:text-gray-300 leading-relaxed font-medium">
              Brewcode powstało z pasji do technologii i piwa kraftowego. Zauważyliśmy, że branża piwowarska 
              potrzebuje nowoczesnych narzędzi, które pomogą w rozwoju i zarządzaniu.
            </p>
            <p className="text-lg text-black dark:text-gray-300 leading-relaxed font-medium">
              Dziś tworzymy nie tylko aplikacje dla browarów, ale kompleksowe rozwiązania technologiczne 
              dla firm z różnych branż. Nasz zespół składa się z doświadczonych deweloperów, designerów 
              i konsultantów biznesowych.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-international-orange-500 mb-2">50+</div>
                <div className="text-sm text-black dark:text-gray-400 font-medium">Projektów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-international-orange-500 mb-2">15+</div>
                <div className="text-sm text-black dark:text-gray-400 font-medium">Klientów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-international-orange-500 mb-2">3</div>
                <div className="text-sm text-black dark:text-gray-400 font-medium">Lata doświadczenia</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="bg-international-orange-500 p-8 border-2 border-international-orange-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="text-white text-center">
                <h4 className="text-2xl font-black mb-4">Nasza Misja</h4>
                <p className="text-lg font-medium leading-relaxed">
                  "Tworzyć technologie, które nie tylko rozwiązują problemy, ale inspirują do rozwoju 
                  i innowacji. Każdy kod to krok w kierunku lepszej przyszłości."
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFF2E6] dark:bg-gray-800 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center">
              <span className="text-international-orange-500 font-black text-xl">💻</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FFF2E6] dark:bg-gray-800 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center">
              <span className="text-international-orange-500 font-black text-lg">🚀</span>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="about-card bg-[#FFF2E6] dark:bg-gray-800 p-6 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-international-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-black text-black dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-black dark:text-gray-300 font-medium">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 