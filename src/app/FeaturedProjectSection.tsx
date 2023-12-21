"use client";
import { FaStarOfLife } from "react-icons/fa6";
import styles from "./styles/page.module.scss";
import { SectionHeader } from "./SectionHeader";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import projects from "./data/projects.json";

import { Tag } from "./Tag";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiNextdotjs,
  SiPrisma,
  SiTrpc,
  SiDocker,
  SiTailwindcss,
  SiJest,
  SiCypress,
  SiReactquery,
  SiRedux,
  SiTypescript,
  SiSpringCreators,
  SiZod,
  SiTestinglibrary,
  SiVitest,
  SiPostgresql
} from "react-icons/si";
import { BsShieldLock } from "react-icons/bs";
import Image from "next/image";
import { TagsRow } from "./TagsRow";

export const FeaturedProjectSection: React.FC = () => (
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
        <p className={styles.summaryText}>
          A fully working product you can visit right now. A website for the
          Computer Science &amp; Literature Club at my school. The site was made
          using React and Gatsby, and is hosted on GitHub Pages. The site is
          still under construction, but its current features include a fully
          functioning blog and a "members only" page for club members to access
          resources for the club.
        </p>

        <br />
        <button className={styles.demoButton}>
          <FaCircle
            style={{
              color: "#24e724",
              fontSize: "11px",
              filter: "drop-shadow(0px 0px 6px #31a131)"
            }}
          />
          Visit Live at
          <span style={{ textDecoration: "underline", marginLeft: "-3px" }}>
            cslit.cc
          </span>
        </button>

        <button className={styles.githubSourceButton}>
          <IoLogoGithub />
          View Source on GitHub
        </button>
      </div>
      <div className={styles.stack}>
        <div className={styles.stackTitle}>Technical stack</div>
        <TagsRow title="Frontend:" listOfTags={projects[0].tags[0].frontend} />
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
          <li>Blog</li>
          <li>Members only page</li>
          <li>Responsive design</li>
          <li>Dark mode</li>
          <li>Custom domain</li>
          <li>Custom 404 page</li>
          <li>Custom favicon</li>
        </ul>
      </div>
    </div>
  </div>
);
