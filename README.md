# Brewcode Landing Page

Nowoczesna strona landingowa dla aplikacji Brewcode, specjalizująca się w tworzeniu aplikacji dla branży piwowarskiej.

## 🎨 System Motywów

Aplikacja wykorzystuje zaawansowany system zarządzania motywami z następującymi funkcjonalnościami:

### Funkcje

- **3 tryby motywów**: Jasny, Ciemny, Automatyczny
- **Synchronizacja**: Wszystkie komponenty automatycznie dostosowują się do wybranego motywu
- **Preferencje systemu**: Automatyczny tryb dostosowuje się do ustawień systemu operacyjnego
- **Brak migotania**: Zapobieganie migotaniu podczas ładowania strony
- **Persystencja**: Zapamiętywanie wybranego motywu w localStorage

### Architektura

```
src/
├── lib/
│   ├── theme-config.ts      # Centralna konfiguracja motywów
│   └── theme-utils.ts       # Narzędzia do pracy z motywami
├── hooks/
│   └── useTheme.ts          # Hook do zarządzania motywem
└── components/
    ├── ThemeProvider.tsx    # Provider dla motywu
    ├── ThemeToggle.tsx      # Prosty przełącznik
    └── ThemeSelector.tsx    # Zaawansowany selektor
```

### Użycie

#### Podstawowe użycie w komponencie:

```tsx
import { useTheme } from "../hooks/useTheme";

const MyComponent = () => {
  const { theme, isDark, colors, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: colors.background }}>
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  );
};
```

#### Użycie z kontekstem:

```tsx
import { useThemeContext } from "../components/ThemeProvider";

const MyComponent = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
      <option value="light">Jasny</option>
      <option value="dark">Ciemny</option>
      <option value="auto">Automatyczny</option>
    </select>
  );
};
```

### Konfiguracja motywów

Motywy są konfigurowane w `src/lib/theme-config.ts`:

```typescript
export const themeConfig: ThemeConfig = {
  light: {
    primary: "#ff4f19",
    background: "#FFE9CF",
    surface: "#FFF2E6",
    text: {
      primary: "#000000",
      secondary: "#6d6a75",
      accent: "#ff4f19",
    },
    // ...
  },
  dark: {
    primary: "#ff4f19",
    background: "#0a0a0a",
    surface: "#111827",
    text: {
      primary: "#ffffff",
      secondary: "#9ca3af",
      accent: "#ff4f19",
    },
    // ...
  },
};
```

## 🚀 Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Budowanie produkcyjne
npm run build

# Uruchomienie produkcyjne
npm start
```

## 🛠️ Technologie

- **Next.js 15** - Framework React
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS 4** - Stylowanie
- **GSAP** - Animacje
- **Lucide React** - Ikony
- **Framer Motion** - Animacje komponentów

## 📁 Struktura projektu

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Główny layout z ThemeProvider
│   ├── page.tsx           # Strona główna
│   ├── globals.css        # Globalne style z zmiennymi motywu
│   └── [strony]/          # Pozostałe strony
├── components/            # Komponenty React
│   ├── ThemeProvider.tsx  # Provider motywu
│   ├── ThemeSelector.tsx  # Selektor motywu
│   ├── Header.tsx         # Nagłówek z nawigacją
│   ├── Hero.tsx           # Sekcja hero
│   └── [inne komponenty]  # Pozostałe komponenty
├── hooks/                 # Custom hooks
│   └── useTheme.ts        # Hook do zarządzania motywem
└── lib/                   # Narzędzia i konfiguracja
    ├── theme-config.ts    # Konfiguracja motywów
    └── theme-utils.ts     # Narzędzia do motywów
```

## 🎯 Funkcjonalności

- **Responsywny design** - Dostosowany do wszystkich urządzeń
- **Animacje** - Płynne animacje z GSAP i Framer Motion
- **SEO** - Zoptymalizowane meta tagi i struktura
- **Dostępność** - Zgodne z WCAG 2.1
- **Performance** - Optymalizowane ładowanie i renderowanie

## 🔧 Konfiguracja

### Zmienne środowiskowe

Skopiuj `env.example` do `.env.local` i dostosuj ustawienia:

```bash
cp env.example .env.local
```

### Tailwind CSS

Konfiguracja w `tailwind.config.js` zawiera:

- Custom kolory Brewcode
- Animacje
- Fonty
- Zmienne motywu

## 📝 Licencja

MIT License - zobacz plik LICENSE dla szczegółów.
