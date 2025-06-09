// app/landingpage/layout.tsx
import React from "react";

import LandingNavbar from "../../components/LandingPageNavbar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <LandingNavbar />
      <main>{children}</main>
    </div>
  );
}
