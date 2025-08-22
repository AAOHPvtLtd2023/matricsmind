/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(30px, -20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        bounceIn: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        boxShadow: {
          "glow-orange": "0 0 30px rgba(255, 145, 0, 0.3)",
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite alternate",
        wiggle: "wiggle 3s ease-in-out infinite",
        marquee: "marquee 2s linear infinite",
        fadeIn: "fadeIn 0.6s ease-out both",
        slideUp: "slideUp 1s ease-out 0.1s both",
        fadeindelay: "fadeIn 1s ease-out 0.3s both",
        "float-slow": "float-slow 12s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
      colors: {
        primary: "#ff9100",
        secondary: "#1c3784",
        main: "#000",
      },
      screens: {
        'max-xs': { max: '360px' }, // Custom breakpoint for max-width 480px
      },
      fontFamily: {
      heading: "var(--font-heading)",
      body: "var(--font-body)",
    },
    },
  },
  plugins: [],
};
