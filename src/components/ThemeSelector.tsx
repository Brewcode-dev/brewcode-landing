'use client';

import { useState } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../lib/theme-config';

const ThemeSelector = () => {
  const { theme, setTheme, isLoaded } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { value: Theme; label: string; icon: React.ReactNode; description: string }[] = [
    {
      value: 'light',
      label: 'Jasny',
      icon: <Sun className="w-4 h-4" />,
      description: 'Jasny motyw'
    },
    {
      value: 'dark',
      label: 'Ciemny',
      icon: <Moon className="w-4 h-4" />,
      description: 'Ciemny motyw'
    },
    {
      value: 'auto',
      label: 'Automatyczny',
      icon: <Monitor className="w-4 h-4" />,
      description: 'Dostosowuje się do systemu'
    }
  ];

  const currentTheme = themes.find(t => t.value === theme);

  if (!isLoaded) {
    return (
      <div className="relative">
        <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
          <div className="w-4 h-4 bg-[#ff4f19] animate-pulse"></div>
          <span className="text-[#ff4f19] font-bold">Motyw</span>
          <ChevronDown className="w-4 h-4 text-[#ff4f19]" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-200"
        aria-label="Wybierz motyw"
      >
        {currentTheme?.icon}
        <span className="text-[#ff4f19] font-bold">{currentTheme?.label}</span>
        <ChevronDown className={`w-4 h-4 text-[#ff4f19] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] z-20">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-[#ff4f19]/10 transition-colors duration-150 ${
                  theme === themeOption.value
                    ? 'bg-[#ff4f19]/20 text-[#ff4f19]'
                    : 'text-gray-800 dark:text-white'
                }`}
              >
                <div className="text-[#ff4f19]">
                  {themeOption.icon}
                </div>
                <div>
                  <div className="font-bold">{themeOption.label}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {themeOption.description}
                  </div>
                </div>
                {theme === themeOption.value && (
                  <div className="ml-auto w-2 h-2 bg-[#ff4f19]"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector; 