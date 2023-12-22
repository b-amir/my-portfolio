"use client";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";
import styles from "./styles/page.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Spline from "@splinetool/react-spline";
import {
  MdWavingHand,
  MdEditSquare,
  MdStyle,
  MdOutlineImage,
  MdOutlineLoop
} from "react-icons/md";
import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import projects from "./data/projects.json";
import skills from "./data/skillTags.json";
import { RiReactjsLine } from "react-icons/ri";

import {
  SiNextdotjs,
  SiPrisma,
  SiTrpc,
  SiJavascript,
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
  SiPostgresql,
  SiHackthebox,
  SiNetlify,
  SiVercel,
  SiGithubactions,
  SiGithub,
  SiReactrouter,
  SiVite,
  SiStrapi,
  SiCss3,
  SiHtml5,
  SiElectron,
  SiPwa
} from "react-icons/si";
import { BsShieldLock } from "react-icons/bs";
import { FaSass } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { howManyTags, howManyTagsShowing } from "./utils/tagsCount";
import { CurrentSkills } from "./CurrentSkills";
import { OtherStack } from "./OtherStack";
import { use, useEffect, useState } from "react";

const iconMapping = {
  typescript: <SiTypescript />,
  react: <RiReactjsLine />,
  javascript: <SiJavascript />,
  nextjs: <SiNextdotjs />,
  reactspring: <SiSpringCreators />,
  prisma: <SiPrisma />,
  trpc: <SiTrpc />,
  docker: <SiDocker />,
  tailwind: <SiTailwindcss />,
  jest: <SiJest />,
  cypress: <SiCypress />,
  reactquery: <SiReactquery />,
  redux: <SiRedux />,
  zod: <SiZod />,
  testinglibrary: <SiTestinglibrary />,
  vitest: <SiVitest />,
  postgresql: <SiPostgresql />,
  authjs: <BsShieldLock />,
  spline: <SiHackthebox />,
  vercel: <SiVercel />,
  netlify: <SiNetlify />,
  githubactions: <SiGithubactions />,
  githubpages: <SiGithub />,
  reactrouter: <SiReactrouter />,
  vite: <SiVite />,
  strapi: <SiStrapi />,
  sass: <FaSass />,
  api: <TbApi />,
  editorjs: <MdEditSquare />,
  css: <SiCss3 />,
  html: <SiHtml5 />,
  electron: <SiElectron />,
  pwa: <SiPwa />,
  themeui: <MdStyle />,
  html2canvas: <MdOutlineImage />,
  reacttestinglibrary: <SiTestinglibrary />,
  cicd: <MdOutlineLoop />
};
export const getSkillIcon = (tagName: string) => iconMapping[tagName] || null;

export const AllProjectsSection: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);

  const getProjectsByTags = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      return [];
    }

    return projects.filter((project) =>
      selectedTags.every((tag) =>
        project.tags.some((tagCategory) =>
          Object.values(tagCategory).flat().includes(tag)
        )
      )
    );
  };

  useEffect(() => {
    setSelectedProjects(getProjectsByTags(selectedTags));
  }, [selectedTags]);

  // console.log("selectedTags", selectedTags);
  // console.log("selectedProjects", selectedProjects);

  return (
    <div className={styles.allProjectsSection}>
      <SectionHeader
        title="All Skills & Projects"
        icon={<BsFillGridFill className={styles.icon} />}
      />

      <div className={styles.allProjectsGrid}>
        <div className={styles.allStacks}>
          <CurrentSkills
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            selectedProjects={selectedProjects}
          />
          <OtherStack />
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={
                <Image
                  src={project.image}
                  width={200}
                  height={120}
                  alt={project.title}
                />
              }
              title={project.title}
              tags={project.tagsShort.map((tag) => (
                <Tag
                  key={tag}
                  name={skills.find((skill) => skill.id === tag)?.name}
                  color={skills.find((skill) => skill.id === tag)?.color}
                  icon={<div className={styles.icon}>{getSkillIcon(tag)}</div>}
                />
              ))}
              howManyMoreTags={
                howManyTags(project) - howManyTagsShowing(project)
              }
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              selected={selectedProjects.includes(project)}
            />
          ))}
        </div>
      </div>

      <div className={styles.transitionToWhite}>
        <div className={styles.smile}>
          <Spline scene="https://prod.spline.design/SFtITqXREqMFyNh2/scene.splinecode" />
        </div>
        <p>That&apos;s all for now.</p>
        <div style={{ minHeight: "65px" }}>
          <button className={styles.buttonKeepInTouch}>
            <MdWavingHand /> Let&apos;s keep in touch
          </button>
        </div>
      </div>
    </div>
  );
};
