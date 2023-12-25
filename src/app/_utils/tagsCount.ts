export interface Project {
  id: string;
  title: string;
  image: string;
  tags: {
    frontend: string[];
    "Backend, API, DB": string[];
    "DevOps, Testing": string[];
    "Libs, etc": string[];
  }[];
  tagsShort: string[];
  description: string[];
  descriptionShort: string;
  githubLink: string;
  demoLink: string;
}

export function howManyTags(project: Project) {
  return project.tags.reduce((acc, category) => {
    Object.values(category).forEach((tags) => (acc += tags.length));
    return acc;
  }, 0);
}

export function howManyTagsShowing(project: Project) {
  return project.tagsShort.length;
}
