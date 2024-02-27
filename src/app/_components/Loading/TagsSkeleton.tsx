"use client";
import globalStyles from "@/_styles/page.module.scss";

export const TagsSkeleton: React.FC = () => {
  return (
    <>
      {[...Array(4)].map((_, index) => {
        const randomWidth = Math.floor(Math.random() * 60) + 40;
        return (
          <div
            key={index}
            style={{ width: `${randomWidth}px` }}
            className={globalStyles.skeletonPulse}
          />
        );
      })}
    </>
  );
};
