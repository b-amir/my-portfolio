"use client";
import Image from "next/image";
import globalStyles from "@/_styles/page.module.scss";
import variables from "@/_styles/variables.module.scss";
import { HeroSection } from "@/_sections/HeroSection";
import { AboutSection } from "@/_sections/AboutSection";
import { AllProjectsSection } from "@/_sections/AllProjectsSection";
import { FeaturedProjectSection } from "@/_sections/FeaturedProjectSection";
import { FooterSection } from "@/_sections/FooterSection";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Home() {
  return (
    <main className={globalStyles.main}>
      <HeroSection />
      <AboutSection />
      <FeaturedProjectSection />
      <AllProjectsSection />
      <FooterSection />
      <ProgressBar
        height="6px"
        color="#f15c55"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </main>
  );
}
