"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import skills from "@/_data/skillTags.json";
import { Tag } from "@/_components/Tag";
import projects from "@/_data/projects.json";
import { Project } from "@/_types/Project";
import globalStyles from "@/_styles/page.module.scss";
import { ProjectCard } from "./ProjectCard";
import { getSkillIcon } from ".";
import { howManyTags, howManyTagsShowing } from "@/_utils/tagsCount";

export function ProjectsGrid({
  selectedProjects
}: {
  selectedProjects: Project[];
}) {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          image={
            <Image
              src={project.image}
              width={200}
              height={120}
              alt={project.title}
            />
          }
          title={project.title}
          featured={project.featured}
          tags={project.tagsShort.map((tag) => {
            const skillName =
              skills.find((skill) => skill.id === tag)?.name || "";
            const skillColor =
              skills.find((skill) => skill.id === tag)?.color || "";
            return (
              <Tag
                key={tag}
                name={skillName}
                id={tag}
                color={skillColor}
                icon={
                  <div className={globalStyles.icon}>{getSkillIcon(tag)}</div>
                }
                selectedTags={[]}
                setSelectedTags={() => null}
              />
            );
          })}
          howManyMoreTags={howManyTags(project) - howManyTagsShowing(project)}
          description={project.description}
          githubLink={project.githubLink}
          demoLink={project.demoLink}
          selected={selectedProjects.includes(project)}
        />
      ))}
    </div>
  );
}
