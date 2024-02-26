"use client";
import styles from "./index.module.scss";

export function OtherStack() {
  return (
    <div className={styles.otherStack}>
      <h3>Other skills</h3>
      <p>
        - Long time <span className={styles.inlineTag}>Linux</span> user. <br />
        - I know my way around design tools like{" "}
        <span className={styles.inlineTag}>Figma</span> & Photoshop. <br />-
        Familiar with <span className={styles.inlineTag}>Agile</span> &{" "}
        <span className={styles.inlineTag}>Scrum</span> methodologies.
        <br />- Decent understanding of{" "}
        <span className={styles.inlineTag}>data structures</span> &{" "}
        <span className={styles.inlineTag}>algorithms</span>.
      </p>
      <br />
      <h3>Previous stack</h3>
      <p>
        Started in 2007 with UI design, then acquired WordPress skills to bring
        designs to life. Developed proficiency in{" "}
        <span className={styles.inlineTag}>PHP</span>, HTML, CSS, JavaScript,
        and <span className={styles.inlineTag}>MySQL</span> over the next decade
        for interactive web app development. Integrated{" "}
        <span className={styles.inlineTag}>Python</span> into select project
        segments in 2016. Subsequently, I focused on Frontend.
      </p>
    </div>
  );
}
