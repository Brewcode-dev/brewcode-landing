'use client';

import { createContext, useContext, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../lib/theme-config';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  isLoaded: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeData = useTheme();

  // Inicjalizacja motywu na poziomie aplikacji
  useEffect(() => {
    // Zapobiegaj migotaniu podczas ładowania
    const preventFlash = () => {
      const root = document.documentElement;
      root.style.visibility = 'hidden';
      
      setTimeout(() => {
        root.style.visibility = 'visible';
      }, 100);
    };

    if (themeData.isLoaded) {
      preventFlash();
    }
  }, [themeData.isLoaded]);

  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
}; 