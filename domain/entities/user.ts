enum Gender {
  MALE,
  FEMALE,
  OTHER,
}
export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
  gender: Gender;
  birthDate: Date;
  position: string;
  address: string;
  career: number;
  profileImg?: string;
  createdAt: Date;
}
