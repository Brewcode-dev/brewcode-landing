'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ShoppingCart, BarChart3, TrendingUp, Zap, Shield, Users, Database, Store } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/ui/Button';

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
    <div className="min-h-screen bg-theme-background">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 text-center bg-theme-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-[#ff4f19] hover:text-orange-600 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          
          <h1 className="hero-title text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6 font-heading-poppins">
            <span className="text-[#ff4f19]">
              PubTracker
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-body-roboto">
            Kompleksowe rozwiązanie do zarządzania inwentarzem i sprzedażą w pubach i restauracjach. 
            Kontroluj, analizuj i zwiększaj zyski.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              Rozpocznij darmowy trial
            </Button>
            <Button variant="secondary" size="lg">
              Zobacz demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-theme-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-6 font-heading-poppins">
              Kluczowe funkcje
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body-roboto">
              Odkryj narzędzia, które pomogą Ci zoptymalizować działanie Twojego pubu lub restauracji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card bg-theme-surface p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300 hover:scale-105 hover:translate-x-[-2px] hover:translate-y-[-2px]">
                  <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--theme-shadow)] border-2 border-[#ff4f19]">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 font-heading-poppins">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body-roboto">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-theme-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-8 font-heading-poppins">
                Dlaczego PubTracker?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                                <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4">
              <div className="w-2 h-2 bg-white"></div>
            </div>
                    <span className="text-gray-600 dark:text-gray-300 text-lg font-body-roboto">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-theme-surface border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] p-8">
              <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6 font-heading-poppins">Rozpocznij już dziś</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-body-roboto">
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
              <Button variant="primary" size="md" className="w-full mt-6">
                Rozpocznij darmowy trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ff4f19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-heading-poppins">
            Gotowy na transformację swojego pubu?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body-roboto">
            Dołącz do grona innowacyjnych lokali, które już korzystają z naszych rozwiązań.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg">
              Rozpocznij darmowy trial
            </Button>
            <Button variant="primary" size="lg">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App2Page; 