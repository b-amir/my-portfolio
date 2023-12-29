import { Project } from "@/_types/Project";

export function howManyTags(project: Project) {
  return project.tags.reduce((acc, category) => {
    Object.values(category).forEach((tags) => (acc += tags.length));
    return acc;
  }, 0);
}

export function howManyTagsShowing(project: Project) {
  return project.tagsShort.length;
}
