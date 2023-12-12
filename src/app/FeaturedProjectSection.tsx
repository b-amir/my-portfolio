"use client";
import { FaStarOfLife } from "react-icons/fa6";
import styles from "./styles/page.module.scss";
import { SectionHeader } from "./SectionHeader";

export const FeaturedProjectSection: React.FC = () => (
  <div className={styles.featuredProject}>
    <SectionHeader
      title="Featured Project"
      color="#d6532b"
      icon={<FaStarOfLife className={styles.icon} />}
    />
    <div className="grid">
      <div>
        <img
          src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
          alt=""
        />
      </div>
      <div className="featured-details">
        <h2>CS-LIT</h2>
        <p>A fully working product you can visit right now.</p>
        <button className="demoButton">Visit Live Version</button>
      </div>
      <div className="expanded-details">
        <h2>Details</h2>
      </div>
    </div>
  </div>
);
