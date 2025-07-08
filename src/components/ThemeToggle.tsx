'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode (beżowy)
    const savedTheme = getCookie('theme');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    console.log('Przełączanie motywu:', newTheme ? 'dark' : 'light');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      setCookie('theme', 'dark', 365);
      console.log('Dodano klasę dark do html i body');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      setCookie('theme', 'light', 365);
      console.log('Usunięto klasę dark z html i body');
    }
    
    // Sprawdź czy klasy zostały dodane/usunięte
    setTimeout(() => {
      console.log('HTML ma klasę dark:', document.documentElement.classList.contains('dark'));
      console.log('Body ma klasę dark:', document.body.classList.contains('dark'));
      console.log('Aktualny motyw:', getCookie('theme'));
    }, 100);
  };

  // Cookie utility functions
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 bg-[#FFE9CF] dark:bg-gray-800 border-2 border-international-orange-500 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-3 transition-all duration-300"
      aria-label={isDark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-international-orange-500" />
      ) : (
        <Moon className="w-5 h-5 text-international-orange-500" />
      )}
    </button>
  );
};

export default ThemeToggle; 