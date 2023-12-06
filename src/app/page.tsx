import Image from "next/image";
import styles from "./styles/page.module.scss";
import variables from "./styles/variables.module.scss";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { QuickLinksSection } from "./QuickLinksSection";
import { AllProjectsSection } from "./AllProjectsSection";
import { FeaturedProjectSection } from "./FeaturedProjectSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <QuickLinksSection />
      <AboutSection />
      <FeaturedProjectSection />
      <AllProjectsSection />
    </main>
  );
}
