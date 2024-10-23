import { IconType } from "react-icons";
import styles from "./CategoryCard.module.scss";

interface Category {
  name: string;
  icon: IconType;
  color: string;
}

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { name, icon: Icon, color } = category;
  
  return (
    <div className={styles.card}>
      <Icon fontSize={48} color={color} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};