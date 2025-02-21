import type { User } from "@/domain/entities/user";
import type { UserRepository } from "@/domain/repositories/userRepository";

import { PrismaClient } from "@prisma/client";

export class PsUserRepository implements UserRepository {
  async create(user: Omit<User, "id" | "createdAt">): Promise<User> {
    const prisma = new PrismaClient();
    const createdUser = await prisma.user.create({
      data: user,
    });
    return createdUser;
  }
  /*

  async findById(id: string): Promise<User | null> {
    return PrismaClient.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return PrismaClient.user.findUnique({ where: { email } });
  }

  async update(id: string, user: Partial<Omit<User, "id" | "createdAt">>): Promise<User> {
    return PrismaClient.user.update({
      where: { id },
      data: user,
    });
  }

  async delete(id: string): Promise<void> {
    await PrismaClient.user.delete({ where: { id } });
  }
*/
}
