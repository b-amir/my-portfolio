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
  demoLink,
  howManyMoreTags
}: {
  image: React.ReactNode;
  title: React.ReactNode;
  tags: React.ReactNode;
  description: React.ReactNode;
  githubLink: string;
  demoLink: string;
  howManyMoreTags: number;
}) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImage}>{image}</div>
      <div className={styles.projectCardTitle}>{title}</div>
      <div className={styles.projectCardTags}>
        <div className={styles.tagsRow}>
          <div>
            {tags}{" "}
            {howManyMoreTags > 0 && (
              <div className={styles.howManyMoreTags}>
                + {howManyMoreTags} more
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.projectCardDescription}>{description}</div>
      <div className={styles.projectCardBottomRow}>
        <div className={styles.projectCardLinks}>
          {githubLink && (
            <a href={githubLink} className={styles.projectCardGithubLink}>
              github <HiOutlineExternalLink />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} className={styles.projectCardDemoLink}>
              demo <HiOutlineExternalLink />
            </a>
          )}
        </div>
        <div className={styles.projectCardViewDetails}>
          view details{" "}
          <span>
            <Arrow />
          </span>
        </div>
      </div>
    </div>
  );
}
