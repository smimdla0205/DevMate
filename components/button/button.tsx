import styles from "./button.module.scss";

type buttonVariant = "main" | "sub" | "black" | "outline";
type buttonSize = "small" | "large" | "long";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: buttonVariant;
  size?: buttonSize;
  onClick: () => void; // ✅ 필수 속성으로 지정
}

export default function Button({ children, variant = "main", size = "small", onClick, ...props }: ButtonProps) {
  // eslint-disable-next-line security/detect-object-injection
  const buttonClass = `${styles.button} ${variant ? styles[variant] : "main"} ${size ? styles[size] : "small"}`.trim();

  return (
    <button type="button" className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
