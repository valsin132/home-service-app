import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: React.ReactNode;
  isRounded?: boolean;
  onClick?: () => void;
}

export function Button({ isRounded, title, children, onClick, className }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, isRounded && styles.rounded, className)}
      onClick={onClick}
    >
      {children}
      {title}
    </button>
  );
}
