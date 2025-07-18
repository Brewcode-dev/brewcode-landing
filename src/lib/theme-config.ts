export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
  border: string;
  shadow: string;
}

export interface ThemeConfig {
  light: ThemeColors;
  dark: ThemeColors;
}

export const themeConfig: ThemeConfig = {
  light: {
    primary: '#ff4f19',
    secondary: '#ff6b3d',
    background: '#FFE9CF',
    surface: '#FFF2E6',
    text: {
      primary: '#000000',
      secondary: '#6d6a75',
      accent: '#ff4f19',
    },
    border: '#ff4f19',
    shadow: 'rgba(0,0,0,0.2)',
  },
  dark: {
    primary: '#ff4f19',
    secondary: '#ff6b3d',
    background: '#0f1623',
    surface: '#111827',
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
      accent: '#ff4f19',
    },
    border: '#ff4f19',
    shadow: 'rgba(0,0,0,0.4)',
  },
};

export const getThemeColors = (theme: Theme): ThemeColors => {
  if (theme === 'auto') {
    // Sprawdź preferencje systemu
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themeConfig.dark
        : themeConfig.light;
    }
    return themeConfig.light; // Domyślnie light dla SSR
  }
  
  return themeConfig[theme];
};

export const applyThemeToCSS = (theme: Theme) => {
  const colors = getThemeColors(theme);
  
  const root = document.documentElement;
  
  // Ustaw zmienne CSS
  root.style.setProperty('--theme-primary', colors.primary);
  root.style.setProperty('--theme-secondary', colors.secondary);
  root.style.setProperty('--theme-background', colors.background);
  root.style.setProperty('--theme-surface', colors.surface);
  root.style.setProperty('--theme-text-primary', colors.text.primary);
  root.style.setProperty('--theme-text-secondary', colors.text.secondary);
  root.style.setProperty('--theme-text-accent', colors.text.accent);
  root.style.setProperty('--theme-border', colors.border);
  root.style.setProperty('--theme-shadow', colors.shadow);
  
  // Dodaj/usuń klasę dark
  if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}; 