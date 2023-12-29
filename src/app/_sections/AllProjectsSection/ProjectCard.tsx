"use client";
import Link from "next/link";
import styles from "./index.module.scss";
import globalStyles from "@/_styles/page.module.scss";
import { IoArrowForward as ArrowIcon } from "react-icons/io5";
import { HiOutlineExternalLink as LinkIcon } from "react-icons/hi";

interface IProjectCardProps {
  image: React.ReactNode;
  title: React.ReactNode;
  tags: React.ReactNode;
  id: string;
  description: string[];
  githubLink: string;
  demoLink: string;
  howManyMoreTags: number;
  selected: boolean;
}

export function ProjectCard({
  image,
  title,
  tags,
  id,
  description,
  githubLink,
  demoLink,
  howManyMoreTags,
  selected = false
}: IProjectCardProps) {
  return (
    <div
      className={`${
        selected ? styles.projectCardSelected : styles.projectCard
      }`}>
      <div className={styles.projectCardImage}>{image}</div>
      <div className={styles.projectCardTitle}>{title}</div>
      <div className={styles.projectCardTags}>
        <div className={globalStyles.tagsRow}>
          <div>
            {tags}{" "}
            {howManyMoreTags > 0 && (
              <Link
                prefetch={true}
                href="/[projectId]"
                as={`/${id}`}
                className={styles.howManyMoreTags}>
                + {howManyMoreTags} more
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.projectCardDescription}>
        {description?.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className={styles.projectCardBottomRow}>
        <div className={styles.projectCardLinks}>
          {githubLink && (
            <a href={githubLink} className={styles.githubSourceButton}>
              GitHub <LinkIcon />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} className={styles.demoButton}>
              Demo <LinkIcon />
            </a>
          )}
        </div>
        <Link
          prefetch={true}
          href="/[projectId]"
          as={`/${id}`}
          className={styles.projectCardViewDetails}>
          view details{" "}
          <span>
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}
