import { Experience } from "@/features/portfolio/types/experience";

export const EXPERIENCES: Experience[] = [
  {
    id: "cimba-ai",
    companyName: "Cimba.ai",
    positions: [
      {
        id: "frontend-engineer",
        title: "Frontend Engineer",
        duration: {
          start: "04.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built a **Proactive Signals engine** with fully custom recurrence schedules (e.g. Mon–Fri 8:30–12:30 or any day/time pattern). A cron-based scheduler triggers LLM calls against live agent data and dispatches conditional email alerts with no manual steps involved.
- Built an **Agent-Driven Dynamic Dashboard** feature that assembles just-in-time dashboards — charts, KPIs, and tables from live agent data — so business leaders get a contextual view and can add follow-up actions directly from the dashboard.
- Built **Signal Execution Reports** that surface every automated signal run with its LLM input, reasoning chain, model output, and email decision — full trace coverage for debugging and auditing.
- Cut redundant API calls across the signals dashboard by integrating **TanStack Query** with caching, background refetching, and stale-while-revalidate.
- Reduced re-render count in data-heavy dashboard components using **React.memo**, **useMemo**, and **useCallback** — decomposed 10+ oversized components and standardized data-fetching patterns across the codebase.`,
        skills: [
          "React.js",
          "TypeScript",
          "TanStack Query",
          "LLM Integration",
          "Cron Scheduling",
          "Performance Optimization",
          "React.memo",
          "useMemo",
          "useCallback",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "etiot-in-work-global",
    companyName: "ETIOT Innovations | In Work Global",
    positions: [
      {
        id: "software-engineer",
        title: "Software Engineer",
        duration: {
          start: "01.2026",
          end: "04.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `**Client:** Bharat Petroleum Corporation Limited (BPCL) and Deloitte

- Led implementation of frontend and backend modules while coordinating with business analysts, QA teams, and client stakeholders for development of a **Gas Pipeline Operations platform** serving 6 user roles across 100+ screens for BPCL field operations.
- Rendered **1,000+ live pipeline assets**, patrolmen locations, and safety zones on a single map using **ESRI ArcGIS SDK** multi-layer integration.
- Implemented **RBAC across 6 roles** with frontend route guards and backend-aligned enforcement — 0 unauthorized route or data access possible at the client layer.
- Managed **3 Azure environments** (Dev, QA, Prod) with full CI/CD automation — eliminated manual release steps across all environments.
- Gave multiple requirement and demo sessions directly with Deloitte's Senior BA and BPCL's Digital Business team, cutting pre-sprint scope ambiguity.
- Participated in code reviews and collaborated closely with QA throughout feature delivery. Worked in Agile sprints with daily stand-ups, sprint planning and retrospectives.`,
        skills: [
          "React",
          "TypeScript",
          "ESRI ArcGIS",
          "GIS",
          "RBAC",
          "Azure CI/CD",
          "Java Spring Boot",
          "Tailwind CSS",
          "Agile",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "rahul-solutions",
    companyName: "Rahul Solutions",
    companyLogo: "/images/companies/rahulsolutions.png",
    positions: [
      {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        duration: {
          start: "06.2023",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built a cross-platform **LMS for iOS and Android** (Expo + React Native) with a Node.js, Express.js, PostgreSQL backend serving multiple concurrent user roles.
- Reduced synchronous API load by offloading OTP delivery, daily analytics, and scheduled sync to **Redis** and **BullMQ** async job queues.
- Shipped a **School Management portal** with 4 independent modules — attendance, timetable, study materials, and results — each backed by PostgreSQL with optimized query patterns.
- Secured both web and mobile clients with **JWT** and **OAuth 2.0**; RBAC is enforced at the API layer across all roles.`,
        skills: [
          "React Native",
          "Expo",
          "TypeScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "JWT",
          "OAuth 2.0",
          "RBAC",
          "REST APIs",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    companyLogo: "/images/education/education.jpg",
    positions: [
      {
        id: "makaut",
        title: "Maulana Abul Kalam Azad University of Technology, West Bengal",
        duration: {
          start: "08.2020",
          end: "06.2024",
        },
        icon: "education",
        description: `- **B.Tech in Computer Science and Engineering** — CGPA: 8.80
- Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Web Technologies
- Built multiple academic projects including web applications and mobile applications`,
        skills: [
          "Java",
          "C++",
          "Python",
          "Data Structures",
          "Algorithms",
          "Database Management",
          "Software Engineering",
        ],
      },
    ],
  },
];
