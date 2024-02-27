"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { Tag } from "@/_components/Tag";
import { HrTitle } from "./HrTitle";
import { Project } from "@/_types/Project";
import { SkillTag } from "@/_types/SkillTag";
import globalStyles from "@/_styles/page.module.scss";
import { ProjectCard } from "./ProjectCard";
import { getSkillIcon } from ".";
import { useEffect, useState } from "react";
import { howManyTags, howManyTagsShowing } from "@/_utils/tagsCount";
import { HiOutlineExternalLink as LinkIcon } from "react-icons/hi";

export function ProjectsGrid({
  selectedProjects
}: {
  selectedProjects: Project[];
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<SkillTag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/api/skillTags");
      const data = await response.json();
      setSkills(data);
      return data;
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      return data;
    };
    fetchProjects();
  }, []);

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
                loading="lazy"
                src={project.image}
                width={200}
                height={120}
                alt={project.title}
              />
            }
            title={project.title}
            //@ts-ignore
            featured={project.featured}
            //@ts-ignore
            tags={JSON.parse(project.tagsShort).map((tag) => {
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
            //@ts-ignore
            description={JSON.parse(project.description)}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            selected={selectedProjects.some(
              (selectedProject) => selectedProject.id === project.id
            )}
          />
        ))}
      </div>

      <div className={styles.smallProjectsGrid}>
        <HrTitle title="Smaller Projects" />
        {smallProjects.map((project) => (
          <div
            key={project.id}
            className={`${
              selectedProjects.some(
                (selectedProject) => selectedProject.id === project.id
              )
                ? styles.smallProjectSelected
                : styles.smallProject
            }`}>
            <Image
              src={project.image}
              loading="lazy"
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
