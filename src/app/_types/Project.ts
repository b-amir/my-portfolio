export type Project = {
  id: string;
  title: string;
  image: string;
  screenshots: {
    mobile: string[];
    desktop: string[];
  };
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
  image: string;
  screenshots: never[];
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
  demoLink: string;
}