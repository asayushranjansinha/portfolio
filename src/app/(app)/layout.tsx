import React from "react";

import { ScrollToTop } from "@/components/navigation/ScrollToTopButton";
import { SiteFooter } from "@/components/site-footer/SiteFooter";
import { SiteHeader } from "@/components/site-header/SiteHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden min-h-svh">
        {children}
      </main>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
