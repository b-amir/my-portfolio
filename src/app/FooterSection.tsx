"use client";
import { SectionHeader } from "./SectionHeader";
import styles from "./styles/page.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";

export const FooterSection: React.FC = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.twoCols}>
        <div className={styles.footerText}>
          <h3 style={{ fontFamily: "'Noto Serif', serif", fontSize: "larger" }}>
            Thanks for considering my work.
          </h3>
          <p>
            I want to emphasize that every project carries a piece of me. I
            treat each one as a unique product with its own identity —a
            delightful challenge and an opportunity to learn something new. My
            hope is that you discover as much joy in experiencing my work as I
            did in bringing it to life. Cheers!
          </p>
        </div>
        <button className={styles.buttonKeepInTouch}>
          <MdWavingHand /> Let's keep in touch
        </button>
      </div>
    </div>
    <div className={styles.madeWith}>Made with 🌼🐮👅 and 🤦</div>
  </>
);
