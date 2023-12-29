"use client";
import Spline from "@splinetool/react-spline";
import styles from "./index.module.scss";
import projects from "@/_data/projects.json";
import { Project } from "@/_types/Project";
import globalStyles from "@/_styles/page.module.scss";
import { OtherStack } from "./OtherStack";
import { iconMapping } from "./iconMapping";
import { MdWavingHand } from "react-icons/md";
import { ProjectsGrid } from "./ProjectsGrid";
import { SectionHeader } from "@/_components/SectionHeader";
import { CurrentSkills } from "./CurrentSkills";
import { BsFillGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export interface SkillIcons {
  [key: string]: React.ReactElement;
}

export const getSkillIcon = (tagName: string) => iconMapping[tagName] || null;

export const AllProjectsSection: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  const getProjectsByTags = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      return [];
    }

    return projects.filter((project) =>
      selectedTags.every((tag) =>
        project.tags.some((tagCategory) =>
          Object.values(tagCategory).flat().includes(tag)
        )
      )
    );
  };

  useEffect(() => {
    setSelectedProjects(getProjectsByTags(selectedTags));
  }, [selectedTags]);

  return (
    <div className={styles.allProjectsSection}>
      <SectionHeader
        title="All Skills & Projects"
        icon={<BsFillGridFill className={globalStyles.icon} />}
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
          <Spline scene="https://prod.spline.design/SFtITqXREqMFyNh2/scene.splinecode" />
        </div>
        <p>That&apos;s all for now.</p>
        <div style={{ minHeight: "65px" }}>
          <button
            className={styles.buttonKeepInTouch}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <MdWavingHand /> Let&apos;s keep in touch
          </button>
        </div>
      </div>
    </div>
  );
};
