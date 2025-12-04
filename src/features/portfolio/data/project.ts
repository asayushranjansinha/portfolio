import type { Project } from "@/features/portfolio/types/project";

export const PROJECTS: Project[] = [
  {
    id: "n8n-workflow-automation",
    title: "N8N - Advanced Workflow Automation Platform",
    period: {
      start: "08.2024",
      end: "Present",
    },
    link: "https://github.com/asayushranjansinha/n8n",
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
    link: "https://github.com/asayushranjansinha/lms",
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
    id: "neuron-productivity",
    title: "Neuron - Productivity Software",
    period: {
      start: "06.2023",
      end: "12.2023",
    },
    link: "https://github.com/asayushranjansinha/neuron", // Update with actual link
    skills: [
      "Next.js 13",
      "React",
      "TypeScript",
      "Convex",
      "Clerk Auth",
      "Real-time Sync",
      "Tailwind CSS",
    ],
    description: `
A **Notion-inspired productivity application** with real-time collaboration features, built to demonstrate modern web development patterns.

### Key Features
- **Unlimited Nested Notes**: Hierarchical document structure with infinite nesting
- **Real-Time Synchronization**: Powered by Convex for instant multi-device sync
- **Shareable Links**: Public and private sharing with granular permissions
- **Soft Deletes**: Trash system with restoration capabilities
- **File Uploads**: Attachment support with cloud storage
- **Rich Text Editing**: Advanced editor with formatting options
- **Secure Authentication**: Clerk-based user management

### Real-Time Capabilities
- Instant updates across all connected devices
- Conflict-free collaborative editing
- Live cursor and presence indicators
- Offline support with automatic sync

### User Experience
- Clean, minimal interface inspired by Notion
- Fast navigation and search
- Keyboard shortcuts for power users
- Responsive design for mobile and desktop

Demonstrates expertise in **real-time architectures**, **state synchronization**, and **modern authentication patterns**.
    `,
    logo: "/images/projects/neuron.svg",
  },
  {
    id: "ayush-portfolio",
    title: "Developer Portfolio",
    period: {
      start: "10.2025",
      end: "Present",
    },
    link: "https://ayushranjansinha.vercel.app",
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