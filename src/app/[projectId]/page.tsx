"use client";
import Image from "next/image";
import styles from "../styles/page.module.scss";
import projects from "../data/projects.json";
import { TagsRow } from "../TagsRow";
import { DemoButton } from "../DemoButton";
import { GithubSourceButton } from "../GithubSourceButton";
import { Project } from "../utils/tagsCount";
import { BackButton } from "./BackButton";
import { FooterSection } from "../FooterSection";

function Page({ params }: { params: { projectId: string } }) {
  const currentProject = projects.find(
    (project) => project.id === params.projectId
  );

  if (!currentProject) {
    return (
      <div className={styles.errorPage}>
        <BackButton />
        <div className={styles.errorMessage}>
          <h1>Project not found</h1>
        </div>
      </div>
    );
  }

  const hasDemoLink = currentProject.demoLink.length > 0;
  const hasGithubLink = currentProject.githubLink.length > 0;
  // a function to determin wheter if project has frontend, backend, devops or libs. then return the categories with non zero tags in them.
  function findNonEmptyCategories(currentProject: Project): string[] {
    const categoriesWithTags: string[] = [];

    const tags = currentProject?.tags[0];

    if (tags.frontend.length)
      categoriesWithTags.push({ id: "frontend", title: "Frontend" });
    if (tags.backend.length)
      categoriesWithTags.push({ id: "backend", title: "Backend, API, DB" });
    if (tags.devops.length)
      categoriesWithTags.push({ id: "devops", title: "DevOps, Testing" });
    if (tags.libs.length)
      categoriesWithTags.push({ id: "libs", title: "Libs, etc" });

    return categoriesWithTags;
  }

  const categoriesToDisplay = findNonEmptyCategories(currentProject);

  return (
    <>
      <div className={styles.featuredProject}>
        <BackButton />

        <div className={styles.featuredGrid}>
          <div className={styles.images}>
            <div className={styles.mainImage}>
              <Image
                src={currentProject?.image}
                width={200}
                height={120}
                alt="cslit"
              />
            </div>
            <div className={styles.moreImages}></div>
          </div>
          <div className={styles.summary}>
            <div className={styles.summaryTitle}>Summary</div>
            <h2>{currentProject?.title}</h2>

            {currentProject?.description.map((paragraph: string) => (
              <p className={styles.summaryText} key={paragraph}>
                {paragraph}
              </p>
            ))}

            <br />
            {hasDemoLink && <DemoButton link={currentProject?.demoLink} />}
            {hasGithubLink && (
              <GithubSourceButton link={currentProject?.githubLink} />
            )}
          </div>
          <div className={styles.stack}>
            <div className={styles.stackTitle}>Technical stack</div>
            {categoriesToDisplay.length > 0
              ? categoriesToDisplay.map((category) => (
                  <TagsRow
                    key={category.id}
                    title={category.title}
                    listOfTags={currentProject?.tags[0][category.id]}
                  />
                ))
              : null}
          </div>

          <div className={styles.features}>
            <div className={styles.featuresTitle}>Features</div>
            <ul className={styles.featureList}>
              {currentProject?.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default Page;
