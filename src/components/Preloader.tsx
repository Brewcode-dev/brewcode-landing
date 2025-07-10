'use client';

import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    console.log('Preloader mounted');
    // Ukryj preloader po zakończeniu animacji nalewania (2.5s) + dodatkowy czas na płynne zniknięcie
    const timer = setTimeout(() => {
      console.log('Hiding preloader');
      setIsVisible(false);
      
      // Usuń z DOM po zakończeniu animacji fade-out
      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      
      return () => clearTimeout(removeTimer);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-screen min-h-screen z-[9999] bg-[#111827] flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} 
      style={{ height: '100vh', minHeight: '100vh' }}
    >
      {/* Animacja nalewania na fullscreen */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animacja nalewania od dołu */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#ff4f19] animate-fill-up-full">
          <div className="w-full h-full bg-gradient-to-t from-[#ff4f19] to-[#ff6b3d] animate-bubble-full"></div>
        </div>
        
        {/* Piana na górze */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white animate-foam-full"></div>
      </div>
      
      {/* Tekst ładowania */}
      <div className="relative z-10 text-center">
        <div className="text-white text-center">
          <div className="text-2xl font-black mb-4">Ładowanie...</div>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-[#ff4f19] animate-bounce"></div>
            <div className="w-3 h-3 bg-[#ff4f19] animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-[#ff4f19] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 