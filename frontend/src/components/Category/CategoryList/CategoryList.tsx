import { useEffect, useState } from "react";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { Category } from "@/types/category";
import { fetchCategories } from "@/api/categoriesApi";
import styles from "./CategoryList.module.scss";

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        setCategories(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
}
