// src/theme.config.ts

export const themeConfig = {
    // 1. BRANDING (Change these per client)
    brand: {
        name: "NLP Coaching Agency", 
        tagline: "Empowering Your Mind, Transforming Your Life",
        logoUrl: "/assets/default-logo.svg",
    },

    // 2. DESIGN TOKENS (Map these to Tailwind)
    colors: {
        primary: "#2563EB", // Extract fallback: Deep Blue
        secondary: "#10B981", // Extract fallback: Emerald Green
        accent: "#F59E0B", // Accent color: Amber
        background: "#F8FAFC", // Page background: Slate 50
        text: "#0F172A", // Default text color: Slate 900
    },
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Roboto', sans-serif",
    },
    spacing: {
        small: "0.5rem",
        medium: "1rem",
        large: "2rem",
        xlarge: "4rem",
    },

    // 3. FEATURE FLAGS (Toggle system capabilities per client)
    features: {
        enableBooking: true,
        enableOrdering: false,
        enableBlog: true,
    },

    // 4. EXTERNAL INTEGRATIONS
    socials: {
        instagram: "https://instagram.com/your_handle",
        linkedin: "https://linkedin.com/in/your_handle",
    },
    contact: {
        email: "contact@nlpcoaching.com",
        phone: "+1-234-567-8900",
    }
};