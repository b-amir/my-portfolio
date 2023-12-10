"use client";
import styles from "./styles/page.module.scss";

export function SectionHeader({
  title,
  color = "#8c8c8c",
  icon
}: {
  title: string;
  color?: string;
  icon: JSX.Element;
}) {
  return (
    <div className={styles.sectionHeader} style={{ color }}>
      <h1>
        {icon}
        {title}
      </h1>
    </div>
  );
}
