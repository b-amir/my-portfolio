"use client";
import Image from "next/image";
import { useGpuDetect } from "@/_hooks/useGpuDetect";
import { LoadingSpinner } from "./Loading/LoadingSpinner";
import { Suspense, useRef, lazy, useState, useEffect } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function Smile3dObject() {
  const [deviceTier, setDeviceTier] = useGpuDetect();
  const smileObj = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  function onLoad(splineApp: any) {
    smileObj.current = splineApp;
    setIsLoading(false);
  }

  function OnError() {
    setDeviceTier("low");
    setIsLoading(false);
  }

  return (
    <>
      {deviceTier === "mobile" || deviceTier === "low" ? (
        <Image
          src="/low-tier-smile.svg"
          height={175}
          width={462}
          alt="low tier smile"
          priority
        />
      ) : deviceTier === "high" ? (
        <Suspense fallback={<LoadingSpinner />}>
          <Spline 
            onLoad={onLoad} 
            onError={OnError} 
            scene="/smile.splinecode" 
          />
          {isLoading && <LoadingSpinner />}
        </Suspense>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
