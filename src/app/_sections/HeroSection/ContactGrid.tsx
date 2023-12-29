"use client";
import styles from "./index.module.scss";
import { useState } from "react";
import { GrContactInfo } from "react-icons/gr";
import { ContactCardItems } from "./ContactCardItems";

export const ContactGrid: React.FC = () => {
  const [showContactLinksForMobile, setShowContactLinksForMobile] =
    useState(false);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 600 : false;

  return (
    <>
      {!isMobile && (
        <ContactCardItems
          setShowContactLinksForMobile={setShowContactLinksForMobile}
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
        <ContactCardItems
          setShowContactLinksForMobile={setShowContactLinksForMobile}
        />
      )}
    </>
  );
};
