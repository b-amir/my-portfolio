import Image from "next/image";
import styles from "./styles/page.module.scss";
import variables from "./styles/variables.module.scss";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ContactGrid } from "./ContactGrid";
import { AllProjectsSection } from "./AllProjectsSection";
import { FeaturedProjectSection } from "./FeaturedProjectSection";
import { FooterSection } from "./FooterSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      {/* <ContactSection /> */}
      <FeaturedProjectSection />
      <AllProjectsSection />
      <FooterSection />
    </main>
  );
}
