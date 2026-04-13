// tailwind.config.ts
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFF4FF",
          100: "#DBEAFE",
          500: "#2563EB",
          600: "#1D4ED8",
          900: "#1E3A6E",
        },
        success: { 50: "#F0FDF4", 500: "#22C55E" },
        warning: { 50: "#FFFBEB", 500: "#F59E0B" },
        danger: { 50: "#FFF1F2", 500: "#EF4444" },
        surface: { DEFAULT: "#F8FAFC", card: "#FFFFFF" },
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      borderRadius: { card: "12px", btn: "8px" },
    },
  },
};
