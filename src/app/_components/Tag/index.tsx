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
  inline?: boolean;
}

export const Tag = ({
  id,
  name,
  color,
  icon,
  interactive,
  selectedTags,
  setSelectedTags,
  inline = false,
}: ITagProps) => {
  const [selected, setSelected] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    selectedTags && setSelected(selectedTags.includes(id));
  }, [selectedTags, id]);

const handleTagClick = () => {
  if (interactive && setSelectedTags) {
    setAnimating(true);
    
    setTimeout(() => {
      setSelectedTags((prev) =>
        prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]
      );
      
      setTimeout(() => setAnimating(false), 300);
    }, 50);
  }
};


  return (
    <span
      onClick={handleTagClick}
      className={`${selected ? styles.selectedTag : styles.tag} ${
        animating ? styles.animating : ""
      }`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        marginTop: inline ? "2px" : "0",
        backgroundColor: interactive
          ? selected
            ? color + "60"
            : color + "35"
          : color + "50",
        border: interactive
          ? selected
            ? "1px solid " + color
            : "1px solid " + color + "70"
          : "1px solid " + color,
        color: color,
        cursor: interactive ? "pointer" : "default",
        padding: inline
          ? "0.15rem 0.35rem"
          : interactive
          ? "0.9rem 0.7rem"
          : "0.25rem 0.5rem",
        gap: inline
        ? "0.2rem"
        : interactive ? "0.25rem" : "0.5rem",
        boxShadow: interactive
          ? selected
            ? "0px 3px 4px 0px " + color + "50"
            : "0px 2px 2px 0px " + color + "30"
          : "",
        filter: interactive
          ? selected
            ? "brightness(1)"
            : "brightness(0.7)"
          : "",
        opacity: 1,
        transition: "all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        margin: interactive ? "0rem 0.3rem 0.4rem 0rem" : "unset",
        height: inline ? "21px" : "25px",
        transform: animating ? "scale(1.1)" : "scale(1)",
        position: "relative",
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        fontWeight: 500,
        letterSpacing: "0.01em",
        willChange: "transform",
        backfaceVisibility: "hidden",
        textShadow: `0 0 1px rgba(255, 255, 255, 0.1)`,
      }}
    >
      <span
        className={styles.tagIcon}
        style={{
          transition:
            "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease",
          transform: animating ? "rotate(90deg)" : "rotate(0deg)",
          opacity: animating ? 0.5 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selected ? <CloseIcon /> : icon}
      </span>
      <span
        className={styles.tagText}
        style={{
          fontSize: inline ? "0.75rem" : "0.9rem",
          lineHeight: "1.2",
          fontWeight: 400,
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3px",
        }}
      >
        {name}
      </span>
    </span>
  );
};
