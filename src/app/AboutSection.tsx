"use client";
import { IoArrowForward } from "react-icons/io5";
import { SectionHeader } from "./SectionHeader";
import styles from "./styles/page.module.scss";
import { MdOutlinePerson } from "react-icons/md";
import Spline from "@splinetool/react-spline";
import { ContactGrid } from "./ContactGrid";

export const AboutSection: React.FC = () => (
  <div className={styles.about}>
    <SectionHeader
      title="About Me"
      icon={<MdOutlinePerson className={styles.icon} />}
    />

    <div className={styles.twoCols}>
      <div className={styles.twoRows}>
        <div className={styles.aboutMeTextBlock}>
          <h2>Hi, I&apos;m Amir Bazgir</h2>
          <p>
            I&apos;m a full-stack web developer, and a student at the University
            of Tehran. I&apos;m also a competitive programmer, and I love to
            solve problems.
          </p>
          <p>
            I&apos;m currently working on my own startup, CS-LIT, which is a
            platform for learning computer science. I&apos;m also working on a
            project for the university, which is a web application for managing
            courses.
          </p>

          <a className={styles.buttonLink}>
            See my stack <IoArrowForward />
          </a>
        </div>
        <ContactGrid />
      </div>

      <Spline
        scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode"
        className={styles.fry}
      />
    </div>
  </div>
);

export const Tag: React.FC = ({ name, color, icon }) => (
  <div className={styles.tag}>
    <div className={styles.tagIcon}>{icon}</div>
    <div className={styles.tagText}>{name}</div>
  </div>
);
