/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-sun': {
          50: '#fefce8',
          100: '#fffac2',
          200: '#fff188',
          300: '#ffe144',
          400: '#fed123',
          500: '#eeb404',
          600: '#cd8a01',
          700: '#a46104',
          800: '#874c0c',
          900: '#733f10',
          950: '#432005',
        },
        'brewcode': {
          primary: '#ff4f19',
          secondary: '#ff6b3d',
        }
      },
      fontFamily: {
        'heading-poppins': ['Poppins', 'sans-serif'],
        'body-roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'slide-right': 'slideRight 20s linear infinite',
        'slide-left': 'slideLeft 20s linear infinite',
        'slide-down': 'slideDown 20s linear infinite',
        'slide-up': 'slideUp 20s linear infinite',
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 8s ease-in-out infinite',
        'float-3': 'float3 7s ease-in-out infinite',
        'float-4': 'float4 9s ease-in-out infinite',
        'float-5': 'float5 5s ease-in-out infinite',
        'float-6': 'float6 10s ease-in-out infinite',
        'float-7': 'float7 6.5s ease-in-out infinite',
        'float-8': 'float8 7.5s ease-in-out infinite',
        'float-9': 'float9 8.5s ease-in-out infinite',
        'float-10': 'float10 9.5s ease-in-out infinite',
        'float-11': 'float11 6s ease-in-out infinite',
        'float-12': 'float12 7s ease-in-out infinite',
        'diagonal-1': 'diagonal1 15s linear infinite',
        'diagonal-2': 'diagonal2 18s linear infinite',
        'diagonal-3': 'diagonal3 12s linear infinite',
        'diagonal-4': 'diagonal4 16s linear infinite',
        'diagonal-5': 'diagonal5 14s linear infinite',
        'diagonal-6': 'diagonal6 17s linear infinite',
        'diagonal-7': 'diagonal7 13s linear infinite',
        'diagonal-8': 'diagonal8 19s linear infinite',
        'diagonal-9': 'diagonal9 11s linear infinite',
        'diagonal-10': 'diagonal10 20s linear infinite',
        'diagonal-11': 'diagonal11 12.5s linear infinite',
        'diagonal-12': 'diagonal12 15.5s linear infinite',
        'diagonal-13': 'diagonal13 13.5s linear infinite',
        'diagonal-14': 'diagonal14 16.5s linear infinite',
        'diagonal-15': 'diagonal15 14.5s linear infinite',
        'diagonal-16': 'diagonal16 17.5s linear infinite',
        'diagonal-17': 'diagonal17 12.5s linear infinite',
        'diagonal-18': 'diagonal18 18.5s linear infinite',
        'diagonal-19': 'diagonal19 11.5s linear infinite',
        'diagonal-20': 'diagonal20 19.5s linear infinite',
        'diagonal-21': 'diagonal21 13.5s linear infinite',
        'diagonal-22': 'diagonal22 16.5s linear infinite',
        'diagonal-23': 'diagonal23 12.5s linear infinite',
        'diagonal-24': 'diagonal24 17.5s linear infinite',
        'diagonal-25': 'diagonal25 14.5s linear infinite',
        'diagonal-26': 'diagonal26 18.5s linear infinite',
        'diagonal-27': 'diagonal27 11.5s linear infinite',
        'diagonal-28': 'diagonal28 19.5s linear infinite',
        'diagonal-29': 'diagonal29 13.5s linear infinite',
        'diagonal-30': 'diagonal30 16.5s linear infinite',
        'diagonal-31': 'diagonal31 12.5s linear infinite',
        'diagonal-32': 'diagonal32 17.5s linear infinite',
        'diagonal-33': 'diagonal33 14.5s linear infinite',
        'diagonal-34': 'diagonal34 18.5s linear infinite',
        'diagonal-35': 'diagonal35 11.5s linear infinite',
        'diagonal-36': 'diagonal36 19.5s linear infinite',
        'title-pulse': 'titlePulse 3s ease-in-out infinite',
        'subtitle-slide': 'subtitleSlide 1s ease-out',
        'text-glow': 'textGlow 2s ease-in-out infinite',
        'button-glow': 'buttonGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' }
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        float5: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' }
        },
        float6: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        float7: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' }
        },
        float8: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        float9: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-28px)' }
        },
        float10: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        float11: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' }
        },
        float12: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        diagonal1: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal2: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal3: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal4: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal5: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal6: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal7: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal8: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal9: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal10: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal11: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal12: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal13: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal14: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal15: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal16: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal17: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal18: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal19: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal20: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal21: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal22: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal23: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal24: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal25: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal26: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal27: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal28: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal29: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal30: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal31: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal32: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal33: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal34: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        diagonal35: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        },
        diagonal36: {
          '0%': { transform: 'translateX(100vw) translateY(-100%)' },
          '100%': { transform: 'translateX(-100%) translateY(100vh)' }
        },
        titlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        subtitleSlide: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(255, 79, 25, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(255, 79, 25, 0.8)' }
        },
        buttonGlow: {
          '0%, 100%': { boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.2)' },
          '50%': { boxShadow: '6px 6px 0px 0px rgba(255, 79, 25, 0.3)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' }
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' }
        }
      }
    },
  },
  plugins: [],
} 