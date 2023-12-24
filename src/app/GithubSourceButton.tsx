"use client";
import Link from "next/link";
import styles from "./styles/page.module.scss";
import { IoLogoGithub } from "react-icons/io5";

export function GithubSourceButton({
  size = "large",
  link
}: {
  size?: "large" | "small";
  link?: string;
}) {
  return (
    <Link
      href={link || "#"}
      className={`${
        size === "large"
          ? styles.githubSourceButtonLarge
          : styles.githubSourceButton
      }`}>
      <IoLogoGithub />
      View Source on GitHub
    </Link>
  );
}
