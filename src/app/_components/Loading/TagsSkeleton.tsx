"use client";
import { useState, useEffect } from "react";
import globalStyles from "@/_styles/page.module.scss";

export const TagsSkeleton = ({ number }: { number: number }) => {
  const [widths, setWidths] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const generatedWidths = [...Array(number)].map(() => 
      Math.floor(Math.random() * 60) + 40
    );
    setWidths(generatedWidths);
  }, [number]);

  const defaultWidths = [...Array(number)].map((_, index) => 
    60 + (index * 10) % 40 
  );

  const currentWidths = isClient ? widths : defaultWidths;

  return (
    <>
      {currentWidths.map((width, index) => (
        <div
          key={index}
          style={{ width: `${width}px` }}
          className={globalStyles.skeletonPulse}
        />
      ))}
    </>
  );
};
