"use client";
import globalStyles from "@/_styles/page.module.scss";

interface ISectionHeaderProps {
  title: string;
  color?: string;
  icon: JSX.Element;
}

export function SectionHeader({
  title,
  color = "#8c8c8c",
  icon
}: ISectionHeaderProps) {
  return (
    <div className={globalStyles.sectionHeader} style={{ color }}>
      <h3>
        {icon}
        {title}
      </h3>
    </div>
  );
}
