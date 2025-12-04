import { Experience } from "@/features/portfolio/types/experience";

export const EXPERIENCES: Experience[] = [
  {
    id: "rahul-solutions",
    companyName: "Rahul Solutions",
    companyLogo: "/images/companies/rahulsolutions.png",
    positions: [
      {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        duration: {
          start: "01.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built a production-grade Learning Management System (LMS) using Expo (React Native), TypeScript, and Node.js with PostgreSQL database and Express.js backend.
- Implemented Redis caching and BullMQ workers to optimize performance, reducing average response times and enabling efficient background task processing.
- Developed scheduled OTP sending system and progress analytics workers for automated user engagement.
- Integrated AWS S3 for secure asset uploads including video lectures, notes, and assignments with role-based access control.
- Implemented DLT-verified SMS OTP authentication flow for secure user verification and access-code-based assessment features.
- Built access-code-based test flows with role-based dashboards for students, instructors, and administrators.
- Currently in final development phase with launch planned on App Store and Play Store soon.
- Designed and architected the complete system from database schema to mobile UI components.`,
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
          "JWT",
          "DLT SMS API",
          "Mobile Development",
          "Backend Development",
          "System Architecture",
        ],
        isExpanded: true,
      },
      {
        id: "frontend-developer-intern",
        title: "Front End Developer Intern",
        duration: {
          start: "06.2023",
          end: "12.2023",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed and maintained user interfaces for web applications using React.js, significantly improving user experience and application responsiveness.
- Collaborated closely with the design team to implement responsive and intuitive UI components, achieving a 20% reduction in average page load time.
- Integrated RESTful APIs to fetch data and ensure seamless communication between frontend and backend systems.
- Implemented component-based architecture using React best practices for code reusability and maintainability.
- Participated in code reviews and followed agile development methodologies.
- Worked with state management solutions and modern frontend tooling.`,
        skills: [
          "React.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "REST APIs",
          "Git",
          "Responsive Design",
          "UI/UX Implementation",
          "Agile",
          "Teamwork",
        ],
      },
    ],
    isCurrentEmployer: true,
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
        description: `- Bachelor of Technology (B.Tech) in Computer Science & Engineering
- CGPA: 8.80/10.00
- Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Web Technologies, Object-Oriented Programming
- Built multiple academic projects including web applications and mobile applications
- Participated in coding competitions and hackathons
- Strong foundation in computer science fundamentals and problem-solving`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Database Management",
          "Operating Systems",
          "Computer Networks",
          "Software Engineering",
          "Problem Solving",
          "Self-learning",
        ],
      },
      {
        id: "high-school",
        title: "Sree Ayyappa Public School, Bokaro Steel City",
        duration: {
          start: "04.2016",
          end: "03.2019",
        },
        icon: "education",
        description: `- Senior Secondary School Certificate (Class 12th)
- Percentage: 76.66%
- Stream: Science with Computer Science
- Built strong foundation in mathematics, physics, and computer science
- Developed early programming skills and interest in software development

- Secondary School Certificate (Class 10th)
- CGPA: 9.20/10.00
- Demonstrated consistent academic excellence
- Active participation in extracurricular activities and technology clubs`,
        skills: [
          "Mathematics",
          "Computer Science",
          "Problem Solving",
          "Self-learning",
        ],
      },
    ],
  },
];