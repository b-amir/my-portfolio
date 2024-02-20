"use client";
import Image from "next/image";
import { getGPUTier } from "detect-gpu";
import { LoadingSpinner } from "@/_components/LoadingSpinner";
import { Suspense, useEffect, useRef, useState, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

type deviceTiers = "low" | "mobile" | "high" | "loading";

export function Fry3dObject() {
  const [deviceTier, setDeviceTier] = useState<deviceTiers>("loading");
  const spline = useRef();

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
    spline.current = splineApp;
  }

  return (
    <>
      {deviceTier === "mobile" && (
        <Image
          src="/low-tier-fry.svg"
          height={458}
          width={400}
          alt="low tier fry"
        />
      )}
      {deviceTier === "low" && (
        <Image
          src="/low-tier-fry.svg"
          height={458}
          width={400}
          alt="low tier fry"
        />
      )}
      {deviceTier === "high" && (
        <Suspense fallback={<LoadingSpinner />}>
          <Spline
            onLoad={onLoad}
            // scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode"
            scene="/scene.splinecode"
          />
        </Suspense>
      )}
      {deviceTier === "loading" && <LoadingSpinner />}
    </>
  );
}
