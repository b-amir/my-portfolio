import { Project } from "@/_types/Project";

export function howManyTags(project: Project) {
  //@ts-ignore
  return JSON.parse(project.tags).reduce((acc: number, category: any) => {
    Object.values(category).forEach((tags: any) => (acc += tags.length));
    return acc;
  }, 0);
}

export function howManyTagsShowing(project: Project) {
  return project.tagsShort.length;
}
