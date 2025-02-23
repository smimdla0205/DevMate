"use client";
import Image from "next/image";

import styles from "./signup.module.scss";

import SignUpForm from "./_components/signupFrom";
import { useSignup } from "./_hooks/use-signupReducer";

export default function SignUp() {
  const { container, container__top } = styles;

  const { state, dispatch } = useSignup();
  // SignUpForm 회원가입 실패시 오류 메세지 출력 - 오류 메세지 커스텀
  // 회원가입 성공시 로그인 페이지로 이동
  // state 값 api 타입으로 변경
  return (
    <div className={container}>
      <div className={container__top}>
        <Image src="/logoPurple.svg" width={66} height={66} alt="회원가입 로고" />
        <h1>회원가입</h1>
      </div>
      <SignUpForm state={state} dispatch={dispatch} />
    </div>
  );
}
