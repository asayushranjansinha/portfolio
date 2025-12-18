import { User } from "@/types/user";

export const USER: User = {
  firstName: "Ayush",
  lastName: "Ranjan Sinha",
  displayName: "Ayush Ranjan",
  username: "asayushranjansinha",
  gender: "male",
  bio: "Full Stack Developer - React, Next.js, Node.js, TypeScript, Java Spring Boot.",
  careerObjective: `
**Full-stack developer** with 1.5+ years of professional experience building production-ready applications. B.Tech CSE graduate (2024, 8.80 CGPA) with strong foundations in modern web technologies and problem-solving.

<a href="/#contact" class="underline-offset-4 hover:underline transition font-medium">Seeking opportunities</a> to contribute to high-impact products in a collaborative engineering environment where I can apply my technical skills, grow professionally, and build software that makes a difference.
`,

  resumeURL:
    "https://drive.google.com/file/d/18UgVlyEYMKxDBqzy3bdQRTjPwl7-yqtE/view?usp=sharinggh",
  resumeDocsURL:
    "https://docs.google.com/document/d/1wCrbTg-u3alqXggMkrcwy59KIMBIrxrQ",

  flipSentences: [
    "Full Stack Developer",
    "React • Next.js • TypeScript • Java Spring Boot",
    "B.Tech CSE '24 • 8.80 CGPA",
    "500+ DSA Problems Solved",
    "Building scalable products",
  ],
  address: "Bokaro Steel City, India",
  phoneNumber: "KzkxODcwOTQxNTU5OA==", // base64 encoded E.164, keep as-is
  email: "YXNheXVzaHJhbmphbnNpbmhhQGdtYWlsLmNvbQ==", // base64 encoded, keep as-is
  website: process.env.NEXT_PUBLIC_BASE_APP_URL!,
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Rahul Solutions",
      website: "https://rahulsolutions.in",
    },
  ],
  about: `
## Full Stack Developer | B.Tech CSE Graduate (2024)

**Academic Background**  
Graduated with a **B.Tech in Computer Science and Engineering (CSE)** in June 2024 with **8.80 CGPA** — building a strong technical foundation in software development, algorithms, and system design.

**Technical Expertise**  
- **Frontend:** **React**, **React Native** (Expo), Next.js, TypeScript, Tailwind CSS, 
- **Backend:** **Node.js**, **Java**, Express, Spring Boot, Spring Security, JPA/Hibernate, PostgreSQL, MongoDB, Redis, BullMQ, AWS S3
- **Core Skills:** RESTful APIs, Authentication (JWT), Role-Based Access Control, Caching, Queue Management, Database Design
- **Problem Solving:** Solved **500+ DSA problems** on LeetCode with strong fundamentals in algorithms and data structures

**Real-World Experience**  
Built production applications, including a complete Learning Management System (LMS) as a mobile app using Expo and Node.js. Worked on scalable, maintainable codebases following clean architecture principles. Also developed enterprise-grade backend systems using Java Spring Boot with role-based access control and relational data modeling.


**What Drives Me**  
I focus on writing **clean, performant code** that delivers exceptional user experiences. I value **code quality, design consistency, and developer experience** — always thinking about maintainability and scalability from day one.

**Looking For**  
<a href="/#contact" class="underline-offset-4 hover:underline transition font-medium">Opportunities</a> to contribute to **impactful products** in a fast-paced, engineering-focused environment where I can grow alongside talented teams and solve challenging problems.
  `,
  avatar: "/images/photo.jpeg",
  ogImage: "/images/photo.jpeg",
  namePronunciationUrl: "/audio/ayush.wav",
  timeZone: "Asia/Kolkata",
  keywords: [
    "ayush ranjan sinha",
    "asayushranjan",
    "full stack developer",
    "software engineer",
    "java developer",
    "spring boot developer",
    "backend developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "node.js developer",
    "javascript developer",
    "frontend developer",
    "react native developer",
    "postgresql",
    "mongodb",
    "rahul solutions",
    "leetcode 500+",
  ],
  dateCreated: "2023-10-20",
};
