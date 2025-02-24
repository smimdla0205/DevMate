import React from "react";

import styles from "./InputField.module.scss";

import type { IconType } from "react-icons";

interface InputFieldProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string | null;
  success?: string | null;
  disabled?: boolean;
  icon?: IconType;
  onIconClick?: () => void;
  readOnly?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  placeholder = "",
  error,
  success,
  disabled = false,
  icon: Icon,
  onIconClick,
  readOnly = false,
}) => {
  return (
    <div className={`${styles.inputField} ${error ? styles.errorField : ""}`}>
      {label && <label>{label}</label>}
      <div
        className={`${styles.inputContainer} 
                 ${Icon ? (!onIconClick ? styles.hasIconLeft : styles.hasIconRight) : ""}`}
      >
        {/* 왼쪽 아이콘의 경우 클릭 이벤트 없음 */}
        {!onIconClick && Icon && (
          <span className={styles.iconContainer}>
            <Icon size={20} />
          </span>
        )}

        <input
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
        {onIconClick && Icon && (
          <button className={styles.iconContainer} onClick={onIconClick}>
            <Icon size={20} />
          </button>
        )}
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {success && <p className={styles.successMessage}>{success}</p>}
    </div>
  );
};

export default InputField;
