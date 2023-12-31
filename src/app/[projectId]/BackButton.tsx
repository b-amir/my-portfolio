"use client";
import globalStyles from "@/_styles/page.module.scss";
import { IoMdArrowRoundBack as ArrowIcon } from "react-icons/io";
import { SectionHeader } from "@/_components/SectionHeader";
import Link from "next/link";

export function BackButton() {
  return (
    <Link prefetch={true} href="/" className={globalStyles.backButton}>
      <SectionHeader
        title="Back to home"
        color="#432b0ee3"
        icon={<ArrowIcon className={globalStyles.icon} />}
      />
    </Link>
  );
}
