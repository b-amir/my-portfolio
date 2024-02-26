"use client";
import styles from "./index.module.scss";
import { useState } from "react";
import { useWindowSize } from "@/_hooks/useWindowSize";
import { ContactCardItems } from "./ContactCardItems";
import { GrContactInfo as ContactInfoIcon } from "react-icons/gr";

export const ContactGrid: React.FC = () => {
  const [showContactLinksForMobile, setShowContactLinksForMobile] =
    useState(false);

  const { width, height } = useWindowSize();
  let isMobile = false;

  if (width && height) {
    const aspectRatio = width / height;
    isMobile = aspectRatio < 0.6;
  }

  // prevent the unnecessary flash of data before there's information about the window size:
  if (width === undefined || height === undefined) {
    return null;
  }

  return (
    <>
      {!isMobile && !showContactLinksForMobile && (
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
