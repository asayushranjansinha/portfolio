import type { Project } from "@/features/portfolio/types/project";

export const PROJECTS: Project[] = [
  {
    id: "postman-prismapulseapi",
    title: "POSTMAN (PrismaPulseAPI) - Modern API Development Platform",
    period: {
      start: "11.2025",
      end: "Present",
    },
    link: "https://github.com/asayushranjansinha/postman",
    deploymentLink: "https://ayushranjansinha-prismapulseapi.vercel.app/", // Deployed URL
    skills: [
      "Next.js 15.5",
      "React 19",
      "TypeScript",
      "Prisma 6.19",
      "PostgreSQL",
      "Better Auth",
      "Google AI SDK (Gemini)",
      "Monaco Editor",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS 4.x",
      "Server Actions",
      "Docker",
    ],
    description: `
A **powerful, feature-rich API client and testing platform** designed as a robust alternative to tools like Postman, showcasing enterprise-grade full-stack development.

### Core Features
- **Comprehensive HTTP Support**: Full support for all HTTP methods (GET, POST, etc.) with dynamic request building.
- **Advanced Request Editor**: Integrated **Monaco Editor** for professional-grade JSON/XML body editing, with syntax highlighting and validation.
- **Enterprise Authentication**: Secure multi-provider OAuth (GitHub, Google) and email/password authentication using **Better Auth**, featuring Role-Based Access Control (RBAC) for workspaces.
- **AI-Powered Assistance**: Integration with **Google Gemini** for intelligent request generation and error response analysis.
- **Organization & Collaboration**: Full support for Workspaces, Collections, and Environment Variables for effective API workflow management.
- **Response Visualization**: Detailed view of status, time, size, headers, and body.

### Technical Architecture
- **Production-Ready**: Built with Next.js Server Actions and Prisma for type-safe, efficient data mutation.
- **Type-Safe End-to-End**: Full TypeScript implementation with **Zod** schema validation.
- **Complex State Management**: Uses **Zustand** for client state (active tabs) and **TanStack Query** for server state (optimistic updates).
- **Proxy Pattern**: Next.js API/Server Actions act as a proxy to handle CORS for third-party API requests.
- **Modern UI/UX**: Built with Shadcn/Radix UI and Tailwind CSS v4.

### Key Highlights
- Demonstrates advanced skills in **Server Actions**, **Monaco Editor** integration, **RBAC**, and **AI-powered features**.
- Complete relational database schema for User, Workspace, Collection, Request, Environment, and RequestRun.
- Clear **Feature-Based Structure** and **Server/Client Separation**.
  `,
    logo: "/images/projects/postman.svg",
    isExpanded: true,
  },
  {
    id: "n8n-workflow-automation",
    title: "N8N - Advanced Workflow Automation Platform",
    period: {
      start: "08.2024",
      end: "Present",
    },
    link: "https://github.com/asayushranjansinha/n8n",
    deploymentLink: "https://ayushranjansinha-n8n.vercel.app",
    skills: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Inngest",
      "Better Auth",
      "Vercel AI SDK",
      "XYFlow",
      "Stripe",
      "Redis",
      "Docker",
      "Serverless",
    ],
    description: `
A **production-ready workflow automation platform** inspired by n8n, showcasing enterprise-grade architecture and modern full-stack development.

### Core Features
- **Visual Workflow Editor**: Drag-and-drop node-based builder powered by XYFlow (ReactFlow) with real-time state management using Jotai
- **AI-Powered Workflows**: Multi-provider integration (OpenAI GPT, Anthropic Claude, Google Gemini) with streaming responses via Vercel AI SDK
- **Distributed Execution**: Background workflow processing using Inngest with real-time monitoring and error tracking
- **Multi-Trigger System**: HTTP webhooks, Google Forms integration, Stripe payment events, and manual triggers
- **Enterprise Authentication**: Better Auth with GitHub/Google OAuth + email/password, secure session management

### Technical Architecture
- **Type-Safe End-to-End**: Full TypeScript implementation with tRPC for type-safe APIs and Prisma for database operations
- **Feature-Based Structure**: Organized by domain (auth, workflows, executions, credentials, subscriptions)
- **Server/Client Separation**: Clear boundaries with React Server Components and optimistic updates via TanStack Query
- **Atomic State Management**: Jotai atoms for granular, composable workflow state
- **Real-Time Collaboration**: Live workflow execution status with Inngest Realtime channels

### Security & Scalability
- **Encrypted Credentials**: AES-256 encryption for API keys and sensitive data
- **Rate Limiting**: Request throttling and usage-based billing integration
- **Comprehensive Monitoring**: Sentry integration for error tracking and performance monitoring
- **Production-Grade DB**: PostgreSQL with Prisma migrations, cascading deletes, and optimized queries

### Monetization
- Full **Stripe** and **Polar.sh** integration for subscription management
- Usage-based billing with execution tracking
- Customer portal for self-service management

### DevOps Excellence
- Docker containerization with docker-compose
- Multi-process development with mprocs (Next.js, Inngest, ngrok)
- Automated migrations and environment validation
- Vercel deployment with production optimizations

### Key Highlights
- **Complete database schema** with 8+ related models (User, Workflow, Node, Connection, Execution, Credential, etc.)
- **15+ technology integrations** across AI, payments, authentication, and monitoring
- **Webhook support** for external service integrations (Stripe, Google Forms)
- **Execution history** with complete audit trails and error stack traces
- **Template engine** (Handlebars) for dynamic content generation

Built with **industry best practices**, demonstrating proficiency in distributed systems, real-time architectures, type-safe development, and modern React patterns.
    `,
    logo: "/images/projects/automation.svg",
    isExpanded: true,
  },
  {
    id: "lms-mobile-app",
    title: "Learning Management System (LMS)",
    period: {
      start: "01.2024",
      end: "Present",
    },
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "AWS S3",
      "REST APIs",
    ],
    description: `
Production-grade mobile-first Learning Management System built for **Rahul Solutions**, currently in final development phase before App Store and Play Store launch.

### Core Features
- **Mobile-First Design**: Built with Expo (React Native) for seamless iOS and Android experience
- **Course Delivery System**: Video lectures, notes, assignments with secure S3-backed file delivery
- **Access-Code Assessments**: Test flows with role-based access control
- **DLT-Verified OTP**: Secure SMS-based authentication for user verification
- **Role-Based Dashboards**: Separate interfaces for students, instructors, and admins
- **Job Listings Integration**: Connect learners with opportunities

### ⚡ Performance Optimizations
- **Redis Caching**: Reduced response times and improved scalability
- **BullMQ Workers**: Background task processing for scheduled OTP sending and progress analytics
- **Optimized Media Delivery**: S3 integration for efficient video streaming and file downloads
- **20% Page Load Improvement**: Performance gains from caching and optimization strategies

### Security & Access Control
- DLT SMS verification for user authentication
- Access-code-based test enrollment system
- Secure file delivery with role-based permissions
- JWT-based authentication and authorization

###  Technical Stack
- **Frontend**: Expo, React Native, TypeScript
- **Backend**: Node.js, Express.js, PostgreSQL
- **Infrastructure**: Redis, BullMQ, AWS S3
- **Authentication**: JWT, DLT SMS OTP

Currently handling final testing and optimization before public launch on mobile app stores.
    `,
    logo: "/images/projects/lms.svg",
    isExpanded: true,
  },
  {
    id: "ayush-portfolio",
    title: "Developer Portfolio",
    period: {
      start: "10.2025",
      end: "Present",
    },
    link: "https://github.com/asayushranjansinha/portfolio",
    deploymentLink: "https://ayushranjansinha.vercel.app",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MDX",
      "SEO",
      "Server Components",
      "TypeScript",
    ],
    description: `
Personal developer portfolio showcasing projects, experience, blog posts, and technical writing.

### Features
- **Next.js App Router**: Modern file-based routing with Server Components
- **MDX-Powered Content**: Blog posts and documentation with React components
- **Dynamic OG Images**: Automated social media previews
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Component Demos**: Interactive showcases of reusable UI components
- **Fast Performance**: Optimized for Core Web Vitals

### Design Philosophy
- Minimal, clean UI with Tailwind CSS
- Dark mode support
- Responsive across all devices
- Accessibility-first approach

Built to demonstrate **modern web development**, **content strategy**, and **technical communication** skills.
    `,
    logo: "/images/photo.jpeg",
  },
];
