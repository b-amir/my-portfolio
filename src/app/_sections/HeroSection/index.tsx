"use client";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import globalStyles from "@/_styles/page.module.scss";
import { Tooltip } from "@/_components/Tooltip";
import { LowTierImage } from "./Fry3dObject";
import { useWindowSize } from "@/_hooks/useWindowSize";
import { useEffect } from "react";
import { ContactGrid } from './ContactGrid';
import {
  IoArrowForward as ArrowIcon,
  IoDownloadOutline as DownloadIcon
} from "react-icons/io5";

const Fry3dObject = dynamic(
  () => import("./Fry3dObject").then((mod) => mod.Fry3dObject),
  {
    loading: () => <LowTierImage />,
    ssr: false 
  }
);


export const HeroSection: React.FC = () => {
  const { width } = useWindowSize();



  const isSmallScreen =
    typeof window === "undefined" ? false : (width ?? 0) < 1120;

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.parallax}`);
      elements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0");
        const offset = window.pageYOffset * speed;
        element.style.transform = `translateY(${offset}px)`;
        element.style.opacity = `${1 - window.pageYOffset / 1000}`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.hero}`} id="hero">
      <div className={styles.heroMain}>
        <div className={`${styles.heroTexts} ${styles.parallax}`} data-speed="0.5">
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
            <a
              href="https://b-amir.storage.iran.liara.space/resume/Amir_Bazgir_Resume.pdf"
              target="_blank"
              className={styles.heroResume}>
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
        </div>
        <div className={`${styles.fry} ${styles.parallax}`} data-speed="0.2">
          <Fry3dObject />
        </div>
      </div>
      <ContactGrid />
    </div>
  );
};