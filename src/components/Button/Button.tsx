import { ReactElement } from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";

interface ButtonProps {
  title?: string;
  children?: React.ReactNode;
  isRounded?: boolean;
}

export function Button({ isRounded, title, children }: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        isRounded && styles.rounded
      )}
    >{children}
    {title}</button>
  );
};
