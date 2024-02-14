import Image from "next/image";
import dynamic from "next/dynamic";
import projects from "@/_data/projects.json";
import { Tabs } from "@/[projectId]/Tabs";
import { Loading } from "@/_components/Loading";
import { TagsRow } from "@/_components/Tag/TagsRow";
import globalStyles from "@/_styles/page.module.scss";
import { DemoButton } from "@/_components/DemoButton";
import { SectionHeader } from "@/_components/SectionHeader";
import { ProductHuntButton } from "@/_components/ProductHuntButton";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { FaStarOfLife as StarIcon } from "react-icons/fa6";

const ScreenShots = dynamic(
  () => import("@/_components/ScreenShots").then((mod) => mod.ScreenShots),
  {
    loading: () => <Loading />
  }
);

export const FeaturedProjectSection: React.FC = () => {
  return (
    <div className={globalStyles.featuredProject}>
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
          <ScreenShots currentProject={projects[0]} />
        </div>
        <div className={globalStyles.summary}>
          <div className={globalStyles.summaryTitle}>Summary</div>
          <h2>CS-LIT</h2>
          {projects[0].description.map((paragraph, index) => (
            <p
              className={globalStyles.summaryText}
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          <br />
          <DemoButton text="Visit Live at cslit.cc" link="https://cslit.cc" />
          <ProductHuntButton link={projects[0].producHuntLink} />
          <GithubSourceButton link={projects[0].githubLink} />
        </div>
        <div className={globalStyles.stack}>
          <div className={globalStyles.stackTitle}>Technical stack</div>
          <TagsRow
            title="Frontend:"
            listOfTags={projects[0].tags[0].frontend}
          />
          <TagsRow
            title="Backend, API, DB:"
            listOfTags={projects[0].tags[0].backend}
          />
          <TagsRow
            title="DevOps, Testing:"
            listOfTags={projects[0].tags[0].devops}
          />
          <TagsRow title="Libs, etc:" listOfTags={projects[0].tags[0].libs} />
        </div>
        <Tabs currentProject={projects[0]} />
      </div>
    </div>
  );
};
