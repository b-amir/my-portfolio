"use client";
import Image from "next/image";
import { getGPUTier } from "detect-gpu";
import { Suspense, useEffect, useRef, useState, lazy } from "react";
import { useDebounce } from "@/_hooks/useDebounce";

const Spline = lazy(() => import("@splinetool/react-spline"));

type deviceTiers = "low" | "mobile" | "high" | "loading";

export function Fry3dObject() {
  const [deviceTier, setDeviceTier] = useState<deviceTiers>("loading");
  const [isLoading, setIsLoading] = useState(true);
  const visibility = useDebounce(isLoading ? "hidden" : "visible", 200);

  const fryObj = useRef();

  useEffect(() => {
    async function checkGPU() {
      const gpuTier = await getGPUTier();
      if (gpuTier) {
        const { tier, isMobile, fps } = gpuTier;
        if (isMobile) {
          setDeviceTier("mobile");
        } else if (fps === undefined || fps < 40 || tier < 2) {
          setDeviceTier("low");
        } else {
          setDeviceTier("high");
        }
      }
    }

    checkGPU();
  }, []);

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
            // scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode"
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
