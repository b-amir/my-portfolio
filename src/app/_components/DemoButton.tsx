import Link from "next/link";
import globalStyles from "@/_styles/page.module.scss";
import { FaCircle as LiveButton } from "react-icons/fa";

interface IDemoButtonProps {
  text?: string;
  link?: string;
  size?: "large" | "small";
}

export function DemoButton({ text, link, size = "large" }: IDemoButtonProps) {
  return (
    <Link
      href={link || "#"}
      target="_blank"
      className={`${
        size === "large"
          ? globalStyles.demoButtonLarge
          : globalStyles.demoButton
      }`}>
      <LiveButton
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
