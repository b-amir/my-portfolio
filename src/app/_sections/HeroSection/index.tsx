"use client";
import { IoArrowForward, IoDownloadOutline } from "react-icons/io5";
import { ContactGrid } from "./ContactGrid";
import globalStyles from "@/_styles/page.module.scss";
import styles from "./index.module.scss";
import Spline from "@splinetool/react-spline";
import { Tooltip } from "@/_components/Tooltip";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export const HeroSection: React.FC = () => {
  const isSmallScreen =
    typeof window !== "undefined" ? window.innerWidth < 1120 : false;
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
            {/* <div className={styles.heroTexts}> */}
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
                <IoDownloadOutline />
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
                  <IoArrowForward />
                </span>
              </div>
            </div>
            {/* </div>{" "} */}
          </Parallax>{" "}
          <Parallax
            speed={parallaxSpeed}
            className={styles.fry}
            translateX={parallaxTranslateX}
            scale={parallaxScale}>
            {/* Render a less GPU consuming scene if device is handheld */}
            {isSmallScreen ? (
              <Spline scene="https://prod.spline.design/AmgucmBUcWHIoyof/scene.splinecode" />
            ) : (
              <Spline scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode" />
            )}
          </Parallax>
        </div>
        <ContactGrid />
      </div>
    </ParallaxProvider>
  );
};
