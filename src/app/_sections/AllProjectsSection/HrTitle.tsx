import styles from "./index.module.scss";
import { FiArrowRight as ArrowIcon } from "react-icons/fi";

export const HrTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.hrTitleContainer}>
      <hr />
      <span>{title}</span>
      <ArrowIcon />
    </div>
  );
};
