"use client";
import Image from "next/image";
import globalStyles from "@/_styles/page.module.scss";
import projects from "@/_data/projects.json";
import { TagsRow } from "@/_components/Tag/TagsRow";
import { DemoButton } from "@/_components/DemoButton";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { Project } from "@/_utils/tagsCount";
import { BackButton } from "./BackButton";
import { FooterSection } from "@/_sections/FooterSection";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";

function Page({ params }: { params: { projectId: string } }) {
  const currentProject = projects.find(
    (project) => project.id === params.projectId
  );

  if (!currentProject) {
    return (
      <div className={globalStyles.errorPage}>
        <BackButton />
        <div className={globalStyles.errorMessage}>
          <h1>Project not found</h1>
        </div>
        <ProgressBar
          height="6px"
          color="#f15c55"
          options={{ showSpinner: true }}
          shallowRouting
        />
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
      <div className={globalStyles.featuredProject}>
        <BackButton />

        <div className={globalStyles.featuredGrid}>
          <div className={globalStyles.images}>
            <div className={globalStyles.mainImage}>
              <Image
                src={currentProject?.image}
                width={200}
                height={120}
                alt="cslit"
              />
            </div>
            <div className={globalStyles.moreImages}>
              {currentProject?.screenshots.mobile?.map((screenshot, index) => (
                <div className={globalStyles.mobileScreenshot} key={index}>
                  <Link href={`${screenshot}.png`} target="_blank">
                    <Image
                      className={globalStyles.imageClickable}
                      src={`${screenshot}-thumbnail.png`}
                      width={112}
                      height={240}
                      alt="cslit"
                    />
                  </Link>
                </div>
              ))}

              {currentProject?.screenshots.desktop?.map((screenshot, index) => (
                <div className={globalStyles.desktopScreenshot} key={index}>
                  <Link href={`${screenshot}.png`} target="_blank">
                    <Image
                      className={globalStyles.imageClickable}
                      src={`${screenshot}-thumbnail.png`}
                      width={365}
                      height={240}
                      alt="cslit"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={globalStyles.summary}>
            <div className={globalStyles.summaryTitle}>Summary</div>
            <h2>{currentProject?.title}</h2>

            {currentProject?.description.map((paragraph: string) => (
              <p className={globalStyles.summaryText} key={paragraph}>
                {paragraph}
              </p>
            ))}

            <br />
            {hasDemoLink && <DemoButton link={currentProject?.demoLink} />}
            {hasGithubLink && (
              <GithubSourceButton link={currentProject?.githubLink} />
            )}
          </div>
          <div className={globalStyles.stack}>
            <div className={globalStyles.stackTitle}>Technical stack</div>
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

          <div className={globalStyles.features}>
            <div className={globalStyles.featuresTitle}>Features</div>
            <ul className={globalStyles.featureList}>
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
