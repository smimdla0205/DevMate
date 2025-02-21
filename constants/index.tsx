import type { Gender as GenderType } from "@/types";

export const Gender = {
  MALE: "MALE" as GenderType,
  FEMALE: "FEMALE" as GenderType,
  OTHER: "OTHER" as GenderType,
} as const;
