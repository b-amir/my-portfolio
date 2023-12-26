"use client";
import styles from "./index.module.scss";

export function OtherStack() {
  return (
    <div className={styles.otherStack}>
      <h3>Other skills</h3>
      <p>
        - Long time <span className={styles.inlineTag}>Linux</span> user. <br />
        - I know my way around design tools like{" "}
        <span className={styles.inlineTag}>Figma</span> &{" "}
        <span className={styles.inlineTag}>PhotoShop</span>. <br />- Familiar
        with <span className={styles.inlineTag}>Agile</span> &{" "}
        <span className={styles.inlineTag}>Scrum</span> methodologies.
        <br />- Decent understanding of{" "}
        <span className={styles.inlineTag}>data structures</span> &{" "}
        <span className={styles.inlineTag}>algorithms</span>.
      </p>
      <br />
      <h3>Previous stack</h3>
      <p>
        Started with WordPress back in 2011, learned{" "}
        <span className={styles.inlineTag}>PHP</span>,{" "}
        <span className={styles.inlineTag}>MySQL</span> and CSS the following
        year, and integrated <span className={styles.inlineTag}>Python</span>{" "}
        into select project segments in 2016. Subsequently, I focused on
        Frontend.
      </p>
    </div>
  );
}
