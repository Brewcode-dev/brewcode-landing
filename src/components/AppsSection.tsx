'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, BarChart3, Shield, Users, Beer, TrendingUp, Database, MapPin, MessageSquare, Calendar, Settings } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '../hooks/useScrollAnimation';

const AppsSection = () => {
  const apps = [
    {
      id: 1,
      name: 'BrewMaster Pro',
      description: 'Zaawansowany system zarządzania recepturami piwa dla browarów rzemieślniczych. Monitoruj proces warzenia, kalkuluj koszty i analizuj wyniki w czasie rzeczywistym.',
      icon: Beer,
      color: 'bg-[#ff4f19]',
      href: '/app1',
      stats: {
        users: '2.5k+',
        rating: '4.9',
        downloads: '15k+'
      },
      features: ['Receptury', 'Kalkulacje', 'Analityka', 'Eksport'],
      highlights: [
        'Inteligentne kalkulacje kosztów surowców',
        'Predykcyjna analityka jakości piwa',
        'Integracja z systemami ERP',
        'Mobilna aplikacja dla warzelników'
      ],
      benefits: [
        'Oszczędność 30% na kosztach produkcji',
        'Redukcja czasu planowania o 50%',
        'Poprawa jakości piwa o 25%'
      ]
    },
    {
      id: 2,
      name: 'PubTracker',
      description: 'Kompleksowe rozwiązanie do zarządzania inwentarzem, sprzedażą i obsługą klienta w pubach i restauracjach. Kontroluj zapasy, analizuj trendy sprzedaży i zwiększ zyski.',
      icon: Users,
      color: 'bg-[#ff4f19]',
      href: '/app2',
      stats: {
        users: '1.8k+',
        rating: '4.8',
        downloads: '12k+'
      },
      features: ['Inwentarz', 'Sprzedaż', 'Raporty', 'Integracje'],
      highlights: [
        'Automatyczne zamówienia przy niskich stanach',
        'Analiza preferencji klientów',
        'System lojalnościowy',
        'Integracja z systemami płatności'
      ],
      benefits: [
        'Zwiększenie sprzedaży o 40%',
        'Redukcja marnowania o 60%',
        'Poprawa satysfakcji klientów o 35%'
      ]
    },
    {
      id: 3,
      name: 'BeerCraft Community',
      description: 'Platforma społecznościowa łącząca miłośników piwa kraftowego, browary i ekspertów. Dziel się doświadczeniami, odkrywaj nowe smaki i buduj społeczność.',
      icon: Users,
      color: 'bg-[#ff4f19]',
      href: '/app3',
      stats: {
        users: '10k+',
        rating: '4.7',
        downloads: '25k+'
      },
      features: ['Społeczność', 'Recenzje', 'Mapa browarów', 'Dyskusje'],
      highlights: [
        'Interaktywna mapa browarów rzemieślniczych',
        'System recenzji i ocen piwa',
        'Funkcje społecznościowe i dyskusje',
        'Integracja z mediami społecznościowymi'
      ],
      benefits: [
        'Wzrost świadomości marki o 200%',
        'Zwiększenie zaangażowania o 150%',
        'Budowanie lojalnej społeczności'
      ]
    }
  ];

  // Animation refs
  const headerRef = useFadeInUp();
  const appsRef = useStaggerAnimation(0.3);

  return (
    <section id="apps" className="py-20 bg-theme-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white font-heading-poppins">
            Nasze <span className="text-[#ff4f19]">Aplikacje</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body-roboto">
            Tworzymy aplikacje, które naprawdę pomagają w codziennej pracy browarów i pubów.
          </p>
        </div>

        {/* Apps Grid - jedna aplikacja na wiersz */}
        <div ref={appsRef} className="space-y-8">
          {apps.map((app) => {
            const IconComponent = app.icon;
            
            return (
              <Link
                key={app.id}
                href={app.href}
                className="app-card group bg-theme-background p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300 block hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                {/* App Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center shadow-[4px_4px_0px_0px_var(--theme-shadow)] border-2 border-[#ff4f19]">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:translate-x-2 transition-all duration-300" />
                </div>

                {/* App Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-black mb-2 text-gray-800 dark:text-white font-heading-poppins">
                    {app.name}
                  </h3>
                  <p className="text-sm font-bold text-gray-600 dark:text-gray-300 leading-relaxed font-body-roboto">
                    {app.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#ff4f19]" />
                    <span className="text-xs font-bold text-gray-800 dark:text-white">
                      Kluczowe funkcje:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {app.highlights.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 mr-2 bg-[#ff4f19]"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="w-4 h-4 mr-2 text-[#ff4f19]" />
                    <span className="text-xs font-bold text-gray-800 dark:text-white">
                      Korzyści dla biznesu:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {app.benefits.map((benefit, index) => (
                      <div key={index} className="text-center p-2 bg-theme-surface border-2 border-[#ff4f19] shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                        <span className="text-xs text-gray-800 dark:text-gray-200 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 bg-theme-surface border-2 border-[#ff4f19] shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                    <div className="text-lg font-black mb-1 text-gray-800 dark:text-white">
                      {app.stats.users}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Użytkownicy
                    </div>
                  </div>
                  <div className="text-center p-3 bg-theme-surface border-2 border-[#ff4f19] shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                    <div className="text-lg font-black mb-1 text-gray-800 dark:text-white">
                      {app.stats.rating}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Ocena
                    </div>
                  </div>
                  <div className="text-center p-3 bg-theme-surface border-2 border-[#ff4f19] shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                    <div className="text-lg font-black mb-1 text-gray-800 dark:text-white">
                      {app.stats.downloads}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Pobrania
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 bg-theme-surface border-2 border-[#ff4f19] text-center shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                    <Database className="w-5 h-5 mx-auto mb-1 text-[#ff4f19]" />
                    <div className="text-xs font-bold text-gray-800 dark:text-white">
                      Integracje
                    </div>
                  </div>
                  <div className="p-3 bg-theme-surface border-2 border-[#ff4f19] text-center shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                    <Shield className="w-5 h-5 mx-auto mb-1 text-[#ff4f19]" />
                    <div className="text-xs font-bold text-gray-800 dark:text-white">
                      Bezpieczeństwo
                    </div>
                  </div>
                  <div className="p-3 bg-theme-surface border-2 border-[#ff4f19] text-center shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                    <MessageSquare className="w-5 h-5 mx-auto mb-1 text-[#ff4f19]" />
                    <div className="text-xs font-bold text-gray-800 dark:text-white">
                      Wsparcie
                    </div>
                  </div>
                  <div className="p-3 bg-theme-surface border-2 border-[#ff4f19] text-center shadow-[2px_2px_0px_0px_var(--theme-shadow)]">
                    <Settings className="w-5 h-5 mx-auto mb-1 text-[#ff4f19]" />
                    <div className="text-xs font-bold text-gray-800 dark:text-white">
                      Konfiguracja
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppsSection; 