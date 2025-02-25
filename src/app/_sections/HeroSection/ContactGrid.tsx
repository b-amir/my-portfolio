"use client";
import styles from "./index.module.scss";
import { useCallback, useState } from "react";
import { useWindowSize } from "@/_hooks/useWindowSize";
import { ContactCardItems } from "./ContactCardItems";
import { GrContactInfo as ContactInfoIcon } from "react-icons/gr";

export const ContactGrid: React.FC = () => {
  const [showContactLinksForMobile, setShowContactLinksForMobile] =
    useState(false);

  const { width } = useWindowSize();

  const MOBILE_BREAKPOINT = 700;
  const isMobile = width !== undefined && width <= MOBILE_BREAKPOINT;

  const handleOpenContactLinks = useCallback(() => {
    setShowContactLinksForMobile(true);
  }, []);

  if (width === undefined) {
    return null; 
  }

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
          onClick={() => setShowContactLinksForMobile(true)}
          role="button"
          tabIndex={0}
          aria-label="Open contact links"
          onKeyDown={(e) =>
            e.key === "Enter" && setShowContactLinksForMobile(true)
          }
        >
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
