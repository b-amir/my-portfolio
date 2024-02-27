import Image from "next/image";
import dynamic from "next/dynamic";
import { Tabs } from "@/_components/Tabs";
import { TagsRow } from "@/_components/Tag/TagsRow";
import { getItem } from "@/_utils/getProject";
import globalStyles from "@/_styles/page.module.scss";
import { DemoButton } from "@/_components/DemoButton";
import { SectionHeader } from "@/_components/SectionHeader";
import { LoadingSpinner } from "@/_components/LoadingSpinner";
import { ProductHuntButton } from "@/_components/ProductHuntButton";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { FaStarOfLife as StarIcon } from "react-icons/fa6";

const ScreenShots = dynamic(
  () => import("@/_components/ScreenShots").then((mod) => mod.ScreenShots),
  {
    loading: () => <LoadingSpinner />
  }
);

export const FeaturedProjectSection: React.FC = async () => {
  const featuredProject = await getItem("cslit");
  const tags = JSON.parse(featuredProject.tags)[0];

  return (
    <div className={`${globalStyles.featuredProject}`} id="featured">
      <SectionHeader
        title="Featured Project"
        color="#f15c55"
        icon={<StarIcon className={globalStyles.icon} />}
      />

      <div className={globalStyles.featuredGrid}>
        <div className={globalStyles.images}>
          <div className={globalStyles.mainImage}>
            <Image src="/cslit-logo.svg" width={200} height={120} alt="cslit" />
          </div>
          <ScreenShots currentProject={featuredProject} />
        </div>
        <div className={globalStyles.summary} id="summary">
          <div className={globalStyles.summaryTitle}>Summary</div>
          <h2>CS-LIT</h2>
          {JSON.parse(featuredProject.description).map(
            (span: string, index: number) => (
              <p
                className={globalStyles.summaryText}
                key={index}
                dangerouslySetInnerHTML={{ __html: span }}
              />
            )
          )}
          <br />
          <DemoButton text="Visit Live at cslit.cc" link="https://cslit.cc" />
          <ProductHuntButton link={featuredProject.producHuntLink} />
          <GithubSourceButton link={featuredProject.githubLink} />
        </div>
        <div className={globalStyles.stack} id="stack">
          <div className={globalStyles.stackTitle}>Technical stack</div>
          <TagsRow title="Frontend:" listOfTags={tags.frontend} />
          <TagsRow title="Backend, API, DB:" listOfTags={tags.backend} />
          <TagsRow title="DevOps, Testing:" listOfTags={tags.devops} />
          <TagsRow title="Libs, etc:" listOfTags={tags.libs} />
        </div>
        <Tabs currentProject={featuredProject} />
      </div>
    </div>
  );
};
