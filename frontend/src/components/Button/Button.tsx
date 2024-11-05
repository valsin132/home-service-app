import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  title?: string;
  children?: React.ReactNode;
  isRounded?: boolean;
  onClick?: () => void;
}

export function Button({ isRounded, title, children, onClick }: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        isRounded && styles.rounded
      )}
      onClick={onClick}
    >{children}
    {title}</button>
  );
};
