"use client";
import { IoArrowForward, IoDownloadOutline } from "react-icons/io5";
import styles from "./styles/page.module.scss";
import Spline from "@splinetool/react-spline";
import { Tooltip } from "./Tooltip";
import { ContactGrid } from "./ContactGrid.1";

export const HeroSection: React.FC = () => (
  <div className={styles.hero}>
    <div className={styles.heroMain}>
      <div className={styles.donut}>
        <Spline scene="https://prod.spline.design/eXxdFyp27KoBXioI/scene.splinecode" />
      </div>
      <div className={styles.heroTexts}>
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
          <a href="#about" className={styles.buttonLink}>
            More about me{" "}
            <span className={styles.icon}>
              <IoArrowForward />
            </span>
          </a>
        </div>
      </div>
    </div>

    <ContactGrid />
  </div>
);
