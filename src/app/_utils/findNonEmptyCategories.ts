import { Project } from "@/_types/Project";

export function findNonEmptyCategories(
  currentProject: Project
): { id: string; title: string }[] {
  const categoriesWithTags: { id: string; title: string }[] = [];
  const tags = currentProject?.tags[0];

  if (tags.frontend.length)
    categoriesWithTags.push({ id: "frontend", title: "Frontend" });
  if (tags.backend.length)
    categoriesWithTags.push({ id: "backend", title: "Backend, API, DB" });
  if (tags.devops.length)
    categoriesWithTags.push({ id: "devops", title: "DevOps, Testing" });
  if (tags.libs.length)
    categoriesWithTags.push({ id: "libs", title: "Libs, etc" });

  return categoriesWithTags;
}