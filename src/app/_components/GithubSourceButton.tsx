import Link from "next/link";
import globalStyles from "@/_styles/page.module.scss";
import { IoLogoGithub as GithubIcon } from "react-icons/io5";

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
      <GithubIcon />
      View Source on GitHub
    </Link>
  );
}
