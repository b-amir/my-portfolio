"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/page.module.scss";
import { IoCloseSharp } from "react-icons/io5";

export const Tag: React.FC = ({
  id,
  name,
  color,
  icon,
  interactive,
  selectedTags,
  setSelectedTags
}: {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  interactive?: boolean;
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    selectedTags && setSelected(selectedTags.includes(id));
  });
  return (
    <div
      onClick={() => {
        if (interactive) {
          // setSelected((prev) => !prev);
          setSelectedTags((prev) =>
            prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]
          );
        }
      }}
      className={`${selected ? styles.selectedTag : styles.tag}`}
      style={{
        // lighen the color for bg:
        backgroundColor: interactive ? color + "10" : color + "50",
        border: "1px solid " + color,
        color: color,
        cursor: interactive ? "pointer" : "default",
        padding: interactive ? "0.1rem 0.4rem" : "0.25rem 0.5rem",
        gap: interactive ? "0.25rem" : "0.5rem"
      }}>
      <div className={styles.tagIcon}>{selected ? <IoCloseSharp /> : icon}</div>
      <div className={styles.tagText}>{name}</div>
    </div>
  );
};
