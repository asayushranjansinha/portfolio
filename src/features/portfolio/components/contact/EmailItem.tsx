"use client";

import { decodeEmail } from "@/utils/string";

import { useIsClient } from "@/hooks/useIsClient";
import Link from "next/link";

type EmailItemProps = {
  email: string;
};

export function EmailItem({ email }: EmailItemProps) {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(email);

  return (
    <Link
      className="link text-primary select-all"
      href={isClient ? `mailto:${emailDecoded}` : "#"}
      aria-label={
        isClient
          ? `Email to: ${emailDecoded}`
          : "Email address"
      }
    >
      {isClient ? emailDecoded : "[Email protected]"}
    </Link>
  );
}
