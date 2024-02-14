"use client";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import globalStyles from "@/_styles/page.module.scss";
import { Tooltip } from "@/_components/Tooltip";
import { ContactGrid } from "./ContactGrid";
import { useWindowSize } from "@/_hooks/useWindowSize";
import { LoadingSpinner } from "@/_components/LoadingSpinner";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import {
  IoArrowForward as ArrowIcon,
  IoDownloadOutline as DownloadIcon
} from "react-icons/io5";

const Fry3dObject = dynamic(
  () => import("./Fry3dObject").then((mod) => mod.Fry3dObject),
  {
    loading: () => <LoadingSpinner />
  }
);

export const HeroSection: React.FC = () => {
  const { width } = useWindowSize();

  const isSmallScreen =
    typeof window === "undefined" ? false : (width ?? 0) < 1120;

  const parallaxSpeed = isSmallScreen ? 0 : -200;
  const parallaxTranslateX: [string, string] = isSmallScreen
    ? ["0px", "0px"]
    : ["-100px", "100px"];
  const parallaxScale: [number, number] = isSmallScreen ? [1, 1] : [1.5, 0.5];

  return (
    <ParallaxProvider>
      <div className={styles.hero}>
        <div className={styles.heroMain}>
          <Parallax speed={parallaxSpeed} className={styles.heroTexts}>
            <h1 className={styles.heroTitle}>
              Hi, <br /> I&apos;m Amir Bazgir
            </h1>
            {/* Subtitle */}
            <h2 className={styles.heroSubtitle}>
              And I&apos;ll be your{" "}
              <Tooltip
                text={
                  <div>
                    A while back, I came across an interview where a renowned
                    chef was questioned about the{" "}
                    <strong>distinction between a chef and a cook</strong>.
                    <br /> <br />
                    The response resonated with me:
                    <blockquote>
                      &quot;Most reasonably intelligent people can follow a
                      recipe with mixed results, a chef can be given a basket of
                      ingredients and is able to create something
                      wonderful.&quot;
                    </blockquote>
                    <br />
                    <strong>This is the principle I aspire to live by.</strong>
                  </div>
                }>
                {" "}
                CodeChef!
              </Tooltip>
              <small>*</small>
            </h2>
            {/* Buttons */}
            <div className={styles.heroButtons}>
              {" "}
              <a href="#resume" className={styles.heroResume}>
                <DownloadIcon />
                Resume.pdf
              </a>
              <div
                onClick={() => {
                  document?.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                  });
                }}
                className={globalStyles.buttonLink}>
                More about me{" "}
                <span className={globalStyles.icon}>
                  <ArrowIcon />
                </span>
              </div>
            </div>
          </Parallax>{" "}
          <Parallax
            speed={parallaxSpeed}
            className={styles.fry}
            translateX={parallaxTranslateX}
            scale={parallaxScale}>
            <Fry3dObject />
          </Parallax>
        </div>
        <ContactGrid />
      </div>
    </ParallaxProvider>
  );
};
