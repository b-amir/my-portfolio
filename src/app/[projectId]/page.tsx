import Image from "next/image";
import dynamic from "next/dynamic";
import { Tabs } from "../_components/Tabs";
import projects from "@/_data/projects.json";
import { TagsRow } from "@/_components/Tag/TagsRow";
import globalStyles from "@/_styles/page.module.scss";
import { DemoButton } from "@/_components/DemoButton";
import { BackButton } from "./BackButton";
import { NotFoundPage } from "./NotFoundPage";
import { FooterSection } from "@/_sections/FooterSection";
import { LoadingSpinner } from "@/_components/LoadingSpinner";
import { ProductHuntButton } from "@/_components/ProductHuntButton";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { findNonEmptyCategories } from "@/_utils/findNonEmptyCategories";

const ScreenShots = dynamic(
  () => import("@/_components/ScreenShots").then((mod) => mod.ScreenShots),
  {
    loading: () => <LoadingSpinner />
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
  const hasProducHuntLink = currentProject.producHuntLink;
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
                loading="lazy"
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

            {currentProject?.description.map((paragraph, index) => (
              <p
                className={globalStyles.summaryText}
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}

            <br />
            {hasDemoLink && <DemoButton link={currentProject?.demoLink} />}
            {hasProducHuntLink && (
              <ProductHuntButton link={currentProject?.producHuntLink} />
            )}
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
                  />
                ))
              : null}
          </div>

          <Tabs currentProject={currentProject} />
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default Page;
