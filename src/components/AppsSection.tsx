'use client';

import React from 'react';
import { ArrowRight, Zap, BarChart3, Shield, Users, Beer } from 'lucide-react';

const AppsSection = () => {
  const apps = [
    {
      id: 1,
      name: 'BrewMaster Pro',
      description: 'Zaawansowany system zarządzania recepturami piwa dla browarów rzemieślniczych.',
      icon: Beer,
      color: 'bg-orange-500',
      stats: {
        users: '2.5k+',
        rating: '4.9',
        downloads: '15k+'
      },
      features: ['Receptury', 'Kalkulacje', 'Analityka', 'Eksport']
    },
    {
      id: 2,
      name: 'PubTracker',
      description: 'Aplikacja do zarządzania inwentarzem i sprzedażą w pubach i restauracjach.',
      icon: Users,
      color: 'bg-orange-500',
      stats: {
        users: '1.8k+',
        rating: '4.8',
        downloads: '12k+'
      },
      features: ['Inwentarz', 'Sprzedaż', 'Raporty', 'Integracje']
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
          </p>
        </div>

        {/* Apps Grid - jedna aplikacja na wiersz */}
        <div className="space-y-8 mb-16">
          {apps.map((app) => {
            const IconComponent = app.icon;
            
            return (
              <div
                key={app.id}
                className="app-card group bg-orange-500 p-8 border-2 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300"
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
                  <p className="text-lg font-bold text-white/80">
                    {app.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Zap className="w-4 h-4 mr-2 text-white" />
                    <span className="text-sm font-bold text-white">
                      Kluczowe funkcje:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, index) => (
                      <div key={index} className="w-2 h-2 rounded-full mr-3 bg-white/60"></div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/10 border-2 border-orange-500/30">
                    <div className="text-2xl font-black mb-1 text-white">
                      {app.stats.users}
                    </div>
                    <div className="text-xs text-white/70">
                      Użytkownicy
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/10 border-2 border-orange-500/30">
                    <div className="text-2xl font-black mb-1 text-white">
                      {app.stats.rating}
                    </div>
                    <div className="text-xs text-white/70">
                      Ocena
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/10 border-2 border-orange-500/30">
                    <div className="text-2xl font-black mb-1 text-white">
                      {app.stats.downloads}
                    </div>
                    <div className="text-xs text-white/70">
                      Pobrania
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white/10 border-2 border-orange-500/30 text-center">
                    <BarChart3 className="w-8 h-8 mx-auto mb-2 text-white" />
                    <div className="text-sm font-bold text-white">
                      Analityka
                    </div>
                  </div>
                  <div className="p-4 bg-white/10 border-2 border-orange-500/30 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-white" />
                    <div className="text-sm font-bold text-white">
                      Bezpieczeństwo
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 px-6 border-2 border-orange-500 shadow-lg hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold bg-white text-orange-500">
                  Dowiedz się więcej
                </button>
              </div>
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
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 border-2 border-orange-500 shadow-lg hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg inline-flex items-center">
              Skontaktuj się z nami
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection; 