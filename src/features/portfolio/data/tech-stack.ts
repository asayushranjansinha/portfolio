import { TechStack } from "@/features/portfolio/types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },
  {
    key: "springboot",
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
    categories: ["Framework", "Backend"],
  },
  {
    key: "html5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language", "Markup"],
  },
  {
    key: "css",
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language", "Styling"],
  },

  // Runtime Environments
  {
    key: "nodedotjs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
    theme:true,
  },

  // Frontend Frameworks & Libraries
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextdotjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "expo",
    title: "Expo",
    href: "https://expo.dev/",
    categories: ["Framework", "Mobile"],
    theme: true,
  },

  // Styling & UI
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework", "CSS"],
  },
  {
    key: "shadcnui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },

  // Animation
  {
    key: "framer",
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
    categories: ["Library", "Animation"],
  },
  {
    key: "gsap",
    title: "GSAP",
    href: "https://greensock.com/gsap/",
    categories: ["Library", "Animation"],
  },

  // State Management & Data
  {
    key: "reactquery",
    title: "TanStack Query",
    href: "https://tanstack.com/query",
    categories: ["Library", "State Management"],
    theme: true,
  },
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
  },
  {
    key: "zustand",
    title: "Zustand",
    href: "https://zustand.docs.pmnd.rs/",
    categories: ["State Management"],
  },
  {
    key: "trpc",
    title: "tRPC",
    href: "https://trpc.io/",
    categories: ["Framework", "API"],
    theme: true,
  },

  // Backend & API
  {
    key: "express",
    title: "Express",
    href: "https://expressjs.com/",
    categories: ["Framework", "Backend"],
    theme: true,
  },
  {
    key: "firebase",
    title: "Firebase",
    href: "https://firebase.google.com/",
    categories: ["Backend", "Database", "Hosting"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database", "Cache"],
  },
  {
    key: "bullmq",
    title: "BullMQ",
    href: "https://docs.bullmq.io/",
    categories: ["Queue", "Backend"],
  },
  {
    key: "inngest",
    title: "Inngest",
    href: "https://www.inngest.com/",
    categories: ["Queue", "Backend"],
    theme: true,
  },
  {
    key: "prisma",
    title: "Prisma",
    href: "https://www.prisma.io/",
    categories: ["Database", "ORM"],
    theme: true,
  },
  {
    key: "jsonwebtokens",
    title: "JSON Web Tokens",
    href: "https://jwt.io/",
    categories: ["Authentication", "Security"],
    theme:true,
  },
  {
    key: "cloudinary",
    title: "Cloudinary",
    href: "https://cloudinary.com/",
    categories: ["Media", "Cloud"],
    theme: true,
  },
  {
    key: "cloudflare",
    title: "Cloudflare",
    href: "https://www.cloudflare.com/",
    categories: ["CDN", "Cloud"],
  },

  // Database
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "mongoose",
    title: "Mongoose",
    href: "https://mongoosejs.com/",
    categories: ["Library", "ODM"],
  },

  // AI & Integration
  {
    key: "googlegemini",
    title: "Google Gemini",
    href: "https://gemini.google.com/",
    categories: ["AI", "API"],
    // theme: true,
  },
  {
    key: "anthropic",
    title: "Anthropic",
    href: "https://anthropic.com/",
    categories: ["AI", "API"],
    theme: true,
  },
  {
    key: "stripe",
    title: "Stripe",
    href: "https://stripe.com/",
    categories: ["Payment", "Integration"],
  },
  {
    key: "phonepe",
    title: "PhonePe",
    href: "https://www.phonepe.com/",
    categories: ["Payment", "Integration"],
  },
  {
    key: "razorpay",
    title: "Razorpay",
    href: "https://razorpay.com/",
    categories: ["Payment", "Integration"],
  },

  // Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
    theme: true,
  },
  {
    key: "azure",
    title: "Microsoft Azure",
    href: "https://azure.microsoft.com/",
    categories: ["Cloud", "CI/CD"],
    theme: true,
  },
  {
    key: "githubactions",
    title: "GitHub Actions",
    href: "https://github.com/features/actions",
    categories: ["CI/CD", "DevOps"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Cloud", "Hosting"],
    theme: true,
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
];
