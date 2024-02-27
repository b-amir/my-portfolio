"use client";
import { Tag } from ".";
import { SkillTag } from "@/_types/SkillTag";
import globalStyles from "@/_styles/page.module.scss";
import { getSkillIcon } from "@/_sections/AllProjectsSection";
import { useEffect, useState } from "react";

interface ITagsRowProps {
  title?: string;
  listOfTags?: string[];
  interactive?: boolean;
  setSelectedTags?: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTags?: string[] | undefined;
}
export function TagsRow({
  title = "",
  listOfTags = [],
  setSelectedTags,
  selectedTags,
  interactive = false
}: ITagsRowProps) {
  const [skills, setSkills] = useState<SkillTag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/api/skillTags");
      const data = await response.json();
      setSkills(data);
      return data;
    };
    fetchTags();
  }),
    [];
  return (
    <div className={globalStyles.tagsRow}>
      <h3 className={globalStyles.tagsRowTitle}>{title}</h3>
      <div className={globalStyles.tagsRowTags}>
        {listOfTags.map((tag) => {
          const tagName =
            skills.find((skill) => skill.id === tag)?.name || "...";
          const tagColor =
            skills.find((skill) => skill.id === tag)?.color || "";
          const tagId = skills.find((skill) => skill.id === tag)?.id || "";

          return (
            <Tag
              selectedTags={selectedTags || []}
              interactive={interactive}
              setSelectedTags={interactive ? setSelectedTags : () => {}}
              key={tag}
              name={tagName}
              color={tagColor}
              id={tagId}
              icon={
                <div className={globalStyles.icon}>{getSkillIcon(tag)}</div>
              }
            />
          );
        })}
      </div>
    </div>
  );
}
