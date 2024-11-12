import { CategoryCard } from "../CategoryCard/CategoryCard";
import { categories } from "../../../data/category";
import styles from "./CategoryList.module.scss";

export function CategoryList() {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          icon={category.icon}
          color={category.color}
        />
      ))}
    </div>
  );
}
