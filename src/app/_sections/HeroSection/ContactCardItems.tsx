"use client";
import styles from "./index.module.scss";
import { clickToSelectText } from "@/_utils/clickToSelectText";
import { BiShow as ShowIcon } from "react-icons/bi";
import { LuPhoneCall as PhoneIcon } from "react-icons/lu";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";
import { GrContactInfo as ContactInfoIcon } from "react-icons/gr";
import {
  IoMailOutline as MailIcon,
  IoCopyOutline as CopyIcon,
  IoLogoGithub as GithubIcon,
  IoArrowForward as ArrowIcon,
  IoLogoLinkedin as LinkedinIcon
} from "react-icons/io5";

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
            <ContactInfoIcon />
          </span>
          Contact Links
        </span>
        <CloseIcon />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/amirbazgir/"
          className={styles.contactCard}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            <LinkedinIcon />
            Linkedin
            <span>
              <ArrowIcon />
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
            <GithubIcon />
            Github
            <span>
              <ArrowIcon />
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
            <MailIcon />
            Email
            <span>
              <ArrowIcon />
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
              <CopyIcon />
            </div>
          </div>
        </a>

        <a
          href="tel:+989119273700"
          className={styles.contactCard}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            <PhoneIcon />
            Call
            <span>
              <ArrowIcon />
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
              <ShowIcon />
            </div>
          </div>
        </a>

        <div />
      </div>
    </div>
  );
}
