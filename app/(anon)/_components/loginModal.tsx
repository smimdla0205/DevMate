import Image from "next/image";

import Button from "@/components/button/button";
import InputField from "@/components/inputField/InputField";

import styles from "./loginModal.module.scss";

import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiKakaotalk } from "react-icons/si";
import { loginModalStore } from "@/stores/loginModalStore";

export default function LoginModal() {
  const { isOpen, closeModal } = loginModalStore();

  const submitLoginHandler = () => {
    console.log("로그인 버튼 클릭");
  };
  const findPasswordHander = () => {
    console.log("비밀번호 찾기 버튼 클릭");
  };
  const signUpHandler = () => {
    console.log("회원가입 버튼 클릭");
  };
  const findIdHandler = () => {
    console.log("아이디 찾기 버튼 클릭");
  };
  if (!isOpen) return null;

  return (
    <div>
      <button onClick={closeModal} className={styles.closeButton}>
        <IoClose />
      </button>
      <Image src="/logoPurple.svg" alt="Login-logo" width={66} height={66} />
      <form>
        <InputField label="아이디" type="text" placeholder="아이디" />
        <InputField label="비밀번호" type="password" placeholder="비밀번호" />
        <Button onClick={submitLoginHandler} size="long">
          로그인
        </Button>
        <div>
          <button onClick={findPasswordHander}>비밀번호 찾기</button>
          <button onClick={signUpHandler}>회원가입</button>
          <button onClick={findIdHandler}>아이디찾기</button>W
        </div>
      </form>
      <div>
        <span> ---간편 로그인---</span>
        <SiKakaotalk />
        <FcGoogle />
        <FaGithub />
      </div>
    </div>
  );
}
