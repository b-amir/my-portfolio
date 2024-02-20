"use client";
import Image from "next/image";
import { getGPUTier } from "detect-gpu";
import { LoadingSpinner } from "./LoadingSpinner";
import { Suspense, useEffect, useRef, useState, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

type deviceTiers = "low" | "mobile" | "high" | "loading";

export function Smile3dObject() {
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

  const [deviceTier, setDeviceTier] = useState<deviceTiers>("loading");
  const smileObj = useRef();
  function onLoad(splineApp: any) {
    smileObj.current = splineApp;
  }
  function OnError() {
    setDeviceTier("low");
  }

  return (
    <>
      {deviceTier === "mobile" && (
        <Image
          src="/low-tier-smile.svg"
          height={175}
          width={462}
          alt="low tier smile"
        />
      )}
      {deviceTier === "low" && (
        <Image
          src="/low-tier-smile.svg"
          height={175}
          width={462}
          alt="low tier smile"
        />
      )}
      {deviceTier === "high" && (
        <Suspense fallback={<LoadingSpinner />}>
          <Spline
            onLoad={onLoad}
            onError={OnError}
            // scene="https://prod.spline.design/SFtITqXREqMFyNh2/scene.splinecode"
            scene="/smile.splinecode"
          />
        </Suspense>
      )}
      {deviceTier === "loading" && <LoadingSpinner />}
    </>
  );
}
