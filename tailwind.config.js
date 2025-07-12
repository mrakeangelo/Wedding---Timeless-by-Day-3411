/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lemon-cream': '#FFF8E1',
        'sky-soft': '#E3F2FD',
        'butter-white': '#FFFDE7',
        'sage': '#E8F5E8',
        'morning-gold': '#FFE082',
        'sunrise': '#FFB74D',
        'dawn': '#FFF3E0',
        'meadow': '#C8E6C9',
        'cloud': '#F5F5F5',
        'dusk': '#424242'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'confetti': 'confetti 3s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' }
        }
      },
      backgroundImage: {
        'morning-gradient': 'linear-gradient(135deg, #FFF8E1 0%, #E3F2FD 100%)',
        'sunrise-gradient': 'linear-gradient(90deg, #FFE082 0%, #FFB74D 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
      }
    },
  },
  plugins: [],
}