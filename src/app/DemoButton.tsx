"use client";
import Link from "next/link";
import styles from "./styles/page.module.scss";
import { FaCircle } from "react-icons/fa";

export function DemoButton({
  text,
  link,
  size = "large"
}: {
  text?: string;
  link?: string;
  size?: "large" | "small";
}) {
  return (
    <Link
      href={link || "#"}
      className={`${
        size === "large" ? styles.demoButtonLarge : styles.demoButton
      }`}>
      <FaCircle
        style={{
          color: "#24e724",
          fontSize: "11px",
          filter: "drop-shadow(0px 0px 6px #31a131)"
        }}
      />
      {text || "Live Demo"}
    </Link>
  );
}
