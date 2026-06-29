import type { Project } from "@/features/portfolio/types/project";

export const PROJECTS: Project[] = [
  {
    id: "api-testing-platform",
    title: "API Testing Platform",
    image: "/images/projects/postman.webp",
    period: {
      start: "11.2025",
      end: "Present",
    },
    link: "https://github.com/asayushranjansinha/postman",
    deploymentLink: "https://ayushranjansinha-prismapulseapi.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "TanStack Query",
      "Google Gemini AI",
      "Monaco Editor",
      "Server Actions",
      "OAuth 2.0",
      "RBAC",
      "Tailwind CSS",
    ],
    description: `
A **Postman-like API testing tool** with support for 7 HTTP methods, Monaco Editor for writing request bodies, multi-provider OAuth, and a 3-level workspace structure (Workspaces, Collections, Environments) using Next.js Server Actions.

### Core Features
- **Comprehensive HTTP Support**: Full support for all 7 HTTP methods with dynamic request building.
- **Monaco Editor Integration**: Professional-grade JSON/XML body editing with syntax highlighting and validation.
- **AI-Powered Assistance**: Integrated **Google Gemini AI** to auto-generate request bodies and analyze API responses — cut manual input effort by around 60%.
- **3-Level RBAC**: Owner, Admin, and Member roles with workspace-level access control.
- **CORS Proxy**: Safe cross-origin API testing from within the platform.
- **Server-Side TanStack Query**: Instant UI updates with optimistic caching and background refetching.

### Technical Architecture
- Built with **Next.js Server Actions** and **PostgreSQL** for type-safe, efficient data mutation.
- Full TypeScript implementation with **Zod** schema validation.
- Next.js API/Server Actions act as a proxy to handle CORS for third-party API requests.
    `,
    logo: "/images/projects/postman.svg",
    isExpanded: true,
  },
  {
    id: "workflow-automation-tool",
    title: "Workflow Automation Tool",
    image: "/images/projects/n8n.webp",
    period: {
      start: "08.2024",
      end: "Present",
    },
    link: "https://github.com/asayushranjansinha/n8n",
    deploymentLink: "https://ayushranjansinha-n8n.vercel.app",
    skills: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma ORM",
      "Inngest",
      "Vercel AI SDK",
      "Stripe",
      "PostgreSQL",
      "Docker",
    ],
    description: `
A **drag-and-drop workflow automation platform** where users can connect HTTP triggers, webhooks, conditional logic, and AI model calls (OpenAI, Claude, Gemini) with live execution monitoring.

### Core Features
- **Visual Workflow Editor**: Drag-and-drop node-based builder with real-time state management.
- **Multi-Provider AI**: Integration with OpenAI, Anthropic Claude, and Google Gemini with streaming responses via Vercel AI SDK.
- **Distributed Execution**: Background workflow processing using **Inngest** with real-time monitoring and error tracking.
- **Multi-Trigger System**: HTTP webhooks, conditional logic, and manual triggers.
- **Payments**: Integrated **Stripe** for subscription management.

### Technical Architecture
- **tRPC** for end-to-end type safety across the full stack.
- **Prisma ORM** for the database layer with optimized relational queries.
- **Inngest** for distributed background job processing.
- CORS protection and encrypted credential storage.
    `,
    logo: "/images/projects/automation.svg",
    isExpanded: true,
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    period: {
      start: "10.2025",
      end: "Present",
    },
    link: "https://github.com/asayushranjansinha/portfolio",
    deploymentLink: "https://ayushranjansinha.vercel.app",
    skills: [
      "Next.js 16",
      "TypeScript",
      "GSAP",
      "Lenis",
      "Tailwind CSS 4",
      "Server Components",
      "SEO",
    ],
    description: `
A **config-driven personal portfolio** with fast load times using the latest Next.js and React features with strict TypeScript throughout.

### Features
- **Next.js 16 App Router**: Modern file-based routing with Server Components.
- **GSAP + Lenis**: Scroll animations synced with smooth scrolling for a polished experience.
- **Config-Driven Architecture**: Adding or updating sections does not require touching component logic.
- **SEO Optimized**: Meta tags, structured data, and sitemap generation.
- **Fast Performance**: Optimized for Core Web Vitals with Tailwind CSS 4.
    `,
    logo: "/images/photo.jpeg",
    isExpanded: true,
  },
];
