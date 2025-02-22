import { useReducer } from "react";

import type { SelectOption } from "@/types";
import type { MultiValue, SingleValue } from "react-select";

export interface postCode {
  address: string;
  zonecode: number | string;
}

export interface SignupState {
  email: string;
  password: string;
  name: string;
  nickname: string;
  gender: string;
  birthDate: {
    year: number;
    month: number;
    day: number;
  };
  position: SelectOption | null;
  address: postCode;
  career: SelectOption | null;
  profileImg?: string;
  stack?: readonly SelectOption[];
}

export type SignupAction =
  | { type: "SET_INPUT"; name: keyof SignupState; value: string | number }
  | { type: "SET_BIRTHDATE"; year: number; month: number; day: number }
  | { type: "SET_POSITION"; value: SingleValue<SelectOption> | null }
  | { type: "SET_CAREER"; value: SingleValue<SelectOption> | null }
  | { type: "SET_TECH_STACK"; value: MultiValue<SelectOption> }
  | { type: "SET_ADDRESS"; address: postCode }
  | { type: "SET_GENDER"; gender: string }
  | { type: "RESET" };

const signupReducer = (state: SignupState, action: SignupAction): SignupState => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, [action.name]: action.value };
    case "SET_BIRTHDATE":
      return {
        ...state,
        birthDate: {
          year: action.year,
          month: action.month,
          day: action.day,
        },
      };
    case "SET_POSITION":
      return { ...state, position: action.value };
    case "SET_CAREER":
      return { ...state, career: action.value };
    case "SET_TECH_STACK":
      return { ...state, stack: action.value };
    case "SET_ADDRESS":
      return { ...state, address: action.address };
    case "SET_GENDER":
      return { ...state, gender: action.gender };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const initialState: SignupState = {
  email: "",
  password: "",
  name: "",
  nickname: "",
  gender: "",
  birthDate: {
    year: 2000,
    month: 1,
    day: 1,
  },
  position: {
    value: 0,
    label: "",
  },
  address: {
    address: "",
    zonecode: "",
  },
  career: {
    value: 0,
    label: "",
  },
  profileImg: "",
  stack: [],
};

// ✅ 커스텀 훅 생성
export function useSignup() {
  const [state, dispatch] = useReducer(signupReducer, initialState);
  return { state, dispatch };
}
