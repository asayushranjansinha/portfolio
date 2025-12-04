"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { UserName } from "../shared/UserName";

function SiteHeaderLogoMotion() {
  const { scrollY } = useScroll();
  const [affix, setAffix] = useState(false);

  // subscribe to scroll changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    setAffix(latest > 56);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: affix ? 1 : 0, y: affix ? 0 : 8 }}
      transition={{ duration: 0.3 }}
    >
      <UserName height={28} width={120} />
    </motion.div>
  );
}

export function SiteHeaderLogo() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);

  if (!isHome) return <UserName height={28} width={120} />;

  return <SiteHeaderLogoMotion />;
}
