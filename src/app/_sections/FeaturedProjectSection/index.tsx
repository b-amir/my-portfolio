"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import projects from "@/_data/projects.json";
import { Loading } from "@/_components/Loading";
import { TagsRow } from "@/_components/Tag/TagsRow";
import globalStyles from "@/_styles/page.module.scss";
import { DemoButton } from "@/_components/DemoButton";
import { SectionHeader } from "@/_components/SectionHeader";
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
          {projects[0].description.map((paragraph: string) => (
            <p className={globalStyles.summaryText} key={paragraph}>
              {paragraph}
            </p>
          ))}
          <br />
          <DemoButton text="Visit Live at cslit.cc" link="https://cslit.cc" />
          <GithubSourceButton link={projects[0].githubLink} />
        </div>
        <div className={globalStyles.stack}>
          <div className={globalStyles.stackTitle}>Technical stack</div>
          <TagsRow
            title="Frontend:"
            listOfTags={projects[0].tags[0].frontend}
            setSelectedTags={() => {}}
          />
          <TagsRow
            title="Backend, API, DB:"
            listOfTags={projects[0].tags[0].backend}
            setSelectedTags={() => {}}
          />
          <TagsRow
            title="DevOps, Testing:"
            listOfTags={projects[0].tags[0].devops}
            setSelectedTags={() => {}}
          />
          <TagsRow
            title="Libs, etc:"
            listOfTags={projects[0].tags[0].libs}
            setSelectedTags={() => {}}
          />
        </div>

        <div className={globalStyles.features}>
          <div className={globalStyles.featuresTitle}>Features</div>
          <ul className={globalStyles.featureList}>
            {projects[0].features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
