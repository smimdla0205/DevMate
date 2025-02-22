"use client";
import Image from "next/image";

import { useState } from "react";

import Button from "@/components/button/button";
import InputField from "@/components/inputField/InputField";

export default function SignUp() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // 유효성 검사
    if (value.trim() === "") {
      setError("This field cannot be empty."); // 오류 메시지 설정
    } else if (value.length < 3) {
      setError("Minimum 3 characters required.");
    } else {
      setError(""); // 오류 해제
    }
  };
  return (
    <div>
      <form>
        <div>
          <Image src="/logoPurple.svg" width={66} height={66} alt="회원가입 로고" />
          <h1>회원가입</h1>
        </div>
        <div>
          <InputField label="이메일" value={inputValue} onChange={handleChange} error={error} />
          <Button variant="sub" size="large" onClick={() => console.log("버튼 클릭")}>
            중복확인
          </Button>
        </div>
        <InputField label="비밀번호" value={inputValue} onChange={handleChange} error={error} />
        <InputField label="비밀번호 확인" value={inputValue} onChange={handleChange} error={error} />
        <div>
          <InputField label="이름" value={inputValue} onChange={handleChange} error={error} />
          <div>라디오 버튼</div>
        </div>

        <InputField label="닉네임" value={inputValue} onChange={handleChange} error={error} />
        <InputField label="생년월일" value={inputValue} onChange={handleChange} error={error} />
        <div>직무 드롭다운</div>
        <InputField label="기술스택" value={inputValue} onChange={handleChange} error={error} />
        <div>거주지</div>
        <div>경력(단위: 년 )</div>
        <div>프로필 이미지</div>
      </form>
      <Button variant="main" size="long" onClick={() => console.log("회원가입 버튼 클릭")}>
        가입하기
      </Button>
    </div>
  );
}
