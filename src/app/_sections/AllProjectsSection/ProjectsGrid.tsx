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
import { HiOutlineExternalLink as LinkIcon } from "react-icons/hi";
import Link from "next/link";
import { HrTitle } from "./HrTitle";

export function ProjectsGrid({
  selectedProjects
}: {
  selectedProjects: Project[];
}) {
  const fullProjects = projects.filter((project) => project.fullProject);
  const smallProjects = projects.filter((project) => !project.fullProject);

  return (
    <>
      <div className={styles.projectsGrid}>
        {fullProjects.map((project) => (
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

      <div className={styles.smallProjectsGrid}>
        <HrTitle title="Smaller Projects" />
        {smallProjects.map((project) => (
          <div
            key={project.id}
            className={`${
              selectedProjects.includes(project)
                ? styles.smallProjectSelected
                : styles.smallProject
            }`}>
            <Image
              src={project.image}
              width={64}
              height={64}
              alt={project.title}
            />
            <div className={styles.smallProjectDetails}>
              <div className={styles.smallProjectTitlebar}>
                <p>{project.title}</p>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className={styles.githubSourceButton}>
                  GitHub <LinkIcon />
                </Link>

                <Link
                  href={project.demoLink}
                  target="_blank"
                  className={styles.demoButton}>
                  Demo <LinkIcon />
                </Link>
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
