"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import { useDebounce } from "@/_hooks/useDebounce";
import { useGpuDetect } from "@/_hooks/useGpuDetect";
import { FaCheckCircle } from "react-icons/fa";
import { Suspense, useEffect, useRef, useState, lazy } from "react";
import { FiBox } from "react-icons/fi";

const Spline = lazy(() => import("@splinetool/react-spline"));

type deviceTiers = "low" | "mobile" | "high" | "loading";

export function Fry3dObject() {
  const [deviceTier, setDeviceTier] = useGpuDetect();
  const [isLoading, setIsLoading] = useState(true);
  const [consentGiven, setConsentGiven] = useState("pending");

  const visibility = useDebounce(isLoading ? "hidden" : "visible", 200);

  const fryObj = useRef();

  useEffect(() => {
    if (deviceTier !== "loading") {
      setIsLoading(false);
    }
  }, [deviceTier]);

  function onLoad(splineApp: any) {
    fryObj.current = splineApp;
    setIsLoading(false);
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
                    setConsentGiven("no");
                    setDeviceTier("low");
                  }
                }}
              >
                No
              </button>
            </div>
          </div>
        </>
      )}
      {deviceTier === "high" && consentGiven === "yes" && (
        <Suspense fallback={isLoading ? <LowTierImage /> : null}>
          <Spline
            onLoad={onLoad}
            onError={OnError}
            style={{ visibility }}
            scene="/fry.splinecode"
            className={`${isLoading ? "" : styles.appear}`}
          />
        </Suspense>
      )}
      {deviceTier === "loading" && <LowTierImage />}
    </>
  );
}

export const LowTierImage = () => (
  <Image src="/low-tier-fry.svg" height={458} width={400} alt="low tier fry" />
);
