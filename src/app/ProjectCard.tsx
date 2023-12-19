"use client";
import styles from "./styles/page.module.scss";
import { IoArrowForward as Arrow } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

export function ProjectCard({
  image,
  title,
  tags,
  description,
  githubLink,
  demoLink
}: {
  image: React.ReactNode;
  title: React.ReactNode;
  tags: React.ReactNode;
  description: React.ReactNode;
  githubLink: string;
  demoLink: string;
}) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImage}>{image}</div>
      <div className={styles.projectCardTitle}>{title}</div>
      <div className={styles.projectCardTags}>
        <div className={styles.tagsRow}>{tags}</div>
      </div>
      <div className={styles.projectCardDescription}>{description}</div>
      <div className={styles.projectCardLinks}>
        <a href={githubLink}>
          github <HiOutlineExternalLink />
        </a>
        <a href={demoLink}>
          demo <HiOutlineExternalLink />
        </a>
      </div>
      <div className={styles.projectCardExpand}>
        view details <Arrow />
      </div>
    </div>
  );
}
