"use client";
import { Tag } from ".";
import { SkillTag } from "@/_types/SkillTag";
import globalStyles from "@/_styles/page.module.scss";
import { getSkillIcon } from "@/_sections/AllProjectsSection";
import { useEffect, useState } from "react";
import { TagsSkeleton } from "../Loading/TagsSkeleton";

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
  const skillsMap = new Map(skills.map((skill) => [skill.id, skill]));

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/api/skillTags");
      const data = await response.json();
      setSkills(data);
    };
    fetchTags();
  }, []);

  return (
    <div className={globalStyles.tagsRow}>
      <h3 className={globalStyles.tagsRowTitle}>{title}</h3>
      <div className={globalStyles.tagsRowTags}>
        {skills.length === 0 ? (
          <TagsSkeleton number={6} />
        ) : (
          listOfTags.map((tag) => {
            const skill = skillsMap.get(tag);
            const tagName = skill?.name || "...";
            const tagColor = skill?.color || "";
            const tagId = skill?.id || "";

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
          })
        )}
      </div>
    </div>
  );
}
