"use client";

import dynamic from "next/dynamic";

const ProgressBar = dynamic(() => import("@/_components/ProgressBar"), {
  ssr: false,
});

interface ClientWrapperProps {
  children: React.ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
