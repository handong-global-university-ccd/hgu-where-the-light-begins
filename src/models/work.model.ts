import { DesignerWorksInfo } from "./designer.model";

export interface Works {
  COMMUNICATION: Work[];
  SERVICE: Work[];
  UX: Work[];
  INDUSTRIAL: Work[];
}

export interface Work {
  id: number;
  teamName: string | null;
  designer: DesignerWorksInfo[];
  professor: string;
  title: string;
  summary: string;
  description: string;
  teamImg?: string;
  thumbnail: string;
  creation: Creation[];
}

export interface Creation {
  id: number;
  extension: string;
  src: string;
}

export interface DesignerWork {
  work: Work[];
  category: string;
  worksId: number;
}