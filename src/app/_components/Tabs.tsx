"use client";
import { Project } from "@/_types/Project";
import { useState } from "react";
import globalStyles from "@/_styles/page.module.scss";

type Tab = "features" | "challenges";

export function Tabs({ currentProject }: { currentProject: Project }) {
  const [visibleTab, setVisibleTab] = useState<Tab>("features");
  const [tabChanged, setTabChanged] = useState(false);

  const selectTabHandler = (tab: Tab) => {
    setVisibleTab(tab);
    setTabChanged(true);
    setTimeout(() => setTabChanged(false), 500);
  };

  function getSelectedStyle(tab: Tab) {
    return visibleTab === tab
      ? {
          color: "#7b7b7b",
          transition: "color 0.2s ease-in",
          border: "1px solid hwb(0 56% 44% / 0.26)",
          borderBottom: "none"
        }
      : {
          color: "#8e8e8e82",
          borderBottom: "1px solid hwb(0 56% 44% / 0.26)"
        };
  }

  const getTabData = (tab: Tab) => {
    const classNamePrefix = visibleTab;
    const items = currentProject?.[tab];
    return {
      className: globalStyles[`${classNamePrefix}`],
      titleClassName: globalStyles[`${classNamePrefix}Title`],
      listClassName: globalStyles[`${classNamePrefix}List`],
      items
    };
  };

  const tabData = getTabData(visibleTab);

  return (
    <div className={tabData.className} id="tabs">
      <div className={tabData.titleClassName}>
        <span
          onClick={() => selectTabHandler("features")}
          style={getSelectedStyle("features")}>
          Features
        </span>
        <span
          onClick={() => selectTabHandler("challenges")}
          style={getSelectedStyle("challenges")}>
          Challenges
        </span>
      </div>
      <ul
        className={`${tabData.listClassName} ${
          tabChanged ? globalStyles.slideIn : ""
        }`}>
        {tabData.items?.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  );
}
