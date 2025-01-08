import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  // eslint-disable-next-line no-unused-vars
  onSearch: (search: string) => void;
  onEnter: () => void;
}

export function SearchInput({ onSearch, onEnter }: SearchInputProps) {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search"
      onChange={(event) => onSearch(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onEnter();
        }
      }}
    />
  );
}
