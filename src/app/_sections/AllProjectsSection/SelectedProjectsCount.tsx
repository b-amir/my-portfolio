"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { TbClearAll as ClearIcon } from "react-icons/tb";
import { Project } from "@/_types/Project";

interface ISelectedProjectsCountProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedProjects: Project[];
}

export function SelectedProjectsCount({
  selectedTags,
  setSelectedTags,
  selectedProjects,
}: ISelectedProjectsCountProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [isInSection, setIsInSection] = useState(true);

  useEffect(() => {
    if (selectedTags.length > 0) {
      setIsVisible(true);
      setAnimationClass(styles.fadeIn);
    } else {
      setAnimationClass(styles.fadeOut);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedTags]);

  useEffect(() => {
    const handleScroll = () => {
      const allProjectsSection = document.getElementById('allProjects');
      const keepInTouchSection = document.getElementById('keepInTouch');
      
      if (allProjectsSection && keepInTouchSection) {
        const rect = allProjectsSection.getBoundingClientRect();
        const next = keepInTouchSection.getBoundingClientRect();
        const halfScreenHeight = window.innerHeight / 2;

        const isVisible = 
          rect.top <= halfScreenHeight && 
          next.top > window.innerHeight;
        
        setIsInSection(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClearFilters = () => {
    setAnimationClass(styles.fadeOut);
    setTimeout(() => {
      setSelectedTags([]);
    }, 300);
  };

  return (
    <div className={styles.selectedProjectsCountContainer}>
      <div className={styles.animationWrapper}>
        {isVisible && (
          <span
            className={`${styles.selectedProjectsCount} ${animationClass} ${!isInSection ? styles.fadeOut : ''}`}
          >
            {selectedProjects.length}
            {selectedProjects.length < 2 ? " project " : " projects "}
            matched
            <button onClick={handleClearFilters}>
              <ClearIcon />
              clear filters
            </button>
          </span>
        )}
      </div>
    </div>
  );
}