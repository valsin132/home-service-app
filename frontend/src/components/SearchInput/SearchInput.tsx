import styles from "./SearchInput.module.scss";

export function SearchInput({ ...props }) {
  return <input className={styles.searchInput} placeholder="Search" {...props} />;
}
