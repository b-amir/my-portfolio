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
import { SelectedProjectsCount } from "./SelectedProjectsCount";

const Smile3dObject = dynamic(() =>
  import("../../_components/Smile3dObject").then((mod) => mod.Smile3dObject)
);

export interface SkillIcons {
  [key: string]: React.ReactElement;
}

export const getSkillIcon = (tagName: string) => iconMapping[tagName] || null;

const extractTagValues = (projectTags: any): string[] => {
  const allTagValues: string[] = [];
  
  if (typeof projectTags === 'string') {
    try {
      projectTags = JSON.parse(projectTags);
    } catch (e) {
      return [projectTags.toLowerCase()];
    }
  }
  
  if (Array.isArray(projectTags)) {
    projectTags.forEach(tag => {
      if (typeof tag === 'string') {
        allTagValues.push(tag.toLowerCase());
      } else if (typeof tag === 'object' && tag !== null) {
        Object.values(tag).forEach(value => {
          if (typeof value === 'string') {
            allTagValues.push(value.toLowerCase());
          } else if (Array.isArray(value)) {
            value.forEach(v => {
              if (typeof v === 'string') {
                allTagValues.push(v.toLowerCase());
              }
            });
          }
        });
      }
    });
  } else if (typeof projectTags === 'object' && projectTags !== null) {
    Object.values(projectTags).forEach(categoryTags => {
      if (Array.isArray(categoryTags)) {
        categoryTags.forEach(tag => {
          if (typeof tag === 'string') {
            allTagValues.push(tag.toLowerCase());
          } else if (typeof tag === 'object' && tag !== null) {
            Object.values(tag).forEach(value => {
              if (typeof value === 'string') {
                allTagValues.push(value.toLowerCase());
              }
            });
          }
        });
      }
    });
  }
  
  return allTagValues;
};

const filterProjectsByTags = (projects: Project[], selectedTags: string[]): Project[] => {
  if (selectedTags.length === 0) {
    return [];
  }
  
  return projects.filter(project => {
    if (!project.tags) return false;
    
    try {
      const allTagValues = extractTagValues(project.tags);
      
      return selectedTags.every(selectedTag => 
        allTagValues.includes(selectedTag.toLowerCase())
      );
    } catch (error) {
      return false;
    }
  });
};

export const AllProjectsSection: React.FC = () => {
  const { projects, fullProjects, smallProjects, loading: projectsLoading } = useProjects();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const filteredProjects = filterProjectsByTags(projects, selectedTags);
    setSelectedProjects(filteredProjects);
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
        <SelectedProjectsCount
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          selectedProjects={selectedProjects}
        />
        <ProjectsGrid selectedProjects={selectedProjects} />
      </div>

      <div className={styles.keepInTouchSection} id="keepInTouch">
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
