'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ShoppingCart, BarChart3, TrendingUp, Zap, Shield, Users, Database, Store } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App2Page = () => {
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
      icon: ShoppingCart,
      title: "Zarządzanie inwentarzem",
      description: "Śledź stan magazynowy w czasie rzeczywistym i automatycznie generuj zamówienia."
    },
    {
      icon: BarChart3,
      title: "Analityka sprzedaży",
      description: "Poznaj trendy sprzedaży i optymalizuj asortyment na podstawie danych."
    },
    {
      icon: TrendingUp,
      title: "Raporty finansowe",
      description: "Automatycznie generuj raporty sprzedaży, marży i rentowności."
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo transakcji",
      description: "Zaawansowane szyfrowanie i kontrola dostępu dla bezpiecznych transakcji."
    },
    {
      icon: Users,
      title: "Zarządzanie personelem",
      description: "Planuj grafik pracy i śledź wydajność zespołu."
    },
    {
      icon: Database,
      title: "Integracje z dostawcami",
      description: "Łącz się z dostawcami i automatycznie składaj zamówienia."
    }
  ];

  const benefits = [
    "Zwiększenie sprzedaży o 25%",
    "Redukcja kosztów operacyjnych o 30%",
    "Poprawa zarządzania inwentarzem o 50%",
    "Oszczędność czasu na raportowanie o 70%"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 text-center bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-[#ff4f19] hover:text-orange-600 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          
          <h1 className="hero-title text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6">
            <span className="text-[#ff4f19]">
              PubTracker
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Kompleksowe rozwiązanie do zarządzania inwentarzem i sprzedażą w pubach i restauracjach. 
            Kontroluj, analizuj i zwiększaj zyski.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#ff4f19] text-white px-8 py-4 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Rozpocznij darmowy trial
            </button>
            <button className="bg-white dark:bg-gray-800 text-[#ff4f19] px-8 py-4 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-105 hover:-rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Zobacz demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-6">
              Kluczowe funkcje
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Odkryj narzędzia, które pomogą Ci zoptymalizować działanie Twojego pubu lub restauracji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card bg-white dark:bg-gray-800 p-8 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mb-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-8">
                Dlaczego PubTracker?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                                <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4">
              <div className="w-2 h-2 bg-white"></div>
            </div>
                    <span className="text-gray-600 dark:text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] p-8">
              <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6">Rozpocznij już dziś</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Dołącz do setek pubów i restauracji, które już korzystają z PubTracker 
                do zwiększenia zysków i optymalizacji operacji.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Darmowy trial</span>
                  <span className="text-[#ff4f19] font-bold">30 dni</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Wsparcie techniczne</span>
                  <span className="text-[#ff4f19] font-bold">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Integracje</span>
                  <span className="text-[#ff4f19] font-bold">50+</span>
                </div>
              </div>
              <button className="w-full bg-[#ff4f19] text-white py-3 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] font-bold mt-6 hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300">
                Rozpocznij darmowy trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ff4f19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Gotowy na transformację swojego pubu?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dołącz do grona innowacyjnych lokali, które już korzystają z naszych rozwiązań.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#ff4f19] px-8 py-4 border-2 border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Rozpocznij darmowy trial
            </button>
            <button className="bg-[#ff4f19] text-white px-8 py-4 border-2 border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-105 hover:-rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App2Page; 