import { CategoryCard } from "../CategoryCard/CategoryCard";
import { fetchCategories } from "@/api/categoriesApi";
import { useEffect, useState } from "react";
import { Category } from "@/types/category";
import styles from "./VerticalCategoryList.module.scss";

export function VerticalCategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!categories || categories.length === 0) {
    return <div>No categories available.</div>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.container}>
        {categories.map((category) => (
          <CategoryCard isVertical key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
