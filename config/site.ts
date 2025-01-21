import { Home, Shield, DollarSign, FileText, Users, Newspaper } from "lucide-react"

export const siteConfig = {
  name: "Goofy",
  description: "Goofy is soultion to killing Hackers",
  url: "https://example.com",
  ogImage: "https://anticheat.ac/og.jpg",

  theme: {
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      accent: "hsl(var(--accent))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      muted: "hsl(var(--muted))",
      border: "hsl(var(--border))",
    },
    fonts: {
      sans: "var(--font-sans)",
      heading: "var(--font-heading)",
    },
  },

  navigation: {
    enabled: true,
    items: [
      { title: "Home", href: "/", icon: Home, enabled: true },
      { title: "Features", href: "/features", icon: Shield, enabled: true },
      { title: "Pricing", href: "/pricing", icon: DollarSign, enabled: true },
      { title: "Documentation", href: "/docs", icon: FileText, enabled: true },
      { title: "About", href: "/about", icon: Users, enabled: true },
      { title: "Blog", href: "/blog", icon: Newspaper, enabled: true },
    ],
  },

  features: {
    dashboard: {
      enabled: true,
      url: "/dashboard",
    },
    authentication: {
      enabled: true,
      providers: ["discord", "google", "github"],
    },
    darkMode: {
      enabled: true,
    },
  },

  footer: {
    enabled: true,
    links: [
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
      { title: "Cookies", href: "/cookies" },
    ],
    social: {
      twitter: "https://twitter.com/anticheat",
      github: "https://github.com/anticheat",
      discord: "https://discord.gg/anticheat",
    },
  },

  pages: {
    home: {
      hero: {
        title: "Advanced Anti-Cheat Solution",
        description:
          "Protect your game with our state-of-the-art anti-cheat system. Built for performance and reliability.",
        cta: { primary: "Get Started", secondary: "Learn More" },
      },
      features: [
        {
          title: "Advanced Protection",
          description: "State-of-the-art detection systems to prevent cheating",
          icon: Shield,
        },
        {
          title: "Low Impact",
          description: "Minimal performance impact on your game",
          icon: Home,
        },
        {
          title: "Secure",
          description: "Enterprise-grade security for your game",
          icon: Shield,
        },
      ],
    },
    features: {
      title: "Our Features",
      description: "Discover the power of our anti-cheat solution",
      items: [
        {
          title: "Real-time Detection",
          description: "Instantly identify and prevent cheating attempts",
        },
        {
          title: "Machine Learning",
          description: "Adaptive algorithms that evolve with new cheating methods",
        },
        {
          title: "Cross-platform Support",
          description: "Protect your game across multiple platforms",
        },
        {
          title: "Custom Rules Engine",
          description: "Tailor the anti-cheat to your game's specific needs",
        },
      ],
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      description: "Choose the perfect plan for your game",
      plans: [
        {
          name: "Starter",
          price: "$99",
          description: "Perfect for indie game developers",
          features: [
            "Basic cheat detection",
            "Up to 1,000 monthly active users",
            "Email support",
            "Basic reporting dashboard",
          ],
        },
        {
          name: "Pro",
          price: "$299",
          description: "For professional game studios",
          features: [
            "Advanced cheat detection",
            "Up to 10,000 monthly active users",
            "Priority support",
            "Advanced analytics",
            "Custom rules engine",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "For large-scale games",
          features: [
            "Enterprise-grade protection",
            "Unlimited monthly active users",
            "24/7 dedicated support",
            "Custom integration",
            "Advanced API access",
            "SLA guarantee",
          ],
        },
      ],
    },
    about: {
      title: "About Us",
      description: "We're on a mission to make gaming fair and enjoyable for everyone",
      story: {
        title: "Our Story",
        content:
          "Founded by passionate gamers and security experts, we understand the importance of fair play in gaming. Our team combines decades of experience in game development and cybersecurity to create the most effective anti-cheat solution.",
      },
      values: [
        {
          title: "Innovation",
          description: "We constantly push the boundaries of anti-cheat technology",
        },
        {
          title: "Integrity",
          description: "We believe in transparency and honest communication",
        },
        {
          title: "Impact",
          description: "We measure our success by the positive impact on gaming communities",
        },
      ],
    },
    docs: {
      title: "Documentation",
      description: "Learn how to integrate and use our anti-cheat solution",
      sections: [
        {
          title: "Getting Started",
          items: [
            { title: "Installation", href: "/docs/installation" },
            { title: "Configuration", href: "/docs/configuration" },
          ],
        },
        {
          title: "API Reference",
          items: [
            { title: "Core API", href: "/docs/api/core" },
            { title: "Analytics API", href: "/docs/api/analytics" },
          ],
        },
      ],
    },
    blog: {
      title: "Latest Updates",
      description: "Stay informed about the latest in anti-cheat technology",
      posts: [
        {
          title: "Introducing Our New Machine Learning Engine",
          excerpt: "Learn about our latest advancements in cheat detection using AI.",
          date: "2023-06-01",
          author: "Jane Doe",
          slug: "new-ml-engine",
        },
        {
          title: "The Future of Fair Play in Gaming",
          excerpt: "Exploring upcoming trends in anti-cheat technology.",
          date: "2023-05-15",
          author: "John Smith",
          slug: "future-of-fair-play",
        },
      ],
    },
  },
}

export type SiteConfig = typeof siteConfig

