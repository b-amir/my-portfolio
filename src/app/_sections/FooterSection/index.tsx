import Link from "next/link";
import styles from "./index.module.scss";
import globalStyles from "@/_styles/page.module.scss";
import { HiOutlineExternalLink as LinkICon } from "react-icons/hi";
import { IoDownloadOutline as DownloadIcon } from "react-icons/io5";

export const FooterSection: React.FC = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.footerCols}>
        <div className={styles.footerText}>
          <h2>Thanks for considering my work.</h2>
          <p>
            Let me emphasize that every project carries a piece of me.{" "}
            <span className={globalStyles.generalHighlight}>
              I treat each one as a unique product with its own identity
            </span>{" "}
            —a delightful challenge and an{" "}
            <span className={globalStyles.generalHighlight}>
              opportunity to learn something new
            </span>
            .
            <br />
            My hope is that you discover as much joy in experiencing my work as
            I did in bringing it to life. Cheers!
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a
            href="https://b-amir.storage.iran.liara.space/resume/Amir_Bazgir_Resume.pdf"
            target="_blank"
            className={styles.footerResume}>
            {" "}
            <DownloadIcon /> Resume.pdf{" "}
          </a>
          <div className={styles.twoCols}>
            <div className={styles.twoRows}>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/amirbazgir/"
                className={styles.footerLink}>
                <LinkICon /> LinkedIn
              </Link>
              <Link
                target="_blank"
                href="https://github.com/b-amir"
                className={styles.footerLink}>
                <LinkICon /> GitHub
              </Link>
            </div>
            <div className={styles.twoRows}>
              <Link
                target="_blank"
                href="mailto:iamirbazgir@gmail.com"
                className={styles.footerLink}>
                <LinkICon /> E-mail
              </Link>
              <Link
                target="_blank"
                href="tel:+989119273700"
                className={styles.footerLink}>
                <LinkICon /> Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.madeWith}>Made with 🌼🐮👅 and 🤦</div>
  </>
);
