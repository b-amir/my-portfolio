import Image from "next/image";
import styles from "./styles/page.module.scss";
import variables from "./styles/variables.module.scss";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { AllProjectsSection } from "./AllProjectsSection";
import { FeaturedProjectSection } from "./FeaturedProjectSection";
import { FooterSection } from "./FooterSection";
import { ContactGrid } from "./ContactGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ContactGrid />
      <AboutSection />
      <FeaturedProjectSection />
      <AllProjectsSection />
      <FooterSection />
    </main>
  );
}
