"use client";
import Image from "next/image";
import globalStyles from "@/_styles/page.module.scss";
import projects from "@/_data/projects.json";
import { TagsRow } from "@/_components/Tag/TagsRow";
import { DemoButton } from "@/_components/DemoButton";
import { FaStarOfLife } from "react-icons/fa6";
import { SectionHeader } from "@/_components/SectionHeader";
import { GithubSourceButton } from "@/_components/GithubSourceButton";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export const FeaturedProjectSection: React.FC = () => {
  return (
    <div className={globalStyles.featuredProject}>
      <SectionHeader
        title="Featured Project"
        color="#f15c55"
        icon={<FaStarOfLife className={globalStyles.icon} />}
      />

      <div className={globalStyles.featuredGrid}>
        <div className={globalStyles.images}>
          <div className={globalStyles.mainImage}>
            <Image src="/cslit-logo.svg" width={200} height={120} alt="cslit" />
          </div>
          <div className={globalStyles.moreImages}>
            {projects[0]?.screenshots.mobile?.map((screenshot, index) => (
              <div className={globalStyles.mobileScreenshot} key={index}>
                <Image
                  className={globalStyles.imageClickable}
                  src={screenshot}
                  width={112}
                  height={240}
                  alt="cslit"
                />
              </div>
            ))}

            {projects[0]?.screenshots.desktop?.map((screenshot, index) => (
              <div className={globalStyles.desktopScreenshot} key={index}>
                <Image
                  className={globalStyles.imageClickable}
                  src={screenshot}
                  width={365}
                  height={240}
                  alt="cslit"
                />
              </div>
            ))}
          </div>
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
