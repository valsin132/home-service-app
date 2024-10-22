import { CiSearch } from "react-icons/ci";
import { Button } from "../../components/Button/Button";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.searchContainer}>
        <SearchInput />
        <Button isRounded>
          <div>
            <CiSearch fontSize={24} />
          </div>
        </Button>
      </div>
    </div>
  )
}
