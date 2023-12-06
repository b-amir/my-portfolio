"use client";
import Image from "next/image";
import styles from "./styles/page.module.scss";
import Spline from "@splinetool/react-spline";
import {
  IoArrowForward,
  IoCopyOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from "react-icons/io5";

export const QuickLinksSection: React.FC = () => (
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
      <p>Let&apos;s connect!</p>
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
      <p>See some of my work for yourself</p>
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
      <p>
        iAmirBazgir@gmail.com
        <IoCopyOutline />
      </p>
    </a>

    <div
    // className={styles.card}
    >
      {/* <Image alt="" src="/thing.svg" width={250} height={200} /> */}
      <Spline scene="https://prod.spline.design/btTGbGyxfpf64yVO/scene.splinecode" />
    </div>
  </div>
);
