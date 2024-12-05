import { CategoryCard } from "../CategoryCard/CategoryCard";
import { useCategories } from "../hooks";
import styles from "./CategoryList.module.scss";

export function CategoryList() {
  const { data: categories } = useCategories();

  return (
    <div className={styles.container}>
      {categories?.map((category) => <CategoryCard key={category.name} category={category} />)}
    </div>
  );
}
