import { Project } from "@/_types/Project";

export function findNonEmptyCategories(
  currentProject: Project
): { id: string; title: string }[] {
  const categoriesWithTags: { id: string; title: string }[] = [];
  //@ts-ignore
  const tags = JSON.parse(currentProject?.tags);

  if (tags[0].frontend?.length)
    categoriesWithTags.push({ id: "frontend", title: "Frontend" });
  if (tags[0].backend?.length)
    categoriesWithTags.push({ id: "backend", title: "Backend, API, DB" });
  if (tags[0].devops?.length)
    categoriesWithTags.push({ id: "devops", title: "DevOps, Testing" });
  if (tags[0].libs?.length)
    categoriesWithTags.push({ id: "libs", title: "Libs, etc" });

  return categoriesWithTags;
}