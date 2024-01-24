"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

// this component is made separately to take advantage of nprogress
// while still keeping the server components.

const NextNProgressClient = () => {
  return (
    <ProgressBar
      height="6px"
      color="#f15c55"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
};

export default NextNProgressClient;
