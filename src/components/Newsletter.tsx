'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Tutaj można dodać logikę wysyłania emaila
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-12 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
          <div className="text-center max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
                Bądź na <span className="text-[#ff4f19]">bieżąco</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Zapisz się do naszego newslettera i otrzymuj najnowsze informacje o naszych aplikacjach, 
                aktualizacjach i trendach w branży piwowarskiej.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]">
                  <span className="text-white font-black text-lg">🚀</span>
                </div>
                <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
                  Nowe funkcje
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Jako pierwszy dowiesz się o nowych funkcjach naszych aplikacji.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]">
                  <span className="text-white font-black text-lg">💡</span>
                </div>
                <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
                  Wskazówki i porady
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Praktyczne wskazówki dotyczące zarządzania browarem i pubem.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]">
                  <span className="text-white font-black text-lg">🎉</span>
                </div>
                <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
                  Ekskluzywne oferty
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Specjalne rabaty i oferty dostępne tylko dla subskrybentów.
                </p>
              </div>
            </div>

            {/* Newsletter Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Twój adres email"
                      className="w-full px-6 py-4 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] text-gray-800 dark:text-white bg-white dark:bg-gray-700 font-bold focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#ff4f19] text-white font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px] flex items-center justify-center"
                  >
                    <span>Zapisz się</span>
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Możesz zrezygnować z subskrypcji w każdej chwili. Szanujemy Twoją prywatność.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-green-100 dark:bg-green-900 p-6 border-4 border-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                    <span className="text-green-800 dark:text-green-200 font-bold text-lg">
                      Dziękujemy za zapisanie się!
                    </span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-center mt-2">
                    Sprawdź swoją skrzynkę email, aby potwierdzić subskrypcję.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 