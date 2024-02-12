import Link from "next/link";
import globalStyles from "@/_styles/page.module.scss";
import { SiProducthunt as ProductHuntIcon } from "react-icons/si";

interface IProductHuntButtonProps {
  size?: "large" | "small";
  link?: string;
}

export function ProductHuntButton({
  size = "large",
  link
}: IProductHuntButtonProps) {
  return (
    <Link
      style={{ color: "#d85146" }}
      href={link || "#"}
      target="_blank"
      className={`${
        size === "large"
          ? globalStyles.productHuntButtonLarge
          : globalStyles.productHuntButton
      }`}>
      <ProductHuntIcon />
      View on ProductHunt
    </Link>
  );
}
