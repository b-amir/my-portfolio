import styles from "@/_sections/AllProjectsSection/index.module.scss";

export const CardsSkeleton: React.FC = () => {
  return (
    <div className={`${styles.projectCard} ${styles.pulseAnimation}`}>
      <div className={styles.projectCardImage}></div>
      <div className={styles.projectCardTitle}></div>
      <div className={styles.projectCardTags}></div>
      <div className={styles.projectCardDescription}></div>
      <div className={styles.projectCardBottomRow}>
        <div className={styles.projectCardLinks}></div>
      </div>
    </div>
  );
};

export const CardsSkeletons: React.FC = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <CardsSkeleton key={index} />
      ))}
    </>
  );
};
