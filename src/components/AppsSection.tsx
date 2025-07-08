'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Code, Database, Smartphone, Zap, Users, BarChart3, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AppsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const apps = [
    {
      id: 1,
      title: "BrewMaster Pro",
      subtitle: "Zaawansowane zarządzanie browarem",
      description: "Kompleksowa platforma do zarządzania browarem rzemieślniczym. Monitoruj proces warzenia, zarządzaj recepturami i analizuj wydajność produkcji w czasie rzeczywistym.",
      features: ["Monitoring warzenia", "Zarządzanie recepturami", "Analiza jakości", "Raporty produkcji"],
      benefits: ["Zwiększ wydajność o 40%", "Zmniejsz koszty o 25%", "Popraw jakość produktu"],
      icon: Database,
      color: "bg-international-orange-500",
      href: "/app1",
      stats: { users: "500+", rating: "4.9", uptime: "99.9%" }
    },
    {
      id: 2,
      title: "HomeBrew Helper",
      subtitle: "Aplikacja dla domowych warzelników",
      description: "Aplikacja mobilna dla domowych warzelników z kalkulatorami, timerami i bazą receptur. Idealna dla pasjonatów domowego warzenia piwa.",
      features: ["Kalkulatory warzenia", "Timery procesu", "Baza receptur", "Dziennik warzenia"],
      benefits: ["Uprość proces warzenia", "Popraw jakość piwa", "Eksperymentuj z recepturami"],
      icon: Smartphone,
      color: "bg-[#FFE9CF] dark:bg-gray-800",
      href: "/app2",
      stats: { users: "10K+", rating: "4.8", uptime: "99.8%" }
    },
    {
      id: 3,
      title: "BeerCraft Platform",
      subtitle: "Społeczność miłośników piwa",
      description: "Platforma społecznościowa dla miłośników piwa kraftowego. Dziel się opiniami, odkrywaj nowe browary i śledź swoje ulubione piwa.",
      features: ["Recenzje piwa", "Mapa browarów", "Społeczność", "Personalizowane rekomendacje"],
      benefits: ["Odkryj nowe piwa", "Połącz się z pasjonatami", "Śledź swoje ulubione"],
      icon: Code,
      color: "bg-international-orange-500",
      href: "/app3",
      stats: { users: "25K+", rating: "4.7", uptime: "99.7%" }
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
          stagger: 0.3,
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
    <section ref={sectionRef} id="apps" className="py-20 bg-[#FFE9CF] dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
            Nasze <span className="text-international-orange-500">Aplikacje</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Trzy specjalistyczne aplikacje stworzone z myślą o świecie piwa kraftowego i pasjonatów domowego warzenia.
          </p>
        </div>

        {/* Apps Grid */}
        <div ref={cardsRef} className="space-y-12">
          {apps.map((app, index) => {
            const IconComponent = app.icon;
            const isOrange = app.color === 'bg-international-orange-500';
            return (
              <div
                key={app.id}
                className={`app-card group ${app.color} p-8 border-2 border-international-orange-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 ${isOrange ? 'bg-white/20' : 'bg-international-orange-500/20'} rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]`}>
                          <IconComponent className={`w-8 h-8 ${isOrange ? 'text-white' : 'text-international-orange-500'}`} />
                        </div>
                        <div>
                          <h3 className={`text-3xl font-black mb-2 ${isOrange ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                            {app.title}
                          </h3>
                          <p className={`text-lg font-bold ${isOrange ? 'text-white/80' : 'text-international-orange-500'}`}>
                            {app.subtitle}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className={`w-6 h-6 ${isOrange ? 'text-white/60' : 'text-international-orange-500/60'} group-hover:translate-x-2 transition-all duration-300`} />
                    </div>

                    {/* Description */}
                    <p className={`text-lg leading-relaxed ${isOrange ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>
                      {app.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className={`text-lg font-black mb-3 ${isOrange ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                        Kluczowe funkcje:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-center ${isOrange ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                            <div className={`w-2 h-2 rounded-full mr-3 ${isOrange ? 'bg-white/60' : 'bg-international-orange-500/60'}`}></div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className={`text-lg font-black mb-3 ${isOrange ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                        Korzyści:
                      </h4>
                      <div className="space-y-2">
                        {app.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className={`flex items-center ${isOrange ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>
                            <Zap className={`w-4 h-4 mr-2 ${isOrange ? 'text-white' : 'text-international-orange-500'}`} />
                            <span className="font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={app.href}
                      className={`inline-flex items-center font-black hover:underline ${isOrange ? 'text-white' : 'text-international-orange-500'}`}
                    >
                      Dowiedz się więcej
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Right Side - Stats & Visual */}
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className={`text-center p-4 ${isOrange ? 'bg-white/10' : 'bg-international-orange-500/10'} border-2 border-international-orange-500/30`}>
                        <div className={`text-2xl font-black mb-1 ${isOrange ? 'text-white' : 'text-international-orange-500'}`}>
                          {app.stats.users}
                        </div>
                        <div className={`text-xs font-bold ${isOrange ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>
                          Użytkowników
                        </div>
                      </div>
                      <div className={`text-center p-4 ${isOrange ? 'bg-white/10' : 'bg-international-orange-500/10'} border-2 border-international-orange-500/30`}>
                        <div className={`text-2xl font-black mb-1 ${isOrange ? 'text-white' : 'text-international-orange-500'}`}>
                          {app.stats.rating}
                        </div>
                        <div className={`text-xs font-bold ${isOrange ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>
                          Ocena
                        </div>
                      </div>
                      <div className={`text-center p-4 ${isOrange ? 'bg-white/10' : 'bg-international-orange-500/10'} border-2 border-international-orange-500/30`}>
                        <div className={`text-2xl font-black mb-1 ${isOrange ? 'text-white' : 'text-international-orange-500'}`}>
                          {app.stats.uptime}
                        </div>
                        <div className={`text-xs font-bold ${isOrange ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>
                          Uptime
                        </div>
                      </div>
                    </div>

                    {/* Visual Elements */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 ${isOrange ? 'bg-white/10' : 'bg-international-orange-500/10'} border-2 border-international-orange-500/30 text-center`}>
                        <BarChart3 className={`w-8 h-8 mx-auto mb-2 ${isOrange ? 'text-white' : 'text-international-orange-500'}`} />
                        <div className={`text-sm font-bold ${isOrange ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                          Analizy
                        </div>
                      </div>
                      <div className={`p-4 ${isOrange ? 'bg-white/10' : 'bg-international-orange-500/10'} border-2 border-international-orange-500/30 text-center`}>
                        <Shield className={`w-8 h-8 mx-auto mb-2 ${isOrange ? 'text-white' : 'text-international-orange-500'}`} />
                        <div className={`text-sm font-bold ${isOrange ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                          Bezpieczeństwo
                        </div>
                      </div>
                    </div>

                    {/* Demo Button */}
                    <Link href={app.href}>
                      <button className={`w-full py-3 px-6 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold ${
                        isOrange 
                          ? 'bg-white text-international-orange-500' 
                          : 'bg-international-orange-500 text-white'
                      }`}>
                        Zobacz Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 p-8 border-2 border-international-orange-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
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