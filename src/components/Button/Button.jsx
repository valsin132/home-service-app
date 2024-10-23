import styles from './Button.module.scss';
import classNames from "classnames";

// eslint-disable-next-line react/prop-types
export function Button({ className, isRounded, ...props }) {
  return (
    <button
      className={classNames(
        styles.button,
        isRounded && styles.rounded,
        className
      )}
      {...props}
    />
  );
}
