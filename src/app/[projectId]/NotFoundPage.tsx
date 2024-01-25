"use client";
import globalStyles from "@/_styles/page.module.scss";
import { BackButton } from "./BackButton";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Smile3dObject } from "@/_components/Smile3dObject";

export function NotFoundPage() {
  return (
    <div className={globalStyles.errorPage}>
      <BackButton />
      <div className={globalStyles.errorMessage}>
        <h1>Project not found</h1>
        <div>
          <Smile3dObject />
        </div>
      </div>
      <ProgressBar
        height="6px"
        color="#f15c55"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </div>
  );
}
