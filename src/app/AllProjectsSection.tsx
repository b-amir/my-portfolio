"use client";
import "./AllProjectsSection.css";
import { SectionHeader } from "./SectionHeader";
import styles from "./styles/page.module.scss";
import { BsFillGridFill } from "react-icons/bs";

export const AllProjectsSection: React.FC = () => (
  <div className={styles.allProjects}>
    <SectionHeader
      title="All Projects"
      icon={<BsFillGridFill className={styles.icon} />}
    />

    <div>Here&apos;s my current stack of used technologies:</div>

    <div className="grid"></div>
    <div className="projectCard"></div>

    <div className="grid">
      <div className="projectCard">
        <img
          src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
          alt=""
        />
        <div className="projectCard-details">
          <h3>this.covered</h3>
          <p>An online tool to create nice looking Linkedin cover images</p>
          <h3></h3>
        </div>
        <div className="main-stack">
          <span className="tag">text</span>
        </div>
        <p>expand details</p>
      </div>
    </div>
  </div>
);
