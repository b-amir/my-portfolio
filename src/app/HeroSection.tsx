"use client";
import { IoArrowForward, IoDownloadOutline } from "react-icons/io5";
import styles from "./styles/page.module.scss";
import Spline from "@splinetool/react-spline";

export const HeroSection: React.FC = () => (
  <div className={styles.hero}>
    <Spline
      scene="https://prod.spline.design/eXxdFyp27KoBXioI/scene.splinecode"
      className={styles.donut}
    />

    <div className={styles.heroTexts}>
      <h1 className={styles.heroTitle}>
        Hi, <br /> I&apos;m Amir Bazgir
      </h1>
      {/* Subtitle */}
      <h2 className={styles.heroSubtitle}>
        And I&apos;ll be your <span className={styles.span}>CodeChef!</span>
      </h2>
      {/* Buttons */}
      <div className={styles.heroButtons}>
        {" "}
        <a href="#resume" className={styles.buttonCta}>
          <IoDownloadOutline />
          Resume.pdf
        </a>
        <a href="#about" className={styles.buttonLink}>
          More about me <IoArrowForward />
        </a>
      </div>
    </div>
    <Spline
      scene="https://prod.spline.design/PhKOH5GV1SV9I88N/scene.splinecode"
      className={styles.face}
    />
  </div>
);
