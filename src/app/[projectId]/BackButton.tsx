"use client";
import globalStyles from "@/_styles/page.module.scss";
import { IoMdArrowRoundBack as ArrowIcon } from "react-icons/io";
import { SectionHeader } from "@/_components/SectionHeader";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className={globalStyles.backButton}>
      <SectionHeader
        title="Back to home"
        color="#432b0ee3"
        icon={<ArrowIcon className={globalStyles.icon} />}
      />
    </div>
  );
}
