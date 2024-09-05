/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
fontFamily:{
  rblack:["Roboto-Black","sans-serif"],
  rmedium:["Roboto-Medium","sans-serif"],
  rthin:["Roboto-Thin","sans-serif"],
  rbold:["Roboto-Bold","sans-serif"]
}





    },
  },
  plugins: [],
}

