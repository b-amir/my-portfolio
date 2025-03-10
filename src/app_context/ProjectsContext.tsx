'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Project } from '@/_types/Project';
import { cachedFetch } from '@/_utils/fetchCache';

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
  fullProjects: Project[];
  smallProjects: Project[];
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  loading: true,
  fullProjects: [],
  smallProjects: []
});

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fullProjects = projects.filter((project) => project.fullProject);
  const smallProjects = projects.filter((project) => !project.fullProject);

  const fetchProjects = async () => {
    try {
      const data = await cachedFetch("/api/projects");
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  
  return (
    <ProjectsContext.Provider value={{ projects, loading, fullProjects, smallProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
