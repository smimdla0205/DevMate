import React from "react";

import styles from "./InputField.module.scss";

import type { IconType } from "react-icons";

interface InputFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string | null;
  success?: string | null;
  disabled?: boolean;
  icon?: IconType;
  iconPosition?: "left" | "right";
  onIconClick?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  error,
  success,
  disabled = false,
  icon: Icon,
  iconPosition = "right",
  onIconClick,
}) => {
  const hasLeftIcon = Icon && iconPosition === "left";
  const hasRightIcon = Icon && iconPosition === "right";

  return (
    <div className={`${styles.inputField} ${error ? styles.errorField : ""}`}>
      {label && <label>{label}</label>}
      <div
        className={`${styles.inputContainer} ${hasLeftIcon ? styles.hasIconLeft : ""} ${hasRightIcon ? styles.hasIconRight : ""}`}
      >
        {hasLeftIcon && (
          <span className={styles.iconContainer} onClick={onIconClick}>
            <Icon size={20} />
          </span>
        )}
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
        {hasRightIcon && (
          <span className={styles.iconContainer} onClick={onIconClick}>
            <Icon size={20} />
          </span>
        )}
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {success && <p className={styles.successMessage}>{success}</p>}
    </div>
  );
};

export default InputField;
