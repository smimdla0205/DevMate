import type { Dispatch, ChangeEvent, FocusEvent } from "react";

import { ERROR_MESSAGES } from "@/constants/errorMessages";

import type { SelectOption } from "@/types";
import type { MultiValue, SingleValue } from "react-select";

import type { postCode, SignupState, SignupAction } from "./use-signupReducer";

export function useSignupHandlers(state: SignupState, dispatch: Dispatch<SignupAction>) {
  // 일반 입력 필드 핸들러
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_INPUT",
      name: e.target.name as keyof SignupState,
      value: e.target.value,
    });
  };

  //  Select 옵션 핸들러
  const selectChangeHandler = (
    selected: SingleValue<SelectOption> | MultiValue<SelectOption> | null,
    name?: string,
  ) => {
    if (name === "stack") {
      dispatch({ type: "SET_TECH_STACK", value: selected as MultiValue<SelectOption> });
    } else if (name === "position") {
      dispatch({ type: "SET_POSITION", value: selected as SingleValue<SelectOption> | null });
    } else if (name === "career") {
      dispatch({ type: "SET_CAREER", value: selected as SingleValue<SelectOption> | null });
    }
  };

  //  생년월일 변경 핸들러
  const birthChangeHandler = (type: "year" | "month" | "day", selected: SelectOption | null) => {
    if (selected) {
      dispatch({
        type: "SET_BIRTHDATE",
        year: type === "year" ? Number(selected.value) : state.birthDate.year,
        month: type === "month" ? Number(selected.value) : state.birthDate.month,
        day: type === "day" ? Number(selected.value) : state.birthDate.day,
      });
    }
  };

  //  성별 변경 핸들러
  const genderChangeHandler = (selectedGender: string) => {
    dispatch({ type: "SET_GENDER", gender: selectedGender });
  };

  //  주소 변경 핸들러
  const addressChangeHandler = (address: postCode) => {
    dispatch({ type: "SET_ADDRESS", address });
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "email" && (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
      error = ERROR_MESSAGES.EMAIL_INVALID;
    }

    if (name === "password") {
      if (!value || value.length < 8) {
        error = ERROR_MESSAGES.PASSWORD_MIN_LENGTH;
      } else if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value) || !/[\W_]/.test(value)) {
        error = ERROR_MESSAGES.PASSWORD_COMPLEXITY;
      }
    }

    if (name === "name" && /[^a-zA-Z가-힣]/.test(value)) {
      error = ERROR_MESSAGES.NAME_INVALID_CHARACTERS;
    }

    if (name === "nickname" && /[^a-zA-Z0-9가-힣]/.test(value)) {
      error = ERROR_MESSAGES.NICKNAME_INVALID_CHARACTERS;
    }

    if (error) {
      dispatch({ type: "SET_ERRORS", errors: { ...state.errors, [name]: error } });
    } else {
      const newErrors = { ...state.errors };
      delete newErrors[name as keyof SignupState];
      dispatch({ type: "SET_ERRORS", errors: newErrors });
    }
  };

  const submitHandler = () => {
    dispatch({ type: "RESET_ERRORS" }); // 🔹 기존 에러 초기화

    const newErrors: SignupState["errors"] = {};
    if (!state.email.trim()) {
      newErrors.email = ERROR_MESSAGES.EMAIL_REQUIRED;
    }
    if (!state.password.trim()) {
      newErrors.password = ERROR_MESSAGES.PASSWORD_REQUIRED;
    }
    if (!state.name.trim()) {
      newErrors.name = ERROR_MESSAGES.NAME_REQUIRED;
    }
    if (!state.nickname.trim()) {
      newErrors.nickname = ERROR_MESSAGES.NICKNAME_REQUIRED;
    }
    if (!state.gender) {
      newErrors.gender = ERROR_MESSAGES.GENDER_REQUIRED;
    }
    if (!state.birthDate.year || !state.birthDate.month || !state.birthDate.day) {
      newErrors.birthDate = ERROR_MESSAGES.BIRTH_REQUIRED;
    }
    if (!state.address.address) {
      newErrors.address = ERROR_MESSAGES.ADDRESS_REQUIRED;
    }
    if (!state.position?.value) {
      newErrors.position = ERROR_MESSAGES.POSITION_REQUIRED;
    }
    if (!state.stack?.length) {
      newErrors.stack = ERROR_MESSAGES.TECH_STACK_REQUIRED;
    }
    if (!state.career?.value) {
      newErrors.career = ERROR_MESSAGES.CAREER_REQUIRED;
    }

    // 🔹 현재 상태(state.errors)에 기존 에러가 있는 경우 제출 차단
    if (Object.keys(state.errors).length > 0) {
      console.log("❌ 기존 에러 메시지가 존재하여 제출 불가!", state.errors);
      return;
    }

    // 🔹 새로운 에러가 있으면 제출 차단
    if (Object.keys(newErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: newErrors });
      console.log("❌ 필수 입력값 누락으로 제출 불가!", newErrors);
      return;
    }

    console.log("회원가입 요청 실행!", state);
  };

  return {
    changeHandler,
    selectChangeHandler,
    birthChangeHandler,
    genderChangeHandler,
    addressChangeHandler,
    onBlurHandler,
    submitHandler,
  };
}
