import { CategoryCard } from "../CategoryCard/CategoryCard";
import { categories } from "../../../data/category";
import styles from "./VerticalCategoryList.module.scss"

export function VerticalCategoryList() {
  return (
    <div>
        <h2 className={styles.title}>Categories</h2>
        {categories.map((category) => (
            <CategoryCard isVertical key={category.name} category={category} />
      ))}
    </div>
  )
}
