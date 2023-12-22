"use client";
import { useState } from "react";
import styles from "./styles/page.module.scss";
import { TagsRow } from "./TagsRow";
import { TbClearAll } from "react-icons/tb";

export function CurrentSkills({
  setSelectedTags,
  selectedProjects,
  selectedTags
}) {
  return (
    <div className={styles.currentSkills}>
      <h3>
        My current skills
        {selectedProjects.length > 0 ? (
          <span className={styles.selectedProjectsCount}>
            | {selectedProjects.length} selected
            <button onClick={() => setSelectedTags([])}>
              <TbClearAll />
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
        listOfTags={["trpc", "prisma", "nextjs", "postgresql"]}
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
          "html2canvas"
        ]}
      />
    </div>
  );
}
