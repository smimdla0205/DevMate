import Select from "react-select";

import styles from "./selector.module.scss";

import type { MultiValue, SingleValue } from "react-select";

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectorProps {
  options: SelectOption[]; // 옵션 리스트
  selectedValue: SingleValue<SelectOption> | MultiValue<SelectOption>; // 단일 또는 다중 선택 값
  onChange: (selected: SingleValue<SelectOption> | MultiValue<SelectOption> | null) => void;
  placeholder?: string;
  isMulti?: boolean;
  title: string;
}

export default function Selector({
  title,
  options,
  selectedValue,
  onChange,
  placeholder,
  isMulti = false,
}: SelectorProps) {
  const { container } = styles;

  return (
    <div className={container}>
      <label>{title}</label>
      <Select
        isMulti={isMulti}
        options={options}
        value={selectedValue}
        placeholder={placeholder || "선택해주세요"}
        onChange={(newValue) => {
          if (isMulti) {
            onChange((newValue as MultiValue<SelectOption>) || []);
          } else {
            onChange(newValue as SingleValue<SelectOption>);
          }
        }}
        styles={{
          control: (provided, state) => ({
            ...provided,
            minHeight: "48px",
            borderColor: state.isFocused ? "transparent" : provided.borderColor,
          }),
          menuList: (provided) => ({
            ...provided,
            maxHeight: "200px",
            overflowY: "auto",
            "::-webkit-scrollbar": { width: "8px" },
            "::-webkit-scrollbar-thumb": { background: "#aaa", borderRadius: "8px" },
            "::-webkit-scrollbar-track": { background: "#f0f0f0" },
          }),
        }}
      />
    </div>
  );
}
