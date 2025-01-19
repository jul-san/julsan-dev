import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        dohyeon: ['"Do Hyeon"', 'sans-serif'],
        questrial: ['"Questrial"', 'sans-serif']
      },
    },
  },
  
  plugins: [require('preline/plugin'),],
};
export default config;
