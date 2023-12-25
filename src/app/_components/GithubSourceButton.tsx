"use client";
import Link from "next/link";
import globalStyles from "@/_styles/page.module.scss";
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
          ? globalStyles.githubSourceButtonLarge
          : globalStyles.githubSourceButton
      }`}>
      <IoLogoGithub />
      View Source on GitHub
    </Link>
  );
}
