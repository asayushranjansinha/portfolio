import type { Achievement } from "@/features/portfolio/types/achievements";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "award-1",
    kind: "award",
    title: "National Coding Olympiad – Silver Medal",
    prize: "Silver Medal",
    date: "2021-12",
    grade: "University",
    description:
      "Secured **2nd place** among 12,000+ participants in a national-level coding competition. Focus areas included algorithms, data structures, and optimisation challenges.",
    referenceLink:
      "https://example.com/coding-olympiad-certificate"
  },

  {
    id: "award-2",
    kind: "award",
    title: "Best Final Year Project Award",
    prize: "Winner",
    date: "2022-05",
    grade: "Final Year",
    description:
      "Awarded for developing an end-to-end AI-powered documentation search system.\nImplemented embeddings, semantic search, and real-time summarisation.",
    referenceLink:
      "https://example.com/final-year-project-award"
  },

  {
    id: "cert-1",
    kind: "certification",
    title: "Meta Frontend Developer Certification",
    issuer: "Meta",
    date: "2023-09-12",
    credentialID: "META-FE-98344",
    credentialURL:
      "https://coursera.org/verify/meta-frontend-developer",
    description:
      "Completed Meta’s official **Frontend Developer Professional Certificate**, covering React, UI frameworks, accessibility, and advanced JavaScript."
  },

  {
    id: "cert-2",
    kind: "certification",
    title: "Google Cloud Associate Engineer",
    issuer: "Google",
    date: "2024-02-01",
    credentialID: "GCP-AE-111229",
    credentialURL:
      "https://googlecloudcertificates.example.com/verify",
    description:
      "Validated proficiency in deploying, managing, and monitoring Google Cloud workloads. Covered IAM, storage, compute, and networking fundamentals."
  },

  {
    id: "cert-3",
    kind: "certification",
    title: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2023-03-10",
    credentialID: "AWS-SAA-449923",
    credentialURL:
      "https://aws.amazon.com/verification",
    description:
      "Certified for designing scalable, cost-optimized cloud architectures on AWS. Included hands-on VPC design, IAM, Lambda, and high-availability setups."
  },
];
