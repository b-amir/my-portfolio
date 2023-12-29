"use client";
import styles from "./index.module.scss";
import { BiShow } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import {
  IoArrowForward as Arrow,
  IoCopyOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from "react-icons/io5";
import { clickToSelectText } from "@/_utils/clickToSelectText";

export interface IContactCardItemsProps {
  setShowContactLinksForMobile: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ContactCardItems({
  setShowContactLinksForMobile
}: IContactCardItemsProps) {
  function copyEmail() {
    navigator.clipboard.writeText("iamirbazgir@gmail.com");
    const emailCopyField = document.getElementById("emailCopyField");
    if (emailCopyField) {
      emailCopyField.innerHTML = "Copied!";
      setTimeout(() => {
        emailCopyField.innerHTML = "iAmirBazgir@gmail.com";
      }, 1000);
    }
  }

  function showNumber() {
    const showNumberField = document.getElementById("showNumberField");
    if (showNumberField) {
      showNumberField.innerHTML = "+989119273700";
      setTimeout(() => {
        showNumberField.innerHTML = "+9891********";
      }, 10000);
    }
  }

  return (
    <div className={styles.contact}>
      <div
        className={styles.contactMobileHeader}
        onClick={() => setShowContactLinksForMobile(false)}>
        <span>
          <span>
            <GrContactInfo />
          </span>
          Contact Links
        </span>
        <IoCloseSharp />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/amirbazgir/"
          className={styles.contactCard}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            <IoLogoLinkedin />
            Linkedin
            <span>
              <Arrow />
            </span>
          </h2>
          <p>Let&apos;s get connected for collaborative opportunities.</p>
        </a>

        <a
          href="https://github.com/b-amir"
          className={styles.contactCard}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            <IoLogoGithub />
            Github
            <span>
              <Arrow />
            </span>
          </h2>
          <p>Take a hands-on tour of my code for yourself.</p>
        </a>

        <a
          href="mailto:iamirbazgir@gmail.com"
          className={styles.contactCard}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            <IoMailOutline />
            Email
            <span>
              <Arrow />
            </span>
          </h2>
          <div
            className={styles.emailCopyField}
            onClick={(e) => e.preventDefault()}>
            <p
              id="emailCopyField"
              onClick={clickToSelectText("emailCopyField")}>
              iAmirBazgir@gmail.com
            </p>
            <div
              className={styles.fieldButton}
              onClick={(e) => {
                copyEmail();
              }}>
              <IoCopyOutline />
            </div>
          </div>
        </a>

        <a
          href="tel:+989119273700"
          className={styles.contactCard}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            <LuPhoneCall />
            Call
            <span>
              <Arrow />
            </span>
          </h2>
          <div
            className={styles.emailCopyField}
            onClick={(e) => e.preventDefault()}>
            <p
              id="showNumberField"
              onClick={clickToSelectText("showNumberField")}>
              +9891********
            </p>
            <div
              className={styles.fieldButton}
              onClick={(e) => {
                showNumber();
              }}>
              <BiShow />
            </div>
          </div>
        </a>

        <div />
      </div>
    </div>
  );
}
