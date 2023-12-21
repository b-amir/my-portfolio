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

    <div className={styles.twoRows}>
      <div className={styles.twoColsAbout}>
        <div className={styles.aboutMeTextBlock}>
          <h2>
            {/* I&apos;m a{" "} */}
            <span className={styles.underline}>Fullstack web developer,</span>
            but what do i mean by that?
          </h2>
          <ul>
            <li>
              <strong className={styles.aboutMeStrong}>
                I live and breath Frontend:
              </strong>
              <p className={styles.aboutMeParagraph}>
                This is my forte! I keep myself up-to-date with the bleeding
                edge, constantly staying in the loop through a solid stream of
                podcasts, Twitter communities, and YouTube channels. The vibrant
                and ever-evolving frontend development scene is where I feel
                most at home. Always eager to broaden my horizons and learn new
                things and hardly ever frustrated by CSS 😀.
              </p>
            </li>
            <li>
              <strong className={styles.aboutMeStrong}>
                Not a 10× Backend dev,
              </strong>
              <p className={styles.aboutMeParagraph}>
                but I embrace the Fullstack, as it is the future. I dive into
                the backend as needed, refining my skills through hands-on
                projects (check some below), extensive reading, and tutorials.
                Comfortable communicating with backend developers for a smooth
                project execution.
              </p>
            </li>
            <li>
              <strong className={styles.aboutMeStrong}>
                Not a Design expert,
              </strong>
              <p className={styles.aboutMeParagraph}>
                but I'm well-versed in tools like Figma and Photoshop. During my
                school days, I took on basic UI projects and delved into UX
                tutorials out of passion to help me create immersive
                experiences. Fascinated by everyday products, I've made it a
                point to study and integrate design into all my projects.
              </p>
            </li>
          </ul>

          <a className={styles.seeMyStack}>
            See my technical stack{" "}
            <span className={styles.icon}>
              <IoArrowForward />
            </span>
          </a>
        </div>
        <Spline
          scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode"
          className={styles.fry}
        />
      </div>
      <ContactGrid />
    </div>
  </div>
);
