"use client";
import { SectionHeader } from "./SectionHeader";
import styles from "./styles/page.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoArrowForward, IoDownloadOutline } from "react-icons/io5";

export const FooterSection: React.FC = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.twoCols}>
        <div className={styles.footerText}>
          <h2>Thanks for considering my work.</h2>
          <p>
            Let me emphasize that every project carries a piece of me. I treat
            each one as a unique product with its own identity —a delightful
            challenge and an opportunity to learn something new.
            <br />
            My hope is that you discover as much joy in experiencing my work as
            I did in bringing it to life. Cheers!
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a className={styles.footerResume}>
            {" "}
            <IoDownloadOutline /> Resume.pdf{" "}
          </a>
          <div className={styles.twoCols}>
            <div className={styles.twoRows}>
              <a className={styles.footerLink}>
                LinkedIn <HiOutlineExternalLink />
              </a>
              <a className={styles.footerLink}>
                GitHub <HiOutlineExternalLink />
              </a>
            </div>
            <div className={styles.twoRows}>
              <a className={styles.footerLink}>
                E-mail <HiOutlineExternalLink />
              </a>
              <a className={styles.footerLink}>
                Phone <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.madeWith}>Made with 🌼🐮👅 and 🤦</div>
  </>
);
