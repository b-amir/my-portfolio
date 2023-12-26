"use client";
import { Tag } from ".";
import globalStyles from "@/_styles/page.module.scss";
import styles from "./index.module.scss";

import skills from "@/_data/skillTags.json";
import { getSkillIcon } from "@/_sections/AllProjectsSection";

export function TagsRow({
  title = "",
  listOfTags = [],
  setSelectedTags,
  selectedTags,
  interactive = false
}) {
  return (
    <div className={globalStyles.tagsRow}>
      <h3 className={globalStyles.tagsRowTitle}>{title}</h3>
      <div className={globalStyles.tagsRowTags}>
        {listOfTags.map((tag) => (
          <Tag
            selectedTags={selectedTags}
            interactive={interactive}
            setSelectedTags={interactive ? setSelectedTags : null}
            key={tag}
            name={skills.find((skill) => skill.id === tag)?.name}
            color={skills.find((skill) => skill.id === tag)?.color}
            id={skills.find((skill) => skill.id === tag)?.id}
            icon={<div className={globalStyles.icon}>{getSkillIcon(tag)}</div>}
          />
        ))}
      </div>
    </div>
  );
}
