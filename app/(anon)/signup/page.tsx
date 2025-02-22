"use client";
import Image from "next/image";

import Button from "@/components/button/button";

import styles from "./signup.module.scss";

import { useSignup } from "./_hooks/use-signup";
import SignUpForm from "./_components/signupFrom";

export default function SignUp() {
  const { container } = styles;

  const { state, dispatch } = useSignup();

  return (
    <div className={container}>
      <div>
        <Image src="/logoPurple.svg" width={66} height={66} alt="회원가입 로고" />
        <h1>회원가입</h1>
      </div>
      <SignUpForm state={state} dispatch={dispatch} />
      <Button variant="main" size="long" onClick={() => console.log(state)}>
        가입하기
      </Button>
    </div>
  );
}
