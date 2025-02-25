"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import { FiBox } from "react-icons/fi";
import { useDebounce } from "@/_hooks/useDebounce";
import { useGpuDetect } from "@/_hooks/useGpuDetect";
import { FaCheckCircle } from "react-icons/fa";
import { useLocalStorage } from "@/_hooks/useLocalStorage";
import { Suspense, useEffect, useRef, useState, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

type deviceTiers = "low" | "mobile" | "high" | "loading";

export function Fry3dObject() {
  const [deviceTier, setDeviceTier] = useGpuDetect();
  const [isLoading, setIsLoading] = useState(true);
  const [consentGiven, setConsentGiven] = useLocalStorage<string>(
    "consentTo3dObject",
    "pending"
  );

  const visibility = useDebounce(isLoading ? "hidden" : "visible", 200);

  const fryObj = useRef();

  useEffect(() => {
    if (deviceTier !== "loading") {
      setIsLoading(false);
    }
  }, [deviceTier]);

  function onLoad(splineApp: any) {
    fryObj.current = splineApp;
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }

  function OnError() {
    setDeviceTier("low");
  }

  return (
    <>
      {deviceTier === "mobile" && <LowTierImage />}
      {deviceTier === "low" && <LowTierImage />}
      {deviceTier === "high" && consentGiven === "pending" && (
        <>
          <LowTierImage />
          <div className={styles.consentDialog}>
            <FiBox style={{ fontSize: "xx-large" }} />
            <p className={styles.consentTitle}>OK to display a 3D object?</p>
            <div className={styles.consentSubtitle}>
              <p>Your device is detected to be capable.</p>
            </div>

            <div className={styles.buttonsRow}>
              <button
                onClick={() => {
                  setConsentGiven("yes");
                }}
              >
                <FaCheckCircle /> Yes
              </button>
              <button
                onClick={() => {
                  {
                    setConsentGiven("pending");
                    setDeviceTier("low");
                  }
                }}
              >
                Not now
              </button>
            </div>
          </div>
        </>
      )}
      {deviceTier === "high" && consentGiven === "yes" && (
        <>
          {/* Always render the fallback image initially */}
          {isLoading && <LowTierImage />}
          <Suspense fallback={<LowTierImage />}>
            <Spline
              onLoad={onLoad}
              onError={OnError}
              style={{
                visibility,
                position: "absolute", 
                top: 0,
                left: 0,
              }}
              scene="/fry.splinecode"
              className={`${isLoading ? "" : styles.appear}`}
            />
          </Suspense>
        </>
      )}
      {deviceTier === "loading" && <LowTierImage />}
    </>
  );
}

export const LowTierImage = () => (
  <Image src="/low-tier-fry.svg" height={458} width={400} alt="low tier fry" />
);
