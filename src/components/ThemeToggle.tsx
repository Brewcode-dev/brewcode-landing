'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, isDark, isLoaded, toggleTheme } = useTheme();

  // Nie renderuj przed załadowaniem, aby uniknąć migotania
  if (!isLoaded) {
    return (
      <div className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
        <div className="w-5 h-5 bg-[#ff4f19] animate-pulse"></div>
      </div>
    );
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5 text-[#ff4f19]" />;
      case 'dark':
        return <Moon className="w-5 h-5 text-[#ff4f19]" />;
      case 'auto':
        return <Monitor className="w-5 h-5 text-[#ff4f19]" />;
      default:
        return <Sun className="w-5 h-5 text-[#ff4f19]" />;
    }
  };

  const getAriaLabel = () => {
    switch (theme) {
      case 'light':
        return 'Przełącz na ciemny motyw';
      case 'dark':
        return 'Przełącz na automatyczny motyw';
      case 'auto':
        return 'Przełącz na jasny motyw';
      default:
        return 'Przełącz motyw';
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'light':
        return 'Ciemny motyw';
      case 'dark':
        return 'Automatyczny motyw';
      case 'auto':
        return 'Jasny motyw';
      default:
        return 'Przełącz motyw';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-3 transition-all duration-300 relative group"
      aria-label={getAriaLabel()}
      title={getTooltip()}
    >
      {getIcon()}
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {getTooltip()}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
};

export default ThemeToggle; 