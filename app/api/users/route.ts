import { NextResponse } from "next/server";

import { PsUserRepository } from "@/infrastructure/repositories/psUserRepository";

import type { User } from "@/domain/entities/user";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // 클라이언트에서 받은 JSON 데이터
    const repository = new PsUserRepository();
    const userData: Omit<User, "id" | "createdAt"> = {
      email: body.email,
      password: body.password,
      name: body.name,
      nickname: body.nickname,
      gender: body.gender,
      birthDate: new Date(body.birthDate), // ✅ 날짜 변환
      position: body.position || null, // ✅ null 가능성 처리
      address: body.address || null,
      career: body.career ?? 0,
    };
    const createdUser = await repository.create(userData);

    console.log("✅ Created User:", createdUser); // 생성된 유저 확인
    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
