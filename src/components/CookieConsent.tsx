'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';

interface CookieConsentProps {
  forceShow?: boolean;
}

const CookieConsent = ({ forceShow = false }: CookieConsentProps) => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Sprawdź czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem('cookie-consent');
    if (!consent || forceShow) {
      setShowConsent(true);
    }
  }, [forceShow]);

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(allPreferences));
    setShowConsent(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setShowConsent(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  if (!showConsent) return null;

  return (
    <>
      {/* Główny banner cookie consent */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-4 border-[#ff4f19] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)] z-50 p-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-[#ff4f19]">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Używamy plików cookie
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl">
                  Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie. 
                  Możesz dowiedzieć się więcej o tym, jakich plików cookie używamy lub wyłączyć je w ustawieniach.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 border-2 border-[#ff4f19] text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-bold rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
              >
                Ustawienia
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-bold rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
              >
                Tylko niezbędne
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 bg-[#ff4f19] text-white border-2 border-[#ff4f19] hover:scale-105 hover:rotate-1 transition-all duration-300 font-bold rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
              >
                Akceptuję wszystkie
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal z ustawieniami */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center border-2 border-[#ff4f19]">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-800 dark:text-white">
                    Ustawienia plików cookie
                  </h2>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Niezbędne pliki cookie */}
                <div className="border-4 border-[#ff4f19] rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center border-2 border-[#ff4f19]">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Niezbędne pliki cookie</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Zawsze aktywne</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-[#ff4f19]">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Te pliki cookie są niezbędne do działania strony internetowej i nie mogą być wyłączone.
                  </p>
                </div>

                {/* Analityczne pliki cookie */}
                <div className="border-4 border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 border-[#ff4f19] ${
                        preferences.analytics ? 'bg-orange-500' : 'bg-gray-400'
                      }`}>
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Analityczne pliki cookie</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 border-2 border-[#ff4f19] ${
                        preferences.analytics 
                          ? 'bg-orange-500 justify-end' 
                          : 'bg-gray-300 dark:bg-gray-600 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1 shadow-sm"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Te pliki cookie pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony, 
                    pomagając nam ulepszać nasze usługi.
                  </p>
                </div>

                {/* Marketingowe pliki cookie */}
                <div className="border-4 border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 border-[#ff4f19] ${
                        preferences.marketing ? 'bg-orange-500' : 'bg-gray-400'
                      }`}>
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Marketingowe pliki cookie</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Używane do śledzenia odwiedzających na stronach internetowych</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 border-2 border-[#ff4f19] ${
                        preferences.marketing 
                          ? 'bg-orange-500 justify-end' 
                          : 'bg-gray-300 dark:bg-gray-600 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1 shadow-sm"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Te pliki cookie są używane do śledzenia odwiedzających na stronach internetowych. 
                    Intencją jest wyświetlanie reklam, które są istotne i angażujące dla poszczególnych użytkowników.
                  </p>
                </div>

                {/* Preferencje pliki cookie */}
                <div className="border-4 border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 border-[#ff4f19] ${
                        preferences.preferences ? 'bg-orange-500' : 'bg-gray-400'
                      }`}>
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-white">Preferencje pliki cookie</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Pozwalają stronie zapamiętać informacje, które zmieniają sposób jej działania</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('preferences')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 border-2 border-[#ff4f19] ${
                        preferences.preferences 
                          ? 'bg-orange-500 justify-end' 
                          : 'bg-gray-300 dark:bg-gray-600 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1 shadow-sm"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Te pliki cookie pozwalają stronie zapamiętać informacje, które zmieniają sposób jej działania 
                    lub wyglądu, takie jak preferowany język lub region, w którym się znajdujesz.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-bold rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  Anuluj
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-3 bg-[#ff4f19] text-white border-2 border-[#ff4f19] hover:scale-105 hover:rotate-1 transition-all duration-300 font-bold rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  Zapisz preferencje
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent; 