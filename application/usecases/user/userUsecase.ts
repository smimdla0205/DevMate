import type { User } from "@prisma/client";
import type { UserRepository } from "@/domain/repositories/userRepository";

export class UserUsecase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  public async createUser(user: Omit<User, "id" | "createdAt">): Promise<User> {
    return await this.userRepository.create(user);
  }
  // ID로 사용자 조회
  public async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  // 사용자 정보 업데이트
  public async updateUser(id: string, updatedUser: Partial<Omit<User, "id" | "createdAt">>): Promise<User> {
    return await this.userRepository.update(id, updatedUser);
  }

  // 사용자 삭제 (이메일만 삭제)
  public async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
