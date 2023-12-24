"use client";
import styles from "../styles/page.module.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SectionHeader } from "../SectionHeader";
import Link from "next/link";

export function BackButton() {
  return (
    <Link prefetch={true} href="/" className={styles.backButton}>
      <SectionHeader
        title="Back to home"
        color="#432b0ee3"
        icon={<IoMdArrowRoundBack className={styles.icon} />}
      />
    </Link>
  );
}
