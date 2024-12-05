import { BsEye, BsEyeSlash } from "react-icons/bs";
import styles from "./LoginRegister.module.scss";

interface ShowPasswordButtonProps {
  showPassword: boolean;
  onClick: () => void;
}

export function ShowPasswordButton({ showPassword, onClick }: ShowPasswordButtonProps) {
  return (
    <button
      type="button"
      aria-label={showPassword ? "Password Visible" : "Password Invisible."}
      className={styles.passwordButton}
      onClick={onClick}
    >
      {showPassword ? <BsEyeSlash /> : <BsEye />}
    </button>
  );
}
