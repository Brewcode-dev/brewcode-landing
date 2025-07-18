'use client';

import { useState, useEffect, useCallback } from 'react';
import { Theme, getThemeColors, applyThemeToCSS } from '../lib/theme-config';

const THEME_STORAGE_KEY = 'brewcode-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  // Pobierz zapisany motyw z localStorage
  const getStoredTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && (stored === 'light' || stored === 'dark' || stored === 'auto')) {
      return stored as Theme;
    }
    
    // Sprawdź preferencje systemu
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'auto';
    }
    
    return 'light';
  };

  // Zastosuj motyw
  const applyTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      applyThemeToCSS(newTheme);
    }
  }, []);

  // Przełącz motyw
  const toggleTheme = useCallback(() => {
    const currentTheme = getStoredTheme();
    let newTheme: Theme;
    
    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'auto';
    } else {
      newTheme = 'light';
    }
    
    applyTheme(newTheme);
  }, [applyTheme]);

  // Inicjalizacja
  useEffect(() => {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);
    setIsLoaded(true);
  }, [applyTheme]);

  // Nasłuchuj zmian preferencji systemu
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'auto') {
        applyThemeToCSS('auto');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Pobierz aktualne kolory
  const colors = getThemeColors(theme);
  
  // Sprawdź czy jest ciemny motyw
  const isDark = theme === 'dark' || (theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return {
    theme,
    isDark,
    isLoaded,
    colors,
    setTheme: applyTheme,
    toggleTheme,
  };
}; 