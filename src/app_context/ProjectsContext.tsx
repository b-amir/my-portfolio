'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Project } from '@/_types/Project';
import { cachedFetch } from '@/_utils/fetchCache';

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
  fullProjects: Project[];
  smallProjects: Project[];
  error: Error | null
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  loading: true,
  fullProjects: [],
  smallProjects: [],
  error: null
});

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fullProjects = projects.filter((project) => project.fullProject);
  const smallProjects = projects.filter((project) => !project.fullProject);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await cachedFetch("/api/projects");
      setProjects(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError(error instanceof Error ? error : new Error("Failed to fetch projects"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  
  return (
    <ProjectsContext.Provider value={{ projects, loading, error, fullProjects, smallProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
