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
  MdOutlineImage
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
  reacttestinglibrary: <SiTestinglibrary />
};

export const AllProjectsSection: React.FC = () => {
  const getSkillIcon = (tagName: string) => iconMapping[tagName] || null;
  return (
    <div className={styles.allProjectsSection}>
      <SectionHeader
        title="All Projects"
        icon={<BsFillGridFill className={styles.icon} />}
      />

      <div className={styles.allProjectsGrid}>
        <div className={styles.allStacks}>
          <div className={styles.myStack}>
            <h3>My current skills</h3>
            <p>click on a skill to see projects that use it.</p>

            <div className={styles.tagsRow}>
              <h3>Frontend:</h3>
              <Tag
                name="React"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
            </div>

            <div className={styles.tagsRow}>
              <h3>Backend, API:</h3>
              <Tag
                name="Node"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
              <Tag
                name="Express"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
              <Tag
                name="MongoDB"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
            </div>

            <div className={styles.tagsRow}>
              <h3>DevOps, Testing:</h3>
              <Tag
                name="Git"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
              <Tag
                name="Docker"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
              <Tag
                name="Linux"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
            </div>
            <div className={styles.tagsRow}>
              <h3>Libs, etc:</h3>
              <Tag
                name="Git"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
              <Tag
                name="Docker"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
              <Tag
                name="Linux"
                color=""
                icon={<BsFillGridFill className={styles.icon} />}
              />
            </div>
          </div>

          <div className={styles.otherStack}>
            <h3>Other skills</h3>
            <p>
              Long time <span className={styles.inlineTag}>Linux</span> user. I
              know my way around graphical softwares like{" "}
              <span className={styles.inlineTag}>Figma</span> &{" "}
              <span className={styles.inlineTag}>PhotoShop</span>. Familiar with{" "}
              <span className={styles.inlineTag}>Agile</span> &{" "}
              <span className={styles.inlineTag}>Scrum</span> methodologies.
            </p>
            <br />
            <h3>Previous stack</h3>
            <p>
              Started with WordPress, learned{" "}
              <span className={styles.inlineTag}>PHP</span>,{" "}
              <span className={styles.inlineTag}>MySQL</span> and CSS, and
              integrated <span className={styles.inlineTag}>Python</span> into
              select project segments.
            </p>
          </div>
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
              tags={project.tags.map((tag) => (
                <Tag
                  key={tag}
                  name={skills.find((skill) => skill.id === tag)?.name}
                  color={skills.find((skill) => skill.id === tag)?.color}
                  icon={<div className={styles.icon}>{getSkillIcon(tag)}</div>}
                />
              ))}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>

      <div className={styles.transitionToWhite}>
        <div className={styles.smile}>
          <Spline scene="https://prod.spline.design/SFtITqXREqMFyNh2/scene.splinecode" />
        </div>
        <p>That's all for now.</p>
        <div style={{ minHeight: "65px" }}>
          <button className={styles.buttonKeepInTouch}>
            <MdWavingHand /> Let's keep in touch
          </button>
        </div>
      </div>
    </div>
  );
};
