import styles from "./GenderSelector.module.scss";

interface GenderSelectorProps {
  selectedGender: string;
  onChange: (gender: string) => void;
  className?: string;
}

export default function GenderSelector({ selectedGender, onChange, className }: GenderSelectorProps) {
  return (
    <div className={`${styles.container__gender} ${className}`}>
      <label className={styles.container__gender__label}>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selectedGender === "male"}
          onChange={() => onChange("male")}
          className={styles.container__gender__input}
        />
        <span className={styles.container__gender__button}>남</span>
      </label>

      <label className={styles.container__gender__label}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selectedGender === "female"}
          onChange={() => onChange("female")}
          className={styles.container__gender__input}
        />
        <span className={styles.container__gender__button}>여</span>
      </label>
    </div>
  );
}
