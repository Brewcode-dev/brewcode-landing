'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Code, Server, GitBranch, Shield, Zap, Database, Cloud } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const App3Page = () => {
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
      icon: Code,
      title: "Mikroserwisy",
      description: "Buduj skalowalne aplikacje z architekturą mikroserwisową i kontenerami Docker."
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline",
      description: "Automatyzuj procesy budowania, testowania i wdrażania z zaawansowanymi pipeline'ami."
    },
    {
      icon: Server,
      title: "Monitoring",
      description: "Monitoruj wydajność aplikacji w czasie rzeczywistym z zaawansowanymi metrykami."
    },
    {
      icon: Cloud,
      title: "Skalowanie automatyczne",
      description: "Automatycznie skaluj zasoby w zależności od obciążenia i zapotrzebowania."
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo",
      description: "Zaawansowane zabezpieczenia, skanowanie podatności i kontrola dostępu."
    },
    {
      icon: Database,
      title: "Zarządzanie danymi",
      description: "Kompleksowe narzędzia do zarządzania bazami danych i migracjami."
    }
  ];

  const benefits = [
    "Przyspieszenie wdrażania o 80%",
    "Redukcja kosztów infrastruktury o 40%",
    "Poprawa stabilności aplikacji o 95%",
    "Automatyzacja 90% procesów DevOps"
  ];

  const techStack = [
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔷" },
    { name: "GCP", icon: "🌐" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Jenkins", icon: "🤖" },
    { name: "GitLab", icon: "🦊" },
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
              BrewCode Platform
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-french-gray mb-8 max-w-3xl mx-auto">
            Kompleksowa platforma deweloperska, która upraszcza proces tworzenia, 
            wdrażania i zarządzania aplikacjami w chmurze.
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
              Wszystko, czego potrzebujesz do profesjonalnego rozwoju i wdrażania aplikacji.
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

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-r from-raisin-black/50 to-dim-gray/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wspierane technologie
            </h2>
            <p className="text-xl text-french-gray">
              Integruj się z popularnymi narzędziami i platformami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-dim-gray/30 to-raisin-black/30 rounded-xl border border-gold-metallic/20 hover:border-gold-metallic/40 transition-all duration-300">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Dlaczego BrewCode Platform?
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
                Dołącz do tysięcy deweloperów, którzy już korzystają z BrewCode Platform 
                do budowania i wdrażania aplikacji.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-french-gray">Darmowy trial</span>
                  <span className="text-gold-metallic font-semibold">14 dni</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-french-gray">Wsparcie techniczne</span>
                  <span className="text-gold-metallic font-semibold">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-french-gray">Integracje</span>
                  <span className="text-gold-metallic font-semibold">50+</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-gold-metallic to-hunyadi-yellow text-raisin-black py-3 rounded-lg font-semibold mt-6 hover:shadow-lg transition-all duration-300">
                Rozpocznij darmowy trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-raisin-black/50 to-dim-gray/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wybierz plan dla siebie
            </h2>
            <p className="text-xl text-french-gray">
              Elastyczne plany dostosowane do Twoich potrzeb
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-dim-gray/30 to-raisin-black/30 p-8 rounded-2xl border border-gold-metallic/20">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gold-metallic mb-6">$29<span className="text-lg text-french-gray">/miesiąc</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Do 5 projektów
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Podstawowe CI/CD
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Email support
                </li>
              </ul>
              <button className="w-full border-2 border-gold-metallic text-gold-metallic py-3 rounded-lg font-semibold hover:bg-gold-metallic hover:text-raisin-black transition-all duration-300">
                Wybierz plan
              </button>
            </div>

            <div className="bg-gradient-to-br from-gold-metallic/20 to-hunyadi-yellow/20 p-8 rounded-2xl border-2 border-gold-metallic relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-metallic to-hunyadi-yellow text-raisin-black px-4 py-1 rounded-full text-sm font-semibold">
                Najpopularniejszy
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-gold-metallic mb-6">$99<span className="text-lg text-french-gray">/miesiąc</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Do 25 projektów
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Zaawansowane CI/CD
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Priority support
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Monitoring
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-gold-metallic to-hunyadi-yellow text-raisin-black py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Wybierz plan
              </button>
            </div>

            <div className="bg-gradient-to-br from-dim-gray/30 to-raisin-black/30 p-8 rounded-2xl border border-gold-metallic/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gold-metallic mb-6">$299<span className="text-lg text-french-gray">/miesiąc</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Nielimitowane projekty
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  Wszystkie funkcje
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  24/7 support
                </li>
                <li className="flex items-center text-french-gray">
                  <div className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></div>
                  SLA gwarancja
                </li>
              </ul>
              <button className="w-full border-2 border-gold-metallic text-gold-metallic py-3 rounded-lg font-semibold hover:bg-gold-metallic hover:text-raisin-black transition-all duration-300">
                Skontaktuj się
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
              Gotowy na profesjonalne DevOps?
            </h2>
            <p className="text-xl text-french-gray mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem i dowiedz się, jak BrewCode Platform 
              może przyspieszyć rozwój Twoich aplikacji.
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

export default App3Page; 