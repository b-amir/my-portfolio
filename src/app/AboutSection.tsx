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
          <h2>I&apos;m a web developer</h2>

          <ul>
            <li>
              <p className={styles.aboutMeParagraph}>
                <strong className={styles.aboutMeStrong}>
                  I live and breath Frontend:
                </strong>{" "}
                this is my forte! I keep myself up-to-date with the bleeding
                edge, constantly staying in the loop through a solid stream of
                podcasts, Twitter communities, and YouTube channels. The vibrant
                and ever-evolving frontend development scene is where I feel
                most at home. Always eager to broaden my horizons and learn new
                things.
              </p>
            </li>
            <li>
              <p className={styles.aboutMeParagraph}>
                <strong className={styles.aboutMeStrong}>
                  I&apos;m not a Backend dev,
                </strong>{" "}
                but I embrace the Fullstack. I dive into the backend as needed,
                with hands-on projects (check some below), books, and tutorials
                shaping my expertise. Comfortable communication with backend
                developers ensures smooth project execution.
              </p>
            </li>
            <li>
              <p className={styles.aboutMeParagraph}>
                <strong className={styles.aboutMeStrong}>
                  I&apos;m not a Designer,
                </strong>{" "}
                but I'm well-versed in tools like Figma and Photoshop. During my
                school days, I took on basic UI projects and delved into UX
                tutorials out of passion to create immersive experiences.
                Fascinated by everyday products, I've made it a point to study
                and integrate design into all my projects.
              </p>
            </li>
          </ul>

          <a className={styles.seeMyStack}>
            See my stack{" "}
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
