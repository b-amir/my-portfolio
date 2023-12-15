"use client";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";
import styles from "./styles/page.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForward as Arrow } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

export const AllProjectsSection: React.FC = () => (
  <div className={styles.allProjectsSection}>
    <SectionHeader
      title="All Projects"
      icon={<BsFillGridFill className={styles.icon} />}
    />

    <div className={styles.allProjectsGrid}>
      <div className={styles.myStack}>
        <h3>Here&apos;s a list of my current skills.</h3>
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
          <h3>Backend:</h3>
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
          <h3>Other:</h3>
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
      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}></div>
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

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}></div>
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

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}></div>
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

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}></div>
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

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}></div>
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

        <div className={styles.projectCard}>
          <div className={styles.projectCardImage}></div>
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
  </div>
);
