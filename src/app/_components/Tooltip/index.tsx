import React, { useState } from "react";
import styles from "./index.module.scss";

interface ITooltipProps {
  children: React.ReactNode;
  text: React.ReactNode;
}

export const Tooltip = ({ children, text }: ITooltipProps) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.tooltipTrigger}>
      {children}
      {show && <div className={styles.tooltipBubble}>{text}</div>}
    </div>
  );
};
