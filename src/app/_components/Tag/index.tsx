"use client";
import styles from "./index.module.scss";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";
import React, { useEffect, useState } from "react";

interface ITagProps {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  interactive?: boolean;
  selectedTags: string[];
  setSelectedTags?: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Tag = ({
  id,
  name,
  color,
  icon,
  interactive,
  selectedTags,
  setSelectedTags
}: ITagProps) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    selectedTags && setSelected(selectedTags.includes(id));
  }, [selectedTags, id]);
  return (
    <div
      onClick={() => {
        if (interactive && setSelectedTags) {
          setSelectedTags((prev) =>
            prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]
          );
        }
      }}
      className={`${selected ? styles.selectedTag : styles.tag}`}
      style={{
        backgroundColor: interactive ? color + "35" : color + "50",
        border: interactive
          ? "1px solid " + color + "70"
          : "1px solid " + color,
        color: color,
        cursor: interactive ? "pointer" : "default",
        padding: interactive ? "0.25rem 0.5rem" : "0.25rem 0.5rem",
        gap: interactive ? "0.25rem" : "0.5rem",
        boxShadow: interactive ? "0px 2px 2px 0px " + color + "30" : "",
        filter: interactive ? "brightness(0.7)" : "",
        opacity: interactive ? 0.8 : 1,
        transition: "filter $base-pace ease-in-out",
        margin: interactive ? "0rem 0.3rem 0.4rem 0rem" : "unset"
      }}>
      <div className={styles.tagIcon}>{selected ? <CloseIcon /> : icon}</div>
      <div className={styles.tagText}>{name}</div>
    </div>
  );
};
