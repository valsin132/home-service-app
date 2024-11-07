import { CiSearch } from 'react-icons/ci';
import { Button } from '../../components/Button/Button';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { CategoryList } from '../../components/Category/CategoryList/CategoryList';
import { BusinessList } from '../../components/Business/BusinessList/BusinessList';
import styles from './Home.module.scss';

export function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        Find Home <span className={styles.title}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>Explore Best Home Service & Repair near you</p>
      <div className={styles.searchContainer}>
        <SearchInput />
        <Button onClick={() => console.log('clicked')} isRounded>
          <div>
            <CiSearch className={styles.searchIcon} />
          </div>
        </Button>
      </div>
      <CategoryList />
      <div className={styles.businessList}>
        <h2 className={styles.popularTitle}>Popular businesses</h2>
        <BusinessList />
      </div>
    </div>
  );
}
