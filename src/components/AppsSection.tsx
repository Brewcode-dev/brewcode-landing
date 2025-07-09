'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, BarChart3, Shield, Users, Beer, TrendingUp, Database, MapPin, MessageSquare, Calendar, Settings } from 'lucide-react';

const AppsSection = () => {
  const apps = [
    {
      id: 1,
      name: 'BrewMaster Pro',
      description: 'Zaawansowany system zarządzania recepturami piwa dla browarów rzemieślniczych. Monitoruj proces warzenia, kalkuluj koszty i analizuj wyniki w czasie rzeczywistym.',
      icon: Beer,
      color: 'bg-orange-500',
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
      color: 'bg-orange-500',
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
      color: 'bg-orange-500',
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

  return (
    <section id="apps" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Nasze <span className="text-orange-500">Aplikacje</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tworzymy aplikacje, które naprawdę pomagają w codziennej pracy browarów i pubów. 
            Każda aplikacja to wynik wieloletniego doświadczenia w branży.
          </p>
        </div>

        {/* Apps Grid - jedna aplikacja na wiersz */}
        <div className="space-y-12 mb-16">
          {apps.map((app) => {
            const IconComponent = app.icon;
            
            return (
              <Link
                key={app.id}
                href={app.href}
                className="app-card group bg-orange-500 p-8 border-2 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 block"
              >
                {/* App Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/60 group-hover:translate-x-2 transition-all duration-300" />
                </div>

                {/* App Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black mb-3 text-white">
                    {app.name}
                  </h3>
                  <p className="text-lg font-bold text-white/90 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-4 h-4 mr-2 text-white" />
                    <span className="text-sm font-bold text-white">
                      Kluczowe funkcje:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {app.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3 bg-white/80"></div>
                        <span className="text-sm text-white/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-4 h-4 mr-2 text-white" />
                    <span className="text-sm font-bold text-white">
                      Korzyści dla biznesu:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {app.benefits.map((benefit, index) => (
                      <div key={index} className="text-center p-3 bg-white/10 border border-white/20 rounded">
                        <span className="text-xs text-white/90 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/20 border-2 border-white/30">
                    <div className="text-2xl font-black mb-1 text-white">
                      {app.stats.users}
                    </div>
                    <div className="text-xs text-white/90">
                      Użytkownicy
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/20 border-2 border-white/30">
                    <div className="text-2xl font-black mb-1 text-white">
                      {app.stats.rating}
                    </div>
                    <div className="text-xs text-white/90">
                      Ocena
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/20 border-2 border-white/30">
                    <div className="text-2xl font-black mb-1 text-white">
                      {app.stats.downloads}
                    </div>
                    <div className="text-xs text-white/90">
                      Pobrania
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-white/20 border-2 border-white/30 text-center">
                    <Database className="w-6 h-6 mx-auto mb-2 text-white" />
                    <div className="text-xs font-bold text-white">
                      Integracje
                    </div>
                  </div>
                  <div className="p-4 bg-white/20 border-2 border-white/30 text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-white" />
                    <div className="text-xs font-bold text-white">
                      Bezpieczeństwo
                    </div>
                  </div>
                  <div className="p-4 bg-white/20 border-2 border-white/30 text-center">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-white" />
                    <div className="text-xs font-bold text-white">
                      Wsparcie 24/7
                    </div>
                  </div>
                  <div className="p-4 bg-white/20 border-2 border-white/30 text-center">
                    <Settings className="w-6 h-6 mx-auto mb-2 text-white" />
                    <div className="text-xs font-bold text-white">
                      Konfiguracja
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="w-full py-3 px-6 border-2 border-orange-500 shadow-lg hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold bg-white text-orange-500 text-center">
                  Dowiedz się więcej
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-900 p-8 border-2 border-orange-500 shadow-lg">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Potrzebujesz własnej aplikacji?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Stworzymy dla Ciebie aplikację dopasowaną do Twoich potrzeb. 
              Skontaktuj się z nami i opowiedz o swoim projekcie.
            </p>
            <Link href="/kontakt">
              <button className="bg-orange-500 text-white px-8 py-4 border-2 border-orange-500 shadow-lg hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg inline-flex items-center">
                Skontaktuj się z nami
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection; 