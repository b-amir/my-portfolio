"use client";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";
import styles from "./styles/page.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForward as Arrow } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import Spline from "@splinetool/react-spline";
import { MdWavingHand } from "react-icons/md";
import Image from "next/image";

export const AllProjectsSection: React.FC = () => (
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
            <span className={styles.inlineTag}>PHP</span> and CSS, and
            integrated <span className={styles.inlineTag}>Python</span> into
            select project segments.
          </p>
        </div>
      </div>
      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}>
            <Image
              src="/cslit-logo.svg"
              width={160}
              height={80}
              alt="this website"
            />
          </div>
          <div className={styles.projectCardTitle}>CS-LIT</div>
          <div className={styles.projectCardTags}></div>
          <div className={styles.projectCardDescription}>
            Every developer has made a note taking app at some point. here's my
            take.
          </div>
          <div className={styles.projectCardLinks}>
            <span>
              {" "}
              github <HiOutlineExternalLink />
            </span>
          </div>
          <div className={styles.projectCardExpand}>
            view details <Arrow />
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}>
            {" "}
            <h1 className={styles.thiscoverdLogo}>
              <span>this</span>
              <span>.</span>
              <span>covered</span>
            </h1>
          </div>
          <div className={styles.projectCardTitle}>this.covered</div>
          <div className={styles.projectCardTags}></div>
          <div className={styles.projectCardDescription}>
            Every developer has made a note taking app at some point. here's my
            take.
          </div>
          <div className={styles.projectCardLinks}>
            github <HiOutlineExternalLink />
          </div>
          <div className={styles.projectCardExpand}>
            view details <Arrow />
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}>
            <Image
              src="/thing.svg"
              width={240}
              height={120}
              alt="this website"
            />
          </div>
          <div className={styles.projectCardTitle}>this website!</div>
          <div className={styles.projectCardTags}></div>
          <div className={styles.projectCardDescription}>
            Every developer has made a note taking app at some point. here's my
            take.
          </div>
          <div className={styles.projectCardLinks}>
            github <HiOutlineExternalLink />
          </div>
          <div className={styles.projectCardExpand}>
            view details <Arrow />
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}>
            <Image
              src="/futpal-logo.svg"
              width={160}
              height={80}
              alt="this website"
            />
          </div>
          <div className={styles.projectCardTitle}>Futpal</div>
          <div className={styles.projectCardTags}></div>
          <div className={styles.projectCardDescription}>
            Every developer has made a note taking app at some point. here's my
            take.
          </div>
          <div className={styles.projectCardLinks}>
            github <HiOutlineExternalLink />
          </div>
          <div className={styles.projectCardExpand}>
            view details <Arrow />
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}>
            {" "}
            <Image
              src="/adeptivity-logo.svg"
              width={220}
              height={120}
              alt="this website"
            />
          </div>
          <div className={styles.projectCardTitle}>Adeptivity</div>
          <div className={styles.projectCardTags}></div>
          <div className={styles.projectCardDescription}>
            Every developer has made a note taking app at some point. here's my
            take.
          </div>
          <div className={styles.projectCardLinks}>
            github <HiOutlineExternalLink />
          </div>
          <div className={styles.projectCardExpand}>
            view details <Arrow />
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}>
            {" "}
            <Image
              src="/notopia-logo.svg"
              width={220}
              height={120}
              alt="this website"
            />
          </div>
          <div className={styles.projectCardTitle}>Notopia</div>
          <div className={styles.projectCardTags}></div>
          <div className={styles.projectCardDescription}>
            Every developer has made a note taking app at some point. here's my
            take.
          </div>
          <div className={styles.projectCardLinks}>
            github <HiOutlineExternalLink />
          </div>
          <div className={styles.projectCardExpand}>
            view details <Arrow />
          </div>
        </div>
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
