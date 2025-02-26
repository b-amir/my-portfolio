"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { Tag } from "@/_components/Tag";
import { Project } from "@/_types/Project";
import { SkillTag } from "@/_types/SkillTag";
import globalStyles from "@/_styles/page.module.scss";
import { ProjectCard } from "./ProjectCard";
import { TagsSkeleton } from "@/_components/Loading/TagsSkeleton";
import { getSkillIcon } from ".";
import { useEffect, useState } from "react";
import { howManyTags, howManyTagsShowing } from "@/_utils/tagsCount";
import { HiOutlineExternalLink as LinkIcon } from "react-icons/hi";

export function ProjectsGrid({
  selectedProjects,
}: {
  selectedProjects: Project[];
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<SkillTag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const skillsMap = new Map(skills.map((skill) => [skill.id, skill]));

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/skillTags");
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skill tags:", error);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const fullProjects = projects.filter((project) => project.fullProject);
  const smallProjects = projects.filter((project) => !project.fullProject);

  const ProjectCardSkeleton = () => (
    <div className={`${styles.projectCard} ${styles.skeleton}`}>
      <div className={styles.imageSkeletonContainer}>
        <div className={styles.imageSkeleton}></div>
      </div>
      <div className={styles.contentSkeleton}>
        <div className={styles.titleSkeleton}></div>
        <div className={styles.tagsSkeleton}>
          <TagsSkeleton number={1} />
        </div>
        <div className={styles.descriptionSkeleton}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.linksSkeleton}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );

  const SmallProjectSkeleton = () => (
    <div className={styles.smallProject}>
      <div className={styles.smallImageSkeleton}></div>
      <div className={styles.smallProjectDetails}>
        <div className={styles.smallTitleSkeleton}></div>
        <div className={styles.smallDescriptionSkeleton}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <>
        <div className={styles.projectsGrid}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
        </div>
        <div className={styles.smallProjectsGrid}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <SmallProjectSkeleton key={index} />
            ))}
        </div>
      </>
    );
  }

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
                loading="eager"
              />
            }
            title={project.title}
            //@ts-ignore
            featured={project.featured}
            tags={
              skills.length === 0 ? (
                <TagsSkeleton number={3} />
              ) : (
                //@ts-ignore
                JSON.parse(project.tagsShort).map((tag) => {
                  const skill = skillsMap.get(tag);
                  const skillName = skill?.name || "...";
                  const skillColor = skill?.color || "";
                  return (
                    <Tag
                      key={tag}
                      name={skillName}
                      id={tag}
                      color={skillColor}
                      icon={
                        <div className={globalStyles.icon}>
                          {getSkillIcon(tag)}
                        </div>
                      }
                      selectedTags={[]}
                      setSelectedTags={() => null}
                    />
                  );
                })
              )
            }
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
        {smallProjects.map((project) => (
          <div
            key={project.id}
            className={`${
              selectedProjects.some(
                (selectedProject) => selectedProject.id === project.id
              )
                ? styles.smallProjectSelected
                : styles.smallProject
            }`}
          >
            <Image
              src={project.image}
              width={64}
              height={64}
              loading="eager"
              alt={project.title}
            />
            <div className={styles.smallProjectDetails}>
              <div className={styles.smallProjectTitlebar}>
                <p>{project.title}</p>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className={styles.githubSourceButton}
                >
                  GitHub <LinkIcon />
                </Link>

                {project.demoLink.length > 3 && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className={styles.demoButton}
                  >
                    Demo <LinkIcon />
                  </Link>
                )}
              </div>
              <p>
                {
                  //@ts-ignore
                  JSON.parse(project.description)
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
