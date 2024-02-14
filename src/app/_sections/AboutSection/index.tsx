import styles from "./index.module.scss";
import globalStyles from "@/_styles/page.module.scss";
import { SectionHeader } from "@/_components/SectionHeader";
import { MyStackButton } from "./MyStackButton";
import { Fa42Group as StackIcon } from "react-icons/fa6";
import { MdOutlinePerson as PersonIcon } from "react-icons/md";

export const AboutSection: React.FC = () => {
  return (
    <div className={styles.about} id="about">
      <SectionHeader
        title="About Me"
        icon={<PersonIcon className={globalStyles.icon} />}
      />
      <div className={styles.twoRows}>
        <div className={styles.twoColsAbout}>
          <div className={styles.aboutMeTextBlock}>
            <h2>
              {/* I&apos;m a{" "} */}
              <span className={styles.underline}>
                Frontend-focused JavaScript Developer,
              </span>
              but what do i mean by that?
            </h2>
            <ul>
              <li>
                <strong className={styles.aboutMeStrong}>
                  I live and breath Frontend:
                </strong>
                <p className={styles.aboutMeParagraph}>
                  This is my forte! I{" "}
                  <span className={globalStyles.generalHighlight}>
                    keep myself up-to-date
                  </span>{" "}
                  with the bleeding edge, constantly staying in the loop through
                  a solid stream of podcasts, Twitter communities, and YouTube
                  channels. The vibrant and ever-evolving frontend development
                  scene is where I feel most at home. Always eager to broaden my
                  horizons by learning new things, and{" "}
                  <span className={globalStyles.generalHighlight}>
                    hardly ever frustrated by CSS 😀
                  </span>
                  .
                </p>
              </li>
              <li>
                <strong className={styles.aboutMeStrong}>
                  Have solid JavaScript foundation,
                </strong>
                <p className={styles.aboutMeParagraph}>
                  With a solid grounding in JavaScript, I possess a{" "}
                  <span className={globalStyles.generalHighlight}>
                    decent understanding of its fundamentals, design patterns,
                    SOLID principles and rendering patterns
                  </span>
                  . When the occasion arises, I delve into backend development,
                  refining my skills through hands-on projects (check some
                  below) and extensive reading. Comfortable communicating with
                  backend developers for a smooth project execution.
                </p>
              </li>
              <li>
                <strong className={styles.aboutMeStrong}>
                  Not a Design expert,
                </strong>
                <p className={styles.aboutMeParagraph}>
                  but I&apos;m{" "}
                  <span className={globalStyles.generalHighlight}>
                    well-versed in tools like Figma
                  </span>{" "}
                  and Photoshop. During my school days, I took on basic UI
                  projects and delved into UX tutorials out of passion to help
                  me create immersive experiences. Fascinated by everyday
                  products, I&apos;ve made it a point to study and integrate
                  design into all my projects.
                </p>
              </li>
            </ul>
            <div className={styles.buttonSection}>
              <MyStackButton />
            </div>
          </div>
          <StackIcon className={styles.aboutIcon} />
        </div>
      </div>
    </div>
  );
};
