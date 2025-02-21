import type { $Enums } from "@prisma/client";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
  gender: $Enums.Gender;
  birthDate: Date;
  position: string;
  address: string;
  career: number;
  profileImg?: string | null;
  createdAt: Date;
}
