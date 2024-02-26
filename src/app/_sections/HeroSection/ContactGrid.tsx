"use client";
import styles from "./index.module.scss";
import { useState } from "react";
import { useGpuDetect } from "@/_hooks/useGpuDetect";
import { ContactCardItems } from "./ContactCardItems";
import { GrContactInfo as ContactInfoIcon } from "react-icons/gr";

export const ContactGrid: React.FC = () => {
  const [showContactLinksForMobile, setShowContactLinksForMobile] =
    useState(false);
  const [deviceTier] = useGpuDetect();

  // Determine if the device is considered mobile based on deviceTier
  const isMobile = deviceTier === "mobile";

  // Prevent rendering until the deviceTier is determined
  if (deviceTier === "loading") {
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
