import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Pebo custom colors
        cream: "hsl(var(--cream))",
        coral: "hsl(var(--coral))",
        purple: "hsl(var(--purple))",
        "dark-text": "hsl(var(--dark-text))",
        yellow: {
          300: "#FFE64D",
          400: "#FFD700",
        },
        blue: {
          500: "#2563EB",
        },
      },
      fontFamily: {
        title: ["Outfit", "Lexend", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "24px",
        btn: "12px",
      },
      boxShadow: {
        "neo-sm": "2px 2px 0px hsl(var(--accent-shadow))",
        "neo-md": "4px 4px 0px hsl(var(--accent-shadow))",
        "neo-lg": "6px 6px 0px hsl(var(--accent-shadow))",
        "neo-coral-sm": "2px 2px 0px hsl(var(--coral))",
        "neo-coral-md": "4px 4px 0px hsl(var(--coral))",
        "neo-coral-lg": "6px 6px 0px hsl(var(--coral))",
        "neo-purple-sm": "2px 2px 0px hsl(var(--purple))",
        "neo-purple-md": "4px 4px 0px hsl(var(--purple))",
        "neo-purple-lg": "6px 6px 0px hsl(var(--purple))",
        "neo-blue-sm": "2px 2px 0px hsl(var(--blue))",
        "neo-blue-md": "4px 4px 0px hsl(var(--blue))",
        "neo-blue-lg": "6px 6px 0px hsl(var(--blue))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
