"use client";
import { IoArrowForward, IoDownloadOutline } from "react-icons/io5";
import styles from "./styles/page.module.scss";
import Spline from "@splinetool/react-spline";
import { Tooltip } from "./Tooltip";
import { ContactGrid } from "./ContactGrid";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export const HeroSection: React.FC = () => (
  <ParallaxProvider>
    <div className={styles.hero}>
      <div className={styles.heroMain}>
        <Parallax
          speed={-200}
          className={styles.fry}
          translateX={["-100px", "100px"]}
          scale={[1.5, 0.5]}
          // rotate={[180, 0]}
          // easing="easeInQuad"
        >
          <Spline scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode" />{" "}
        </Parallax>
        <Parallax speed={-200} className={styles.heroTexts}>
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
                  A while back, I came across an interview where a renowned chef
                  was questioned about the{" "}
                  <strong>distinction between a chef and a cook</strong>.
                  <br /> <br />
                  The response resonated with me:
                  <blockquote>
                    &quot;Most reasonably intelligent people can follow a recipe
                    with mixed results, a chef can be given a basket of
                    ingredients and is able to create something wonderful.&quot;
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
              className={styles.buttonLink}>
              More about me{" "}
              <span className={styles.icon}>
                <IoArrowForward />
              </span>
            </div>
          </div>
          {/* </div>{" "} */}
        </Parallax>
      </div>

      <ContactGrid />
    </div>
  </ParallaxProvider>
);
