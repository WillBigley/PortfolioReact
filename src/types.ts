export interface Project {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  organisation: string;
  description?: string;
}
