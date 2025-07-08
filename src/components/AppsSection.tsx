'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Code, Database, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AppsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const apps = [
    {
      id: 1,
      title: "BrewMaster Pro",
      description: "Zaawansowana aplikacja do zarządzania browarem rzemieślniczym. Monitoruj proces warzenia, zarządzaj recepturami i analizuj wydajność produkcji w czasie rzeczywistym.",
      features: ["Monitoring warzenia", "Zarządzanie recepturami", "Analiza jakości", "Raporty produkcji"],
      icon: Database,
      color: "bg-international-orange-500",
      href: "/app1"
    },
    {
      id: 2,
      title: "HomeBrew Helper",
      description: "Aplikacja mobilna dla domowych warzelników z kalkulatorami, timerami i bazą receptur. Idealna dla pasjonatów domowego warzenia piwa.",
      features: ["Kalkulatory warzenia", "Timery procesu", "Baza receptur", "Dziennik warzenia"],
      icon: Smartphone,
      color: "bg-white dark:bg-gray-800",
      href: "/app2"
    },
    {
      id: 3,
      title: "BeerCraft Platform",
      description: "Platforma społecznościowa dla miłośników piwa kraftowego. Dziel się opiniami, odkrywaj nowe browary i śledź swoje ulubione piwa.",
      features: ["Recenzje piwa", "Mapa browarów", "Społeczność", "Personalizowane rekomendacje"],
      icon: Code,
      color: "bg-international-orange-500",
      href: "/app3"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(".app-card", 
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

      // Hover animations
      const cards = document.querySelectorAll('.app-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="apps" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-6">
            Nasze <span className="text-international-orange-500">Aplikacje</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Trzy specjalistyczne aplikacje stworzone z myślą o świecie piwa kraftowego i pasjonatów domowego warzenia.
          </p>
        </div>

        {/* Apps Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => {
            const IconComponent = app.icon;
            const isOrange = app.color === 'bg-international-orange-500';
            return (
              <div
                key={app.id}
                className={`app-card group ${app.color} p-8 border-2 border-international-orange-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${isOrange ? 'bg-white/20' : 'bg-international-orange-500/20'} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${isOrange ? 'text-white' : 'text-international-orange-500'}`} />
                  </div>
                  <ArrowRight className={`w-5 h-5 ${isOrange ? 'text-white/60' : 'text-international-orange-500/60'} group-hover:translate-x-1 transition-all duration-300`} />
                </div>

                <h3 className={`text-2xl font-black mb-4 ${isOrange ? 'text-white' : 'text-gray-800 dark:text-white'}`}>{app.title}</h3>
                <p className={`mb-6 leading-relaxed ${isOrange ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'}`}>{app.description}</p>

                <div className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`flex items-center ${isOrange ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>
                      <div className={`w-2 h-2 rounded-full mr-3 ${isOrange ? 'bg-white/50' : 'bg-international-orange-500/50'}`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={app.href}
                  className={`inline-flex items-center font-bold hover:underline ${isOrange ? 'text-white' : 'text-international-orange-500'}`}
                >
                  Dowiedz się więcej
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 border-2 border-international-orange-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] p-8">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Potrzebujesz aplikacji dla swojego browaru?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto font-medium">
              Nasz zespół ekspertów jest gotowy, aby stworzyć aplikację dopasowaną do potrzeb Twojego browaru. 
              Skontaktuj się z nami i omówmy Twój projekt.
            </p>
            <Link 
              href="/kontakt"
              className="bg-international-orange-500 text-white px-8 py-4 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg inline-flex items-center"
            >
              Rozpocznij Projekt
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection; 