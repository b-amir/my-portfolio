"use client";
import Image from "next/image";
import styles from "./styles/page.module.scss";
import projects from "./data/projects.json";
import { TagsRow } from "./TagsRow";
import { DemoButton } from "./DemoButton";
import { FaStarOfLife } from "react-icons/fa6";
import { SectionHeader } from "./SectionHeader";
import { GithubSourceButton } from "./GithubSourceButton";

export const FeaturedProjectSection: React.FC = () => {
  return (
    <div className={styles.featuredProject}>
      <SectionHeader
        title="Featured Project"
        color="#d6532b"
        icon={<FaStarOfLife className={styles.icon} />}
      />

      <div className={styles.featuredGrid}>
        <div className={styles.images}>
          <div className={styles.mainImage}>
            <Image src="/cslit-logo.svg" width={200} height={120} alt="cslit" />
          </div>
          <div className={styles.moreImages}></div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryTitle}>Summary</div>
          <h2>CS-LIT</h2>

          {projects[0].description.map((paragraph: string) => (
            <p className={styles.summaryText} key={paragraph}>
              {paragraph}
            </p>
          ))}

          <br />
          <DemoButton text="Visit Live at cslit.cc" link="https://cslit.cc" />
          <GithubSourceButton link={projects[0].githubLink} />
        </div>
        <div className={styles.stack}>
          <div className={styles.stackTitle}>Technical stack</div>
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

        <div className={styles.features}>
          <div className={styles.featuresTitle}>Features</div>
          <ul className={styles.featureList}>
            {projects[0].features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
