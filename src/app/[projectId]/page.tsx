import Image from "next/image";
import dynamic from "next/dynamic";
import { Tabs } from "@/_components/Tabs";
import { TagsRow } from "@/_components/Tag/TagsRow";
import { Project } from "@/_types/Project";
import { SkillTag } from "@/_types/SkillTag";
import globalStyles from "@/_styles/page.module.scss";
import { DemoButton } from "@/_components/DemoButton";
import { BackButton } from "./BackButton";
import { NotFoundPage } from "./NotFoundPage";
import { FooterSection } from "@/_sections/FooterSection";
import { LoadingSpinner } from "@/_components/Loading/LoadingSpinner";
import { ProductHuntButton } from "@/_components/ProductHuntButton";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { findNonEmptyCategories } from "@/_utils/findNonEmptyCategories";
import {
  getAllProjectIds,
  getProject,
  getProjectsSkillTags,
} from "@/_utils/getData";
import { ScreenShots } from "@/_components/ScreenShots";

// const ScreenShots = dynamic(
//   () => import("@/_components/ScreenShots").then((mod) => mod.ScreenShots),
//   {
//     loading: () => <LoadingSpinner />
//   }
// );

interface IPageProps {
  params: { projectId: string };
}

async function Page({ params }: IPageProps) {
  const { projectId } = params;
  const currentProject = await getProject(projectId);
  const skillTags = await getProjectsSkillTags(projectId);
  if (!currentProject) {
    return <NotFoundPage />;
  }

  const hasDemoLink = currentProject.demoLink?.length > 0;
  const hasGithubLink = currentProject.githubLink?.length > 0;
  const hasproductHuntLink = currentProject.productHuntLink;
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

            {
              //@ts-ignore
              JSON.parse(currentProject?.description).map(
                (paragraph: string, index: number) => (
                  <p
                    className={globalStyles.summaryText}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                )
              )
            }

            <br />
            {hasDemoLink && <DemoButton link={currentProject?.demoLink} />}
            {hasproductHuntLink && (
              <ProductHuntButton link={currentProject?.productHuntLink} />
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
                    //@ts-ignore
                    listOfTags={skillTags[0][category.id]}
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

export async function generateStaticParams() {
  const projectIds = await getAllProjectIds();
  return projectIds.map((project) => ({ projectId: project.id }));
}
