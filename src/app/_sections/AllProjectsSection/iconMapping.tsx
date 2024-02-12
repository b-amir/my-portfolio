"use client";
import { TbApi } from "react-icons/tb";
import { FaSass } from "react-icons/fa6";
import { BsShieldLock } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import {
  MdEditSquare,
  MdStyle,
  MdOutlineImage,
  MdOutlineLoop
} from "react-icons/md";
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
  SiPwa,
  SiXstate
} from "react-icons/si";
import { SkillIcons } from ".";

export const iconMapping: SkillIcons = {
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
  cicd: <MdOutlineLoop />,
  xstate: <SiXstate />
};
