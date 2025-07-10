'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sprawdź zapisany motyw w cookies
    const savedTheme = document.cookie
      .split('; ')
      .find(row => row.startsWith('theme='))
      ?.split('=')[1];
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    } else {
      // Domyślnie light mode
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.cookie = 'theme=dark; path=/; max-age=31536000'; // 1 rok
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.cookie = 'theme=light; path=/; max-age=31536000'; // 1 rok
    }
    
    console.log('Theme toggled:', newTheme ? 'dark' : 'light');
    console.log('HTML classes:', document.documentElement.className);
    console.log('Body classes:', document.body.className);
  };

  return (
    <button
      onClick={toggleTheme}
              className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-3 transition-all duration-300"
      aria-label={isDark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-[#ff4f19]" />
      ) : (
        <Moon className="w-5 h-5 text-[#ff4f19]" />
      )}
    </button>
  );
};

export default ThemeToggle; 