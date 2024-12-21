export default {
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["serif"],
      mono: ["monospace"],
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {
      fontFamily: {
        "offside": ["Offside", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "light": "#FFFFFF",
        "dark": "#000000",
        "nav-accent": "#007575",
        "text-accent": "#047F92",
        "text-base": "#919191",
        "btn-primary": "#1A4B52",
        "btn-dark": "#02181B",
        "btn-hover": "#082D32",
        "light-gray": "#F1F1F1",
        "error": "#F87171"
      },
      boxShadow: {
        custom: '0px 5.32px 10.65px 3.99px #33656240',
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./app.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
};
