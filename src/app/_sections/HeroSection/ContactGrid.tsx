"use client";
import styles from "./index.module.scss";
import { useState } from "react";
import { useWindowSize } from "@/_hooks/useWindowSize";
import { ContactCardItems } from "./ContactCardItems";
import { GrContactInfo as ContactInfoIcon } from "react-icons/gr";

export const ContactGrid: React.FC = () => {
  const [showContactLinksForMobile, setShowContactLinksForMobile] =
    useState(false);

  const { width } = useWindowSize();

  const isMobile = typeof window === "undefined" ? false : (width ?? 0) < 600;

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
            <ContactInfoIcon />
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
