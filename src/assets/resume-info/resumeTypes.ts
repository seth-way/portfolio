export interface IProject {
  title: string;
  short: string;
  description: string;
  contributors: string[];
  tech: ITechIcon[];
  notes: string[];
  links: {
    repo: string;
    live: string;
  };
}

export type ITechIcon = "js" | "css" | "html" | "webpack" | '';
