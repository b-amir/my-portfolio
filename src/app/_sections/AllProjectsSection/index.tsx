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

const Smile3dObject = dynamic(() =>
  import("../../_components/Smile3dObject").then((mod) => mod.Smile3dObject)
);

export interface SkillIcons {
  [key: string]: React.ReactElement;
}

export const getSkillIcon = (tagName: string) => iconMapping[tagName] || null;

export const AllProjectsSection: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      return data;
    };
    fetchProjects();
  }, []);

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
