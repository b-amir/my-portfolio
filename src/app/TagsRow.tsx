"use client";
import { Tag } from "./Tag";
import styles from "./styles/page.module.scss";
import skills from "./data/skillTags.json";
import { getSkillIcon } from "./AllProjectsSection";

export function TagsRow({ title = "", listOfTags = [] }) {
  return (
    <div className={styles.tagsRow}>
      <h3>{title}</h3>
      <div>
        {listOfTags.map((tag) => (
          <Tag
            key={tag}
            name={skills.find((skill) => skill.id === tag)?.name}
            color={skills.find((skill) => skill.id === tag)?.color}
            icon={<div className={styles.icon}>{getSkillIcon(tag)}</div>}
          />
        ))}
      </div>
    </div>
  );
}
