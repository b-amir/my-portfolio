"use client";
import { SectionHeader } from "@/_components/SectionHeader";
import globalStyles from "@/_styles/page.module.scss";
import styles from "./index.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoArrowForward, IoDownloadOutline } from "react-icons/io5";
import Link from "next/link";

export const FooterSection: React.FC = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.footerCols}>
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
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/amirbazgir/"
                className={styles.footerLink}>
                <HiOutlineExternalLink /> LinkedIn
              </Link>
              <Link
                target="_blank"
                href="https://github.com/b-amir"
                className={styles.footerLink}>
                <HiOutlineExternalLink /> GitHub
              </Link>
            </div>
            <div className={styles.twoRows}>
              <Link
                target="_blank"
                href="mailto:iamirbazgir@gmail.com"
                className={styles.footerLink}>
                <HiOutlineExternalLink /> E-mail
              </Link>
              <Link
                target="_blank"
                href="tel:+989119273700"
                className={styles.footerLink}>
                <HiOutlineExternalLink /> Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.madeWith}>Made with 🌼🐮👅 and 🤦</div>
  </>
);
