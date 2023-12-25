"use client";
import styles from "./styles/page.module.scss";
import { LuPhoneCall } from "react-icons/lu";
import {
  IoArrowForward as Arrow,
  IoCopyOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { GrContactInfo } from "react-icons/gr";

export const ContactGrid: React.FC = () => {
  const [showContactLinksForMobile, setShowContactLinksForMobile] =
    useState(false);

  const isMobile = window.innerWidth < 600;

  return (
    <>
      {!isMobile && (
        <ContactMain
          setShowContactLinksForMobile={setShowContactLinksForMobile}
          clickToSelectText={clickToSelectText}
        />
      )}
      {isMobile && !showContactLinksForMobile && (
        <div
          className={styles.mobileContactMenuTrigger}
          onClick={() => setShowContactLinksForMobile(true)}>
          <span>
            <GrContactInfo />
          </span>
          Contact Links
        </div>
      )}

      {isMobile && showContactLinksForMobile && (
        <ContactMain
          setShowContactLinksForMobile={setShowContactLinksForMobile}
          clickToSelectText={clickToSelectText}
        />
      )}
    </>
  );

  function clickToSelectText(elementId: string) {
    return (e) => {
      const elementToSelect = document.getElementById(elementId);
      const range = document.createRange();
      range.selectNodeContents(elementToSelect);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    };
  }
};
function ContactMain({ setShowContactLinksForMobile, clickToSelectText }) {
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
          className={styles.card}
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
          className={styles.card}
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
          className={styles.card}
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
                // copy to clipboard:
                navigator.clipboard.writeText("iamirbazgir@gmail.com");
                // change #emailCopyField to "copied!" for 1 second:
                const emailCopyField =
                  document.getElementById("emailCopyField");
                emailCopyField.innerHTML = "Copied!";
                setTimeout(() => {
                  emailCopyField.innerHTML = "iAmirBazgir@gmail.com";
                }, 1000);
              }}>
              <IoCopyOutline />
            </div>
          </div>
        </a>

        <a
          href="tel:+989119273700"
          className={styles.card}
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
                // show the number:
                const showNumberField =
                  document.getElementById("showNumberField");
                showNumberField.innerHTML = "+989119273700";
                setTimeout(() => {
                  showNumberField.innerHTML = "+9891********";
                }, 10000);
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
