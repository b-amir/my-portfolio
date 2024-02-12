"use client";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export function Fry3dObject({ isSmallScreen }: { isSmallScreen: boolean }) {
  const spline = useRef();
  function onLoad(splineApp: any) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }
  return (
    <>
      {/* Render a less GPU consuming scene if device is handheld */}
      {isSmallScreen ? (
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/AmgucmBUcWHIoyof/scene.splinecode"
        />
      ) : (
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode"
        />
      )}
    </>
  );
}
