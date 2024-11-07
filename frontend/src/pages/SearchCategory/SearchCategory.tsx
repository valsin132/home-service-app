import { VerticalCategoryList } from '../../components/Category/VerticalCategoryList/VerticalCategoryList';
import { BusinessList } from '../../components/Business/BusinessList/BusinessList';
import { useParams } from 'react-router-dom';
import styles from './SearchCategory.module.scss';

export function SearchCategory() {
  const { category } = useParams();

  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        <VerticalCategoryList />
      </div>
      <div className={styles.businessContainer}>
        <h2 className={styles.title}>{category}</h2>
        <BusinessList category={category} className={styles.businessList} />
      </div>
    </div>
  );
}
