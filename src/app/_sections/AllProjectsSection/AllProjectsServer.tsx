import { getAllProjects, getAllSkillTags } from "@/_utils/serverData";
import { AllProjectsClient } from "./AllProjectsClient";

export async function AllProjectsServer() {
  const [projectsData, skillTags] = await Promise.all([
    getAllProjects(),
    getAllSkillTags(),
  ]);

  const fullProjects = projectsData.filter((project) => project.fullProject);
  const smallProjects = projectsData.filter((project) => !project.fullProject);

  return (
    <AllProjectsClient
      projects={projectsData}
      fullProjects={fullProjects}
      smallProjects={smallProjects}
      skillTags={skillTags}
      loading={false}
    />
  );
}
