import styles from "./index.module.scss";
import React, { useLayoutEffect, useRef, useState } from "react";

function TooltipBubble({ text, targetRef }: IBuubleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);

  const [bubbleLayout, setBubbleLayout] = useState({
    position: "bottom",
    style: {}
  });

  useLayoutEffect(() => {
    const bubbleRect = bubbleRef.current?.getBoundingClientRect();
    const targetRect = targetRef.current?.getBoundingClientRect();

    const spaceAbove = targetRect?.top ?? 0;
    const spaceBelow = window.innerHeight - (targetRect?.bottom ?? 0);

    if (
      bubbleRect &&
      bubbleRect?.height > spaceAbove &&
      spaceBelow > spaceAbove
    ) {
      setBubbleLayout({
        position: "bottom",
        style: {
          marginTop: 30, // for animation effect
          top: targetRect && targetRect?.bottom - 100
        }
      });
    } else {
      setBubbleLayout({
        position: "top",
        style: {
          marginBottom: 30, // for animation effect
          bottom: bubbleRect && bubbleRect?.height - 100
        }
      });
    }
  }, [targetRef]);

  return (
    <div
      ref={bubbleRef}
      className={
        bubbleLayout.position === "top"
          ? styles.tooltipBubbleTop
          : styles.tooltipBubbleBottom
      }
      style={bubbleLayout.style}>
      {text}
    </div>
  );
}

export const Tooltip = ({ children, text }: ITooltipProps) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <>
      <span
        ref={contentRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.tooltipTrigger}>
        {children}
      </span>
      {show && <TooltipBubble targetRef={contentRef} text={text} />}
    </>
  );
};

interface ITooltipProps {
  children: React.ReactNode;
  text: React.ReactNode;
}

interface IBuubleProps {
  targetRef: React.RefObject<HTMLDivElement>;
  text: React.ReactNode;
}
