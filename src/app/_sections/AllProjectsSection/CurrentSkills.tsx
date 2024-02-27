"use client";
import styles from "./index.module.scss";
import { TagsRow } from "@/_components/Tag/TagsRow";
import { Project } from "@/_types/Project";
import { TbClearAll as ClearIcon } from "react-icons/tb";

interface ICurrentSkillsProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedProjects: Project[];
}
export function CurrentSkills({
  setSelectedTags,
  selectedProjects,
  selectedTags
}: ICurrentSkillsProps) {
  return (
    <div className={styles.currentSkills}>
      <h3>
        My current skills
        {selectedTags.length > 0 ? (
          <span className={styles.selectedProjectsCount}>
            | {selectedProjects.length}
            {selectedProjects.length < 2 ? " project " : " projects "}
            matched
            <button onClick={() => setSelectedTags([])}>
              <ClearIcon />
              clear
            </button>
          </span>
        ) : (
          ""
        )}
      </h3>
      <p>click on a skill to hilight projects that use it.</p>

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
          "pwa"
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
          "netlify"
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
          "xstate"
        ]}
      />
    </div>
  );
}
