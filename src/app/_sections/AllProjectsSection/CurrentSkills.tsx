"use client";
import styles from "./index.module.scss";
import { TagsRow } from "@/_components/Tag/TagsRow";
import { Project } from "@/_types/Project";
import { useEffect, useState } from "react";
import { TbClearAll as ClearIcon } from "react-icons/tb";

interface ICurrentSkillsProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedProjects: Project[];
}
export function CurrentSkills({
  setSelectedTags,
  selectedProjects,
  selectedTags,
}: ICurrentSkillsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedTags.length > 0) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedTags]);

  const handleClearFilters = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedTags([]);
    }, 300);
  };

  return (
    <div className={styles.currentSkills}>
      <h3>My current skills</h3>
      <p>click on a skill to highlight projects that use it.</p>

      <TagsRow
        interactive
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        title="Frontend:"
        listOfTags={[
          "react",
          "nextjs",
          "typescript",
          "javascript",
          "redux",
          "css",
          "tailwind",
          "sass",
          "themeui",
          "pwa",
        ]}
      />
      <TagsRow
        interactive
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        title="Backend, API, DB:"
        listOfTags={["trpc", "prisma", "nextjs", "postgresql", "sqlite"]}
      />
      <TagsRow
        interactive
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        title="DevOps, Testing:"
        listOfTags={[
          "vitest",
          "cypress",
          "reacttestinglibrary",
          "cicd",
          "githubactions",
          "docker",
          "vercel",
          "githubpages",
          "netlify",
        ]}
      />
      <TagsRow
        interactive
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        title="Libs, etc:"
        listOfTags={[
          "reactquery",
          "reactrouter",
          "zod",
          "authjs",
          "strapi",
          "reactspring",
          "vite",
          "spline",
          "electron",
          "editorjs",
          "html2canvas",
          "xstate",
        ]}
      />

      {(selectedTags.length > 0 || isVisible) && (
        <span
          className={`${styles.selectedProjectsCount} ${
            isVisible ? styles.fadeIn : styles.fadeOut
          }`}
        >
          {selectedProjects.length}
          {selectedProjects.length < 2 ? " project " : " projects "}
          matched
          <button onClick={handleClearFilters}>
            <ClearIcon />
            clear filters
          </button>
        </span>
      )}
    </div>
  );
}
