"use client";
import React from "react";
import styles from "./styles/page.module.scss";

export const Tag: React.FC = ({
  name,
  color,
  icon
}: {
  name: string;
  color: string;
  icon: React.ReactNode;
}) => (
  <div
    className={styles.tag}
    style={{
      // lighen the color for bg:
      backgroundColor: color + "50",
      border: "1px solid " + color,
      color: color
    }}>
    <div className={styles.tagIcon}>{icon}</div>
    <div className={styles.tagText}>{name}</div>
  </div>
);
