import type { Dispatch, ChangeEvent } from "react";

import type { SelectOption } from "@/types";
import type { MultiValue, SingleValue } from "react-select";

import type { postCode, SignupState, SignupAction } from "./use-signup";

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

  return { changeHandler, selectChangeHandler, birthChangeHandler, genderChangeHandler, addressChangeHandler };
}
