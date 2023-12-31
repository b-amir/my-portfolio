"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import projects from "@/_data/projects.json";
import { TagsRow } from "@/_components/Tag/TagsRow";
import globalStyles from "@/_styles/page.module.scss";
import { DemoButton } from "@/_components/DemoButton";
import { BackButton } from "./BackButton";
import { NotFoundPage } from "./NotFoundPage";
import { FooterSection } from "@/_sections/FooterSection";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { findNonEmptyCategories } from "@/_utils/findNonEmptyCategories";
import { Loading } from "@/_components/Loading";

const ScreenShots = dynamic(
  () => import("@/_components/ScreenShots").then((mod) => mod.ScreenShots),
  {
    loading: () => <Loading />
  }
);

function Page({ params }: { params: { projectId: string } }) {
  const currentProject = projects.find(
    (project) => project.id === params.projectId
  );

  if (!currentProject) {
    return <NotFoundPage />;
  }

  const hasDemoLink = currentProject.demoLink.length > 0;
  const hasGithubLink = currentProject.githubLink.length > 0;
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
            <ScreenShots currentProject={currentProject} />
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
                    listOfTags={
                      (currentProject?.tags[0] as Record<string, string[]>)[
                        category.id
                      ]
                    }
                    setSelectedTags={() => {}}
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
