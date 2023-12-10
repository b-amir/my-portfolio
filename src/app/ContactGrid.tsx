"use client";
import Image from "next/image";
import styles from "./styles/page.module.scss";
import Spline from "@splinetool/react-spline";
import { MdContactPhone } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

import {
  IoArrowForward,
  IoCopyOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from "react-icons/io5";
import { BiShow } from "react-icons/bi";

import { SectionHeader } from "./SectionHeader";

export const ContactGrid: React.FC = () => (
  <div className={styles.contact}>
    {/* <SectionHeader
      title="Contact Me"
      icon={<MdContactPhone className={styles.icon} />}
    /> */}
    <div className={styles.grid}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer">
        <h2>
          <IoLogoLinkedin />
          Linkedin
          <span>
            <IoArrowForward />
          </span>
        </h2>
        <p>Let&apos;s get connected for collaborative opportunities.</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer">
        <h2>
          <IoLogoGithub />
          Github
          <span>
            <IoArrowForward />
          </span>
        </h2>
        <p>Take a hands-on tour of my code for yourself.</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer">
        <h2>
          <IoMailOutline />
          Email
          <span>
            <IoArrowForward />
          </span>
        </h2>
        <p className={styles.emailCopyField}>
          iAmirBazgir@gmail.com
          <IoCopyOutline />
        </p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer">
        <h2>
          <LuPhoneCall />
          Call
          <span>
            <IoArrowForward />
          </span>
        </h2>
        <p>
          +9891********
          <BiShow />
        </p>
      </a>

      <div />
    </div>
  </div>
);
