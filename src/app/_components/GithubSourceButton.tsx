"use client";
import Link from "next/link";
import globalStyles from "@/_styles/page.module.scss";
import { IoLogoGithub } from "react-icons/io5";

interface IGithubSourceButtonProps {
  size?: "large" | "small";
  link?: string;
}

export function GithubSourceButton({
  size = "large",
  link
}: IGithubSourceButtonProps) {
  return (
    <Link
      href={link || "#"}
      target="_blank"
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
