import styles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
export function Button({ children, isRounded }) {
  return (
    <button className={`${styles.button} ${isRounded ? "rounded" : ""}`}>
      {children}
    </button>
  );
}
