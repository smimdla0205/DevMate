"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { transformUserData } from "@/utils/transformUserData";

import styles from "./signup.module.scss";

import SignUpForm from "./_components/signupForm";
import { useSignup } from "./_hooks/use-signupReducer";
import { useSignupHandlers } from "./_hooks/use-signupHandlers";

export default function SignUp() {
  const { container, container__top } = styles;
  const { state, dispatch } = useSignup();
  const { validateAndSubmit } = useSignupHandlers(state, dispatch);
  const router = useRouter(); // ✅ 페이지 이동을 위한 router 사용

  const submitSignUp = async () => {
    if (!validateAndSubmit()) return;
    try {
      const transformedData = transformUserData(state);
      console.log("전송할 데이터:", transformedData);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("서버에서 JSON이 아닌 응답이 반환되었습니다.");
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "회원가입 요청 실패");
      }
      const responseData = await response.json();
      console.log("회원가입 성공:", responseData);
      router.push("/login");
      // axios 변경 필요
    } catch (error) {
      if (error instanceof Error) {
        console.error("회원가입 실패:", error);
      } else {
        console.error("알 수 없는 오류:", error);
      }
    }
  };

  return (
    <div className={container}>
      <div className={container__top}>
        <Image src="/logoPurple.svg" width={66} height={66} alt="회원가입 로고" />
        <h1>회원가입</h1>
      </div>
      <SignUpForm state={state} dispatch={dispatch} onSubmit={submitSignUp} />
    </div>
  );
}
