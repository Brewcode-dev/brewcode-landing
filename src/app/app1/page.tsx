'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, BarChart3, TrendingUp, Zap, Shield, Users, Database, Beer } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/ui/Button';

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
      description: "Monitoruj kluczowe wskaźniki browaru w czasie rzeczywistym z intuicyjnymi wykresami i raportami."
    },
    {
      icon: TrendingUp,
      title: "Predykcyjna analityka",
      description: "Wykorzystaj sztuczną inteligencję do przewidywania trendów sprzedaży i optymalizacji produkcji."
    },
    {
      icon: Zap,
      title: "Automatyzacja raportów",
      description: "Automatycznie generuj i wysyłaj raporty do interesariuszy w określonych interwałach czasowych."
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo danych",
      description: "Zaawansowane szyfrowanie i kontrola dostępu zapewniają bezpieczeństwo Twoich receptur."
    },
    {
      icon: Users,
      title: "Współpraca zespołowa",
      description: "Udostępniaj raporty i dashboardy członkom zespołu z różnymi poziomami uprawnień."
    },
    {
      icon: Database,
      title: "Integracje API",
      description: "Łącz się z popularnymi narzędziami browarniczymi poprzez nasze rozbudowane API."
    }
  ];

  const benefits = [
    "Zwiększenie efektywności produkcji o 40%",
    "Redukcja czasu analizy danych o 60%",
    "Poprawa dokładności prognoz o 35%",
    "Oszczędność czasu na raportowanie o 80%"
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
              BrewMaster Pro
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-body-roboto">
            Zaawansowany system zarządzania recepturami piwa dla browarów rzemieślniczych. 
            Monitoruj, analizuj i optymalizuj produkcję z niezwykłą precyzją.
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
              Odkryj potężne narzędzia, które pomogą Ci zrozumieć i wykorzystać pełny potencjał Twojego browaru.
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
                Dlaczego BrewMaster Pro?
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
                Dołącz do setek browarów, które już korzystają z BrewMaster Pro 
                do optymalizacji produkcji i zwiększenia zysków.
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
                  <span className="text-[#ff4f19] font-bold">100+</span>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Gotowy na rewolucję w browarnictwie?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dołącz do grona innowacyjnych browarów, które już korzystają z naszych rozwiązań.
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

export default App1Page; 