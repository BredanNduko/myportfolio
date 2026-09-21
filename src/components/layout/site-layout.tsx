import type { ReactNode } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
