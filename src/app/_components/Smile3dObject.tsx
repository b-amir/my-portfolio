"use client";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Loading from "@/loading";
import { getGPUTier } from "detect-gpu";
import { useEffect, useRef, useState } from "react";

type deviceTiers = "low" | "mobile" | "high" | "loading";

export function Smile3dObject() {
  useEffect(() => {
    async function checkGPU() {
      const gpuTier = await getGPUTier();
      console.log("gpuTier", gpuTier);

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
  const spline = useRef();
  function onLoad(splineApp: any) {
    spline.current = splineApp;
  }

  return (
    <>
      {deviceTier === "mobile" && (
        <Image
          src="/low-tier-smile.svg"
          height={175}
          width={462}
          alt="low tier smile"
          style={{ filter: "opacity(0.25)" }}
        />
      )}
      {deviceTier === "low" && (
        <Image
          src="/low-tier-smile.svg"
          height={175}
          width={462}
          alt="low tier smile"
          style={{ filter: "opacity(0.25)" }}
        />
      )}
      {deviceTier === "high" && (
        <Spline scene="https://prod.spline.design/SFtITqXREqMFyNh2/scene.splinecode" />
      )}
      {deviceTier === "loading" && <Loading />}
    </>
  );
}
