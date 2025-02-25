"use client";
import Image from "next/image";

import styles from "./signup.module.scss";

import SignUpForm from "./_components/signupForm";
import { useSignup } from "./_hooks/use-signupReducer";

export default function SignUp() {
  const { container, container__top } = styles;
  const { state, dispatch } = useSignup();
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
