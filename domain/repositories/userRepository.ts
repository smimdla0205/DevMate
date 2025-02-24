import type { User } from "@/domain/entities/user";

export interface UserRepository {
  create(user: Omit<User, "id" | "createdAt">): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, user: Partial<Omit<User, "id" | "createdAt">>): Promise<User>;
  delete(id: string): Promise<void>;
}
