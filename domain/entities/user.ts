export interface UserBasicInfo {
  id: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
  gender: string;
  birthDate: Date;
  position: string;
  address: string;
  career: number;
  profileImg?: string | null;
  createdAt: Date;
}

/*
export interface UserRelations {
  techStack?: TechStackTag[];
  comments?: Comment[];
  notices?: Notice[];
  applications?: Apply[];
  member?: Member[];
  projects?: Project[];
}
*/
export type User = UserBasicInfo; //& UserRelations;
