"use client";
import { Tag } from "./Tag";
import styles from "./styles/page.module.scss";
import skills from "./data/skillTags.json";
import { getSkillIcon } from "./AllProjectsSection";

export function TagsRow({
  title = "",
  listOfTags = [],
  setSelectedTags,
  selectedTags,
  interactive = false
}) {
  return (
    <div className={styles.tagsRow}>
      <h3>{title}</h3>
      <div>
        {listOfTags.map((tag) => (
          <Tag
            selectedTags={selectedTags}
            interactive={interactive}
            setSelectedTags={interactive ? setSelectedTags : null}
            key={tag}
            name={skills.find((skill) => skill.id === tag)?.name}
            color={skills.find((skill) => skill.id === tag)?.color}
            id={skills.find((skill) => skill.id === tag)?.id}
            icon={<div className={styles.icon}>{getSkillIcon(tag)}</div>}
          />
        ))}
      </div>
    </div>
  );
}
