export type Project = {
  id: string;
  title: string;
  fullProject: boolean;
  image: string;
  screenshots: {
    mobile: string[];
    desktop: string[];
  } | string;
  tags: {
    frontend: string[];
    backend: string[];
    devops: string[];
    libs: string[];
  }[];
  tagsShort: string[];
  description: string[];
  descriptionShort: string;
  features: string[];
  challenges: string[];
  githubLink: string;
  demoLink: string;
  productHuntLink?: string;
} | {
  id: string;
  title: string;
  fullProject: boolean;
  image: string;
  screenshots: never[] | string;
  tags: {
    frontend: string[];
    backend: never[];
    devops: string[];
    libs: string[];
  }[];
  tagsShort: string[];
  description: string[];
  descriptionShort: string;
  features: string[];
  challenges: string[];
  githubLink: string;
  productHuntLink?: string;
  demoLink: string;
}