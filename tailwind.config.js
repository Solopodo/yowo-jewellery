import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        luxe: "0.18em"
      }
    }
  },
  plugins: []
} satisfies Config;