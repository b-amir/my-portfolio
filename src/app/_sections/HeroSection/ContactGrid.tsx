"use client";
import styles from "./index.module.scss";
import { useCallback, useState, useEffect } from "react";
import { ContactCardItems } from "./ContactCardItems";
import { GrContactInfo as ContactInfoIcon } from "react-icons/gr";

export const ContactGrid: React.FC = () => {
  const [showContactLinksForMobile, setShowContactLinksForMobile] =
    useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts to avoid delay
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleOpenContactLinks = useCallback(() => {
    setShowContactLinksForMobile(true);
  }, []);

  return (
    <div className={`${styles.contactGridContainer} ${isLoaded ? styles.visible : ''}`}>
      {/* Desktop version */}
      <div className={styles.desktopContactLinks}>
        <ContactCardItems
          setShowContactLinksForMobile={setShowContactLinksForMobile}
        />
      </div>

      {/* Mobile trigger - CSS will hide this on desktop */}
      <div
        className={styles.mobileContactMenuTrigger}
        onClick={handleOpenContactLinks}
        role="button"
        tabIndex={0}
        aria-label="Open contact links"
        onKeyDown={(e) =>
          e.key === "Enter" && setShowContactLinksForMobile(true)
        }
        style={{ display: showContactLinksForMobile ? 'none' : undefined }}
      >
        <span>
          <ContactInfoIcon />
        </span>
        Contact Links
      </div>

      {/* Mobile expanded view */}
      {showContactLinksForMobile && (
        <div className={styles.mobileContactLinks}>
          <ContactCardItems
            setShowContactLinksForMobile={setShowContactLinksForMobile}
          />
        </div>
      )}
    </div>
  );
};
