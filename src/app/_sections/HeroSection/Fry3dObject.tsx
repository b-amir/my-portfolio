"use client";
import Spline from "@splinetool/react-spline";

export function Fry3dObject({ isSmallScreen }: { isSmallScreen: boolean }) {
  return (
    <>
      {/* Render a less GPU consuming scene if device is handheld */}

      {isSmallScreen ? (
        <Spline scene="https://prod.spline.design/AmgucmBUcWHIoyof/scene.splinecode" />
      ) : (
        <Spline scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode" />
      )}
    </>
  );
}
