import globalStyles from "@/_styles/page.module.scss";
import { HeroSection } from "@/_sections/HeroSection";
import { AboutSection } from "@/_sections/AboutSection";
import { FooterSection } from "@/_sections/FooterSection";
import { AllProjectsSection } from "@/_sections/AllProjectsSection";
import { FeaturedProjectSection } from "@/_sections/FeaturedProjectSection";

export default function Home() {
  const sections = ["hero", "about", "featured", "allProjects", "footer"];
  return (
    <main className={`${globalStyles.main}`}>
      <HeroSection />
      <AboutSection />
      <FeaturedProjectSection />
      <AllProjectsSection />
      <FooterSection />
    </main>
  );
}
