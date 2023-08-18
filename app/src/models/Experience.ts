export interface Experience {
    id: number;
    company: string;
    role: string;
    description: string;
    date: string;
    city: string;
    technologies: string[];
    projects?: string[];
    website?: string;
  }