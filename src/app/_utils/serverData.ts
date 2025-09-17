import { cache } from "react";
import { openDB } from "./db";
import { Project } from "@/_types/Project";
import { SkillTag } from "@/_types/SkillTag";

export const getAllProjects = cache(async () => {
  const db = await openDB();
  const projects = await db.execute("SELECT * FROM projects");
  return JSON.parse(JSON.stringify(projects.rows)) as Project[];
});

export const getAllSkillTags = cache(async () => {
  const db = await openDB();
  const skillTags = await db.execute("SELECT * FROM skillTags");
  return JSON.parse(JSON.stringify(skillTags.rows)) as SkillTag[];
});

export const getProjectsWithTags = cache(async () => {
  const projects = await getAllProjects();
  
  const fullProjects = projects.filter((project) => project.fullProject);
  const smallProjects = projects.filter((project) => !project.fullProject);
  
  return {
    projects,
    fullProjects,
    smallProjects,
  };
});
