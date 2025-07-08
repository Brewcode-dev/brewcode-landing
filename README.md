# Brewcode Landing Page

Profesjonalny landing page dla firmy Brewcode, specjalizującej się w aplikacjach dla branży piwa kraftowego i domowego warzenia.

## 🍺 O Projekcie

Brewcode to firma technologiczna skupiająca się na tworzeniu aplikacji dla:

- Browarów rzemieślniczych
- Domowych warzelników
- Miłośników piwa kraftowego

## ✨ Funkcjonalności

- **Animowany Hero Section** z GSAP
- **Trzy aplikacje** z dedykowanymi podstronami
- **Newsletter** z formularzem zapisu
- **Strona kontaktowa** z mapą Leaflet
- **Responsywny design** dla wszystkich urządzeń
- **Nowoczesny UI** z paletą kolorów Bright Sun

## 🚀 Technologie

- **Next.js 15** - Framework React
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Stylowanie
- **GSAP** - Animacje
- **Leaflet** - Mapy
- **Lucide React** - Ikony
- **Framer Motion** - Animacje komponentów

## 📦 Instalacja

1. **Sklonuj repozytorium**

```bash
git clone <repository-url>
cd brewcode-landing
```

2. **Zainstaluj zależności**

```bash
npm install
```

3. **Uruchom serwer deweloperski**

```bash
npm run dev
```

4. **Otwórz przeglądarkę**

```
http://localhost:3000
```

## 🏗️ Struktura Projektu

```
src/
├── app/
│   ├── page.tsx              # Strona główna
│   ├── layout.tsx            # Layout aplikacji
│   ├── globals.css           # Globalne style
│   ├── kontakt/
│   │   └── page.tsx          # Strona kontaktowa
│   ├── app1/
│   │   └── page.tsx          # BrewMaster Pro
│   ├── app2/
│   │   └── page.tsx          # HomeBrew Helper
│   └── app3/
│       └── page.tsx          # BeerCraft Platform
├── components/
│   ├── Header.tsx            # Nagłówek z nawigacją
│   ├── Hero.tsx              # Sekcja hero z animacjami
│   ├── AppsSection.tsx       # Sekcja aplikacji
│   ├── Newsletter.tsx        # Newsletter
│   ├── Footer.tsx            # Stopka
│   └── MapComponent.tsx      # Komponent mapy
```

## 🎨 Kolory

Projekt używa palety kolorów **Bright Sun**:

```css
--bright-sun-50: #fefce8;
--bright-sun-100: #fffac2;
--bright-sun-200: #fff188;
--bright-sun-300: #ffe144;
--bright-sun-400: #fed123;
--bright-sun-500: #eeb404;
--bright-sun-600: #cd8a01;
--bright-sun-700: #a46104;
--bright-sun-800: #874c0c;
--bright-sun-900: #733f10;
--bright-sun-950: #432005;
```

## 📱 Aplikacje

### 1. BrewMaster Pro

Zaawansowana aplikacja do zarządzania browarem rzemieślniczym

- Monitoring warzenia
- Zarządzanie recepturami
- Analiza jakości
- Raporty produkcji

### 2. HomeBrew Helper

Aplikacja mobilna dla domowych warzelników

- Kalkulatory warzenia
- Timery procesu
- Baza receptur
- Dziennik warzenia

### 3. BeerCraft Platform

Platforma społecznościowa dla miłośników piwa

- Recenzje piwa
- Mapa browarów
- Społeczność
- Personalizowane rekomendacje

## 🔧 Skrypty

```bash
npm run dev      # Uruchom serwer deweloperski
npm run build    # Zbuduj aplikację produkcyjną
npm run start    # Uruchom aplikację produkcyjną
npm run lint     # Sprawdź kod ESLint
```

## 🌐 Deployment

Aplikacja jest gotowa do wdrożenia na:

- **Vercel** (zalecane)
- **Netlify**
- **AWS Amplify**
- Dowolny hosting z obsługą Node.js

## 📄 Licencja

Ten projekt jest własnością firmy Brewcode.

## 📞 Kontakt

- **Email**: kontakt@brewcode.pl
- **Telefon**: +48 123 456 789
- **Adres**: Warszawa, Polska

---

**Brewcode** - Technologia dla Pasji Piwa 🍺
# brewcode-landing
