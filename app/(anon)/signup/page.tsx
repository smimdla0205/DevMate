"use client";
import Image from "next/image";

import { useState } from "react";

import Button from "@/components/button/button";
import InputField from "@/components/inputField/InputField";

import styles from "./signup.module.scss";

import { POSITION_OPTIONS, TECH_STACK_OPTIONS, CAREER_EXP_OPTIONS } from "@/constants/index";

import type { SelectOption } from "@/types";
import type { MultiValue, SingleValue } from "react-select";

import Selector from "./_components/selector";
import GenderSelector from "./_components/genderSelector";

export default function SignUp() {
  const { container, wrapper, wrapper__button, wrapper__inputblock } = styles;
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [gender, setGender] = useState(""); // 성별 상태 관리

  // ✅ 단일 선택 (직무 선택)
  const [selectedPosition, setSelectedPosition] = useState<SelectOption | null>(null);
  const [selectedCareerExp, setSelectedCareerExp] = useState<SelectOption | null>(null);

  // ✅ 다중 선택 (기술 스택 선택)
  const [selectedTechStack, setSelectedTechStack] = useState<SelectOption[]>([]);

  // ✅ 단일 선택 변경 핸들러
  const positionHandle = (selected: SingleValue<SelectOption>) => {
    setSelectedPosition(selected);
    console.log("선택한 직무:", selected?.label);
  };

  // ✅ 다중 선택 변경 핸들러
  const techStackHandle = (selected: MultiValue<SelectOption>) => {
    setSelectedTechStack([...selected]); // ✅ readonly 배열이라 spread 사용
    console.log("선택한 기술 스택:", selected.map((stack) => stack.label).join(", "));
  };
  const careerExpHandle = (selected: SingleValue<SelectOption>) => {
    setSelectedCareerExp(selected);
    console.log("선택한 경력:", selected?.label);
  };

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

  /*const handleSubmit = (e: React.FormEvent) => {
    //e.preventDefault();

  };*/
  return (
    <div className={container}>
      <div>
        <Image src="/logoPurple.svg" width={66} height={66} alt="회원가입 로고" />
        <h1>회원가입</h1>
      </div>
      <form className={wrapper}>
        <div className={wrapper__inputblock}>
          <InputField label="이메일" value={inputValue} onChange={handleChange} error={error} />
          <Button className={wrapper__button} variant="sub" size="long" onClick={() => console.log("버튼 클릭")}>
            중복확인
          </Button>
        </div>
        <InputField label="비밀번호" value={inputValue} onChange={handleChange} error={error} />
        <InputField label="비밀번호 확인" value={inputValue} onChange={handleChange} error={error} />
        <div className={wrapper__inputblock}>
          <InputField label="이름" value={inputValue} onChange={handleChange} error={error} />
          <GenderSelector selectedGender={gender} onChange={setGender} className={wrapper__button} />
        </div>

        <InputField label="닉네임" value={inputValue} onChange={handleChange} error={error} />
        <InputField label="생년월일" value={inputValue} onChange={handleChange} error={error} />

        <Selector
          isMulti={false}
          title="직무"
          options={POSITION_OPTIONS}
          selectedValue={selectedPosition}
          onChange={(selected) => positionHandle(selected as SingleValue<SelectOption>)}
        />
        <Selector
          isMulti={true}
          title="기술 스택"
          options={TECH_STACK_OPTIONS}
          selectedValue={selectedTechStack}
          onChange={(selected) => techStackHandle(selected as MultiValue<SelectOption>)}
        />
        <div>거주지</div>

        <Selector
          isMulti={false}
          title="경력"
          options={CAREER_EXP_OPTIONS}
          selectedValue={selectedCareerExp}
          onChange={(selected) => careerExpHandle(selected as SingleValue<SelectOption>)}
        />
        <div>프로필 이미지</div>
      </form>
      <Button variant="main" size="long" onClick={() => console.log("회원가입 버튼 클릭")}>
        가입하기
      </Button>
    </div>
  );
}
