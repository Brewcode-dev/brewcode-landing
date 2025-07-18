import { Theme, getThemeColors } from './theme-config';

/**
 * Generuje klasy CSS na podstawie motywu
 */
export const getThemeClasses = (theme: Theme, baseClasses: string = '') => {
  const colors = getThemeColors(theme);
  
  return {
    background: `${baseClasses} bg-[${colors.background}]`,
    surface: `${baseClasses} bg-[${colors.surface}]`,
    text: `${baseClasses} text-[${colors.text.primary}]`,
    textSecondary: `${baseClasses} text-[${colors.text.secondary}]`,
    textAccent: `${baseClasses} text-[${colors.text.accent}]`,
    border: `${baseClasses} border-[${colors.border}]`,
    shadow: `${baseClasses} shadow-[4px_4px_0px_0px_${colors.shadow}]`,
  };
};

/**
 * Sprawdza czy preferencje systemu są ciemne
 */
export const isSystemDark = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Nasłuchuje zmian preferencji systemu
 */
export const watchSystemTheme = (callback: (isDark: boolean) => void) => {
  if (typeof window === 'undefined') return () => {};

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    callback(e.matches);
  };

  mediaQuery.addEventListener('change', handleChange);
  
  return () => mediaQuery.removeEventListener('change', handleChange);
};

/**
 * Pobiera preferowany motyw na podstawie preferencji systemu
 */
export const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  
  const stored = localStorage.getItem('brewcode-theme');
  if (stored && (stored === 'light' || stored === 'dark' || stored === 'auto')) {
    return stored as Theme;
  }
  
  return isSystemDark() ? 'auto' : 'light';
};

/**
 * Zapisuje motyw w localStorage
 */
export const saveTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('brewcode-theme', theme);
};

/**
 * Generuje style inline na podstawie motywu
 */
export const getThemeStyles = (theme: Theme) => {
  const colors = getThemeColors(theme);
  
  return {
    backgroundColor: colors.background,
    color: colors.text.primary,
    borderColor: colors.border,
    boxShadow: `4px 4px 0px 0px ${colors.shadow}`,
  };
};

/**
 * Sprawdza czy motyw jest ciemny
 */
export const isDarkTheme = (theme: Theme): boolean => {
  if (theme === 'dark') return true;
  if (theme === 'auto') return isSystemDark();
  return false;
}; 