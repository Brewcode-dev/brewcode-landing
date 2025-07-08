'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, BarChart3, TrendingUp, Zap, Shield, Users, Database } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const App1Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      
      gsap.fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      // Features animation
      gsap.fromTo('.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: "Dashboard w czasie rzeczywistym",
      description: "Monitoruj kluczowe wskaźniki biznesowe w czasie rzeczywistym z intuicyjnymi wykresami i raportami."
    },
    {
      icon: TrendingUp,
      title: "Predykcyjna analityka",
      description: "Wykorzystaj sztuczną inteligencję do przewidywania trendów i podejmowania lepszych decyzji biznesowych."
    },
    {
      icon: Zap,
      title: "Automatyzacja raportów",
      description: "Automatycznie generuj i wysyłaj raporty do interesariuszy w określonych interwałach czasowych."
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo danych",
      description: "Zaawansowane szyfrowanie i kontrola dostępu zapewniają bezpieczeństwo Twoich danych biznesowych."
    },
    {
      icon: Users,
      title: "Współpraca zespołowa",
      description: "Udostępniaj raporty i dashboardy członkom zespołu z różnymi poziomami uprawnień."
    },
    {
      icon: Database,
      title: "Integracje API",
      description: "Łącz się z popularnymi narzędziami biznesowymi poprzez nasze rozbudowane API."
    }
  ];

  const benefits = [
    "Zwiększenie efektywności operacyjnej o 40%",
    "Redukcja czasu analizy danych o 60%",
    "Poprawa dokładności prognoz o 35%",
    "Oszczędność czasu na raportowanie o 80%"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-raisin-black to-dim-gray pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gold-metallic hover:text-hunyadi-yellow transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-gold-metallic to-hunyadi-yellow bg-clip-text text-transparent">
              BrewCode Analytics
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-french-gray mb-8 max-w-3xl mx-auto">
            Zaawansowana platforma analityczna, która przekształca dane w konkretne decyzje biznesowe. 
            Monitoruj, analizuj i przewiduj z niezwykłą precyzją.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-gold-metallic to-hunyadi-yellow text-raisin-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Rozpocznij darmowy trial
            </button>
            <button className="border-2 border-gold-metallic text-gold-metallic px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-metallic hover:text-raisin-black transition-all duration-300">
              Zobacz demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Kluczowe funkcje
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Odkryj potężne narzędzia, które pomogą Ci zrozumieć i wykorzystać pełny potencjał Twoich danych.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card bg-gradient-to-br from-dim-gray/50 to-raisin-black/50 p-8 rounded-2xl border border-gold-metallic/20 hover:border-gold-metallic/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-metallic to-hunyadi-yellow rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-raisin-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-french-gray leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-raisin-black/50 to-dim-gray/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Dlaczego BrewCode Analytics?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-gold-metallic to-hunyadi-yellow rounded-full flex items-center justify-center mr-4">
                      <div className="w-2 h-2 bg-raisin-black rounded-full"></div>
                    </div>
                    <span className="text-french-gray text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gold-metallic/10 to-hunyadi-yellow/10 border border-gold-metallic/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Rozpocznij już dziś</h3>
              <p className="text-french-gray mb-6">
                Dołącz do tysięcy firm, które już korzystają z BrewCode Analytics 
                do podejmowania lepszych decyzji biznesowych.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-french-gray">Darmowy trial</span>
                  <span className="text-gold-metallic font-semibold">30 dni</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-french-gray">Wsparcie techniczne</span>
                  <span className="text-gold-metallic font-semibold">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-french-gray">Integracje</span>
                  <span className="text-gold-metallic font-semibold">100+</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-gold-metallic to-hunyadi-yellow text-raisin-black py-3 rounded-lg font-semibold mt-6 hover:shadow-lg transition-all duration-300">
                Rozpocznij darmowy trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gold-metallic/10 to-hunyadi-yellow/10 border border-gold-metallic/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Gotowy na transformację danych?
            </h2>
            <p className="text-xl text-french-gray mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem i dowiedz się, jak BrewCode Analytics 
              może pomóc Twojej firmie osiągnąć nowe poziomy efektywności.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt"
                className="bg-gradient-to-r from-gold-metallic to-hunyadi-yellow text-raisin-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Skontaktuj się
              </Link>
              <button className="border-2 border-gold-metallic text-gold-metallic px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-metallic hover:text-raisin-black transition-all duration-300">
                Zobacz demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App1Page; 