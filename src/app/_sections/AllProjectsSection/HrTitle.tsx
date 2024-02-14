"use client";
import { FiArrowRight } from "react-icons/fi";

export const HrTitle = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "space-between",
        background: "rgba(255, 255, 255, 0.45)",
        border: "1px solid rgba(146, 150, 185, 0.4509803922)"
      }}>
      <hr
        style={{
          borderTop: "1px solid  rgba(146, 150, 185, 0.4509803922)",
          margin: "0",
          width: "50%",
          flexGrow: "1"
        }}
      />
      <span
        style={{
          display: "inline-block",
          padding: "0 0.5rem 0 1rem",
          flexShrink: "0",
          color: "#7b7b7b"
        }}>
        {title}
      </span>
      <FiArrowRight
        style={{
          flexShrink: "0",
          color: " rgba(146, 150, 185, 0.4509803922)"
        }}
      />
    </div>
  );
};
