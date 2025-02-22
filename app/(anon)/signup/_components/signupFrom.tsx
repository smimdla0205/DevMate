import { useState } from "react";
import type { Dispatch } from "react";

import Button from "@/components/button/button";
import Selector from "@/components/selector/selector";
import InputField from "@/components/inputField/InputField";

import styles from "./signupForm.module.scss";

import { POSITION_OPTIONS, TECH_STACK_OPTIONS, CAREER_EXP_OPTIONS } from "@/constants/selectOptions";

import type { SignupState, SignupAction } from "@/app/(anon)/signup/_hooks/use-signup";

import AddressSearch from "./addressSearch";
import BirthSelector from "./birthSelector";
import GenderSelector from "./genderSelector";

import { useSignupHandlers } from "@/app/(anon)/signup/_hooks/use-signupHandlers";

interface SignUpFormProps {
  state: SignupState;
  dispatch: Dispatch<SignupAction>;
}

export default function SignUpForm({ state, dispatch }: SignUpFormProps) {
  const { container, container__button, container__inputblock } = styles;
  const { handleChange, handleSelectChange, handleBirthChange, handleGenderChange, setAddress } = useSignupHandlers(
    state,
    dispatch,
  );
  const [isAddrSearchOpen, setIsAddrSearchOpen] = useState(false);

  return (
    <form className={container}>
      {isAddrSearchOpen && (
        <AddressSearch setAddress={setAddress} handleComplete={() => setIsAddrSearchOpen(!isAddrSearchOpen)} />
      )}
      <div className={container__inputblock}>
        <InputField name="email" label="이메일" value={state.email} onChange={handleChange} />
        <Button className={container__button} variant="sub" size="long" onClick={() => console.log("버튼 클릭")}>
          중복확인
        </Button>
      </div>

      <InputField name="password" label="비밀번호" value={state.password} onChange={handleChange} />
      <InputField name="passwordConfirm" label="비밀번호 확인" value={state.password} onChange={handleChange} />

      <div className={container__inputblock}>
        <InputField name="name" label="이름" value={state.name} onChange={handleChange} />
        <GenderSelector selectedGender={state.gender} onChange={handleGenderChange} className={container__button} />
      </div>

      <InputField name="nickname" label="닉네임" value={state.nickname} onChange={handleChange} />
      <BirthSelector birthDate={state.birthDate} onChange={handleBirthChange} />

      <Selector
        name="position"
        isMulti={false}
        title="직무"
        options={POSITION_OPTIONS}
        selectedValue={state.position}
        onChange={(selected) => handleSelectChange(selected, "position")}
      />

      <Selector
        name="stack"
        isMulti={true}
        title="기술 스택"
        options={TECH_STACK_OPTIONS}
        selectedValue={state.stack ?? []}
        onChange={(selected) => handleSelectChange(selected, "stack")}
      />
      <div className={container__inputblock}>
        <InputField label="주소" value={`${state.address.address} ${state.address.zonecode}`} readOnly />
        <Button
          className={container__button}
          variant="sub"
          size="long"
          onClick={() => setIsAddrSearchOpen(!isAddrSearchOpen)}
        >
          주소검색
        </Button>
      </div>

      <Selector
        name="career"
        isMulti={false}
        title="경력"
        options={CAREER_EXP_OPTIONS}
        selectedValue={state.career}
        onChange={(selected) => handleSelectChange(selected, "career")}
      />
    </form>
  );
}
