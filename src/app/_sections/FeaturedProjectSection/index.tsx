import Image from "next/image";
import dynamic from "next/dynamic";
import { Tabs } from "@/_components/Tabs";
import { TagsRow } from "@/_components/Tag/TagsRow";
import { getProject } from "@/_utils/getData";
import { getAllSkillTags } from "@/_utils/serverData";
import globalStyles from "@/_styles/page.module.scss";
import { DemoButton } from "@/_components/DemoButton";
import { SectionHeader } from "@/_components/SectionHeader";
import { ProductHuntButton } from "@/_components/ProductHuntButton";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { FaStarOfLife as StarIcon } from "react-icons/fa6";

const ScreenShots = dynamic(
  () => import("@/_components/ScreenShots").then((mod) => mod.ScreenShots)
);

export const FeaturedProjectSection: React.FC = async () => {
  const [featuredProject, skillTags] = await Promise.all([
    getProject("cslit"),
    getAllSkillTags()
  ]);
  
  const tags =
    typeof featuredProject.tags === "string"
      ? JSON.parse(featuredProject.tags)[0]
      : featuredProject.tags[0];

  const description =
    typeof featuredProject.description === "string"
      ? JSON.parse(featuredProject.description)
      : featuredProject.description;

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
          {description.map((span: string, index: number) => (
            <p
              className={globalStyles.summaryText}
              key={index}
              dangerouslySetInnerHTML={{ __html: span }}
            />
          ))}
          <br />
          <DemoButton text="Visit Live at cslit.cc" link="https://cslit.cc" />
          <ProductHuntButton link={featuredProject.productHuntLink} />
          <GithubSourceButton link={featuredProject.githubLink} />
        </div>
        <div className={globalStyles.stack} id="stack">
          <div className={globalStyles.stackTitle}>Technical stack</div>
          <TagsRow title="Frontend:" listOfTags={tags.frontend} skillsData={skillTags} />
          <TagsRow title="Backend, API, DB:" listOfTags={tags.backend} skillsData={skillTags} />
          <TagsRow title="DevOps, Testing:" listOfTags={tags.devops} skillsData={skillTags} />
          <TagsRow title="Libs, etc:" listOfTags={tags.libs} skillsData={skillTags} />
        </div>
        <Tabs currentProject={featuredProject} />
      </div>
    </div>
  );
};
