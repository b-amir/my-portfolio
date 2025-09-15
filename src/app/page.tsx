import globalStyles from "@/_styles/page.module.scss";
import { HeroSection } from "@/_sections/HeroSection";
import { AboutSection } from "@/_sections/AboutSection";
import { FooterSection } from "@/_sections/FooterSection";
import { AllProjectsServer } from "@/_sections/AllProjectsSection/AllProjectsServer";
import { FeaturedProjectSection } from "@/_sections/FeaturedProjectSection";
import { Suspense } from "react";

function HeroSectionFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Loading...</div>
    </div>
  );
}

function AllProjectsSectionFallback() {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Loading projects...</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={`${globalStyles.main}`}>
      <Suspense fallback={<HeroSectionFallback />}>
        <HeroSection />
      </Suspense>
      <AboutSection />
      <FeaturedProjectSection />
      <Suspense fallback={<AllProjectsSectionFallback />}>
        <AllProjectsServer />
      </Suspense>
      <FooterSection />
    </main>
  );
}
