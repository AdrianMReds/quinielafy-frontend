/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkMainColor: "#2c398a",
      },
      components: {
        quinielaTab: {
          "@apply w-[25%] p-4 border-2 border-darkMainColor text-center rounded-md hover:text-white hover:bg-darkMainColor":
            "",
        },
      },
    },
  },
  plugins: [],
};
