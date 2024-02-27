"use client";
import Image from "next/image";
import { useGpuDetect } from "@/_hooks/useGpuDetect";
import { LoadingSpinner } from "./Loading/LoadingSpinner";
import { Suspense, useRef, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function Smile3dObject() {
  const [deviceTier, setDeviceTier] = useGpuDetect();
  const smileObj = useRef();

  function onLoad(splineApp: any) {
    smileObj.current = splineApp;
  }

  function OnError() {
    setDeviceTier("low");
  }

  return (
    <>
      {deviceTier === "mobile" || deviceTier === "low" ? (
        <Image
          src="/low-tier-smile.svg"
          height={175}
          width={462}
          alt="low tier smile"
        />
      ) : deviceTier === "high" ? (
        <Suspense fallback={<LoadingSpinner />}>
          <Spline onLoad={onLoad} onError={OnError} scene="/smile.splinecode" />
        </Suspense>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
