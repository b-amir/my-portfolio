"use client";
import styles from "./index.module.scss";
import globalStyles from "@/_styles/page.module.scss";
import { IoArrowForward as ArrowIcon } from "react-icons/io5";

export const MyStackButton: React.FC = () => {
  return (
    <>
      <button
        className={styles.seeMyStack}
        onClick={() => {
          document?.getElementById("my-stack")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }}>
        My technical stack & projects{" "}
        <span className={globalStyles.icon}>
          <ArrowIcon />
        </span>
      </button>
    </>
  );
};
