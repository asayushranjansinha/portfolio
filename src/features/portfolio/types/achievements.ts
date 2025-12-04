export type Achievement = {
  id: string;
  kind: "award" | "certification";

  // Shared
  title: string;
  date: string; // award.date or certification.issueDate
  description?: string;

  // Award-specific
  prize?: string;
  grade?: string;
  referenceLink?: string;

  // Certification-specific
  issuer?: string;
  issuerLogoURL?: string;
  issuerIconName?: string;
  credentialID?: string;
  credentialURL?: string;
};
