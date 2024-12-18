import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  // eslint-disable-next-line no-unused-vars
  onSearch: (search: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search"
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}
