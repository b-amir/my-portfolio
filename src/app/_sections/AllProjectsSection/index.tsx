"use client";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { Project } from "@/_types/Project";
import globalStyles from "@/_styles/page.module.scss";
import { OtherStack } from "./OtherStack";
import { iconMapping } from "./iconMapping";
import { ProjectsGrid } from "./ProjectsGrid";
import { SectionHeader } from "@/_components/SectionHeader";
import { CurrentSkills } from "./CurrentSkills";
import { useEffect, useState } from "react";
import { MdWavingHand as WavingIcon } from "react-icons/md";
import { BsFillGridFill as GridIcon } from "react-icons/bs";
import { useProjects } from "../../../app_context/ProjectsContext";

const Smile3dObject = dynamic(() =>
  import("../../_components/Smile3dObject").then((mod) => mod.Smile3dObject)
);

export interface SkillIcons {
  [key: string]: React.ReactElement;
}

export const getSkillIcon = (tagName: string) => iconMapping[tagName] || null;

export const AllProjectsSection: React.FC = () => {
  const { projects, fullProjects, smallProjects, loading: projectsLoading } = useProjects();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);



  useEffect(() => {
    const getProjectsByTags = (selectedTags: string[]) => {
      if (selectedTags.length === 0) {
        return [];
      }

      return projects.filter((project) =>
        selectedTags.every((tag) =>
          // @ts-ignore
          JSON.parse(project.tags).some((tagCategory) =>
            Object.values(tagCategory).flat().includes(tag)
          )
        )
      );
    };
    setSelectedProjects(getProjectsByTags(selectedTags));
  }, [projects, selectedTags]);

  return (
    <div className={`${styles.allProjectsSection}`} id="allProjects">
      <SectionHeader
        title="All Skills & Projects"
        icon={<GridIcon className={globalStyles.icon} />}
      />

      <div className={styles.allProjectsGrid}>
        <div className={styles.allStacks} id="my-stack">
          <CurrentSkills
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            selectedProjects={selectedProjects}
          />
          <OtherStack />
        </div>
        <ProjectsGrid selectedProjects={selectedProjects} />
      </div>

      <div className={styles.keepInTouchSection}>
        <div className={styles.smile}>
          <Smile3dObject />
        </div>
        <p>That&apos;s all for now.</p>
        <div style={{ minHeight: "65px" }}>
          <button
            className={styles.buttonKeepInTouch}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className={styles.wavingHand}>
              <WavingIcon />
            </span>{" "}
            Let&apos;s keep in touch
          </button>
        </div>
      </div>
    </div>
  );
};
