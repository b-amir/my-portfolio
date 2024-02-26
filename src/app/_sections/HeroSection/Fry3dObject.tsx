"use client";
import Image from "next/image";
import { useDebounce } from "@/_hooks/useDebounce";
import { useGpuDetect } from "@/_hooks/useGpuDetect";
import { Suspense, useEffect, useRef, useState, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

type deviceTiers = "low" | "mobile" | "high" | "loading";

export function Fry3dObject() {
  const [deviceTier, setDeviceTier] = useGpuDetect();
  const [isLoading, setIsLoading] = useState(true);
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
      {deviceTier === "high" && (
        <Suspense fallback={isLoading ? <LowTierImage /> : null}>
          <Spline
            onLoad={onLoad}
            onError={OnError}
            style={{ visibility }}
            scene="/fry.splinecode"
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
