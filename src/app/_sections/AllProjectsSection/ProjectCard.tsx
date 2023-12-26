"use client";
import globalStyles from "@/_styles/page.module.scss";
import styles from "./index.module.scss";
import { IoArrowForward as Arrow } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

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
}: {
  image: React.ReactNode;
  title: React.ReactNode;
  tags: React.ReactNode;
  id: string;
  description: React.ReactNode;
  githubLink: string;
  demoLink: string;
  howManyMoreTags: number;
  selected: boolean;
}) {
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
        {description.map((p) => (
          <p>{p}</p>
        ))}
      </div>
      <div className={styles.projectCardBottomRow}>
        <div className={styles.projectCardLinks}>
          {githubLink && (
            <a href={githubLink} className={styles.githubSourceButton}>
              GitHub <HiOutlineExternalLink />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} className={styles.demoButton}>
              Demo <HiOutlineExternalLink />
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
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
}
