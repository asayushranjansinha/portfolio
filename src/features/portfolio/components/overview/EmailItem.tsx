"use client";

import { MailIcon } from "lucide-react";

import { decodeEmail } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./IntroItem";
import { useIsClient } from "@/hooks/useIsClient";

type EmailItemProps = {
  email: string;
};

export function EmailItem({ email }: EmailItemProps) {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(email);

  return (
    <IntroItem>
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `mailto:${emailDecoded}` : "#"}
          aria-label={
            isClient ? `Send email to ${emailDecoded}` : "Email address"
          }
        >
          {isClient ? emailDecoded : "[Email protected]"}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}
