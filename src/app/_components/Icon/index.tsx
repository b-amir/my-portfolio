import React from "react";

import { TbApi } from "react-icons/tb";
import { FaSass, Fa42Group } from "react-icons/fa6";
import { BsShieldLock, BsFillGridFill } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import {
  MdEditSquare,
  MdStyle,
  MdOutlineImage,
  MdOutlineLoop,
  MdWavingHand,
  MdOutlinePerson,
} from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import {
  IoCloseSharp,
  IoMailOutline,
  IoCopyOutline,
  IoLogoGithub,
  IoArrowForward,
  IoLogoLinkedin,
} from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { FiBox } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { TbClearAll } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";

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
  SiXstate,
  SiSqlite,
  SiFormik,
  SiAxios,
  SiRust,
  SiLinux,
} from "react-icons/si";

const iconMap = {
  typescript: SiTypescript,
  react: RiReactjsLine,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  reactspring: SiSpringCreators,
  prisma: SiPrisma,
  trpc: SiTrpc,
  docker: SiDocker,
  tailwind: SiTailwindcss,
  jest: SiJest,
  cypress: SiCypress,
  reactquery: SiReactquery,
  redux: SiRedux,
  zod: SiZod,
  formik: SiFormik,
  axios: SiAxios,
  linux: SiLinux,
  testinglibrary: SiTestinglibrary,
  vitest: SiVitest,
  postgresql: SiPostgresql,
  authjs: BsShieldLock,
  spline: SiHackthebox,
  vercel: SiVercel,
  netlify: SiNetlify,
  githubactions: SiGithubactions,
  githubpages: SiGithub,
  reactrouter: SiReactrouter,
  rust: SiRust,
  vite: SiVite,
  strapi: SiStrapi,
  sass: FaSass,
  api: TbApi,
  editorjs: MdEditSquare,
  css: SiCss3,
  html: SiHtml5,
  electron: SiElectron,
  pwa: SiPwa,
  themeui: MdStyle,
  html2canvas: MdOutlineImage,
  reacttestinglibrary: SiTestinglibrary,
  cicd: MdOutlineLoop,
  xstate: SiXstate,
  sqlite: SiSqlite,

  grid: BsFillGridFill,
  waving: MdWavingHand,
  stack: Fa42Group,
  person: MdOutlinePerson,
  show: BiShow,
  phone: LuPhoneCall,
  close: IoCloseSharp,
  mail: IoMailOutline,
  copy: IoCopyOutline,
  github: IoLogoGithub,
  arrow: IoArrowForward,
  linkedin: IoLogoLinkedin,
  contact: GrContactInfo,
  box: FiBox,
  check: FaCheckCircle,
  clear: TbClearAll,
  external: HiOutlineExternalLink,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 16 }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
};

export const getSkillIcon = (tagName: string) => {
  const iconName = tagName.toLowerCase() as IconName;
  return iconMap[iconName] ? <Icon name={iconName} /> : null;
};
