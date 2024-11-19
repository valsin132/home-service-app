import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useCategories } from "../hooks";
import styles from "./VerticalCategoryList.module.scss";

export function VerticalCategoryList() {
  const { data: categories } = useCategories();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.container}>
        {categories?.map((category) => (
          <CategoryCard isVertical key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
