import { useNavigate, generatePath, useParams } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { Category } from "@/types/category";
import { iconMap } from "./iconMap";
import classNames from "classnames";
import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: Category;
  isVertical?: boolean;
}

export function CategoryCard({ category, isVertical }: CategoryCardProps) {
  const params = useParams();
  const navigate = useNavigate();

  if (!category) {
    return <div>Loading...</div>;
  }

  const activeCategory = params.category;
  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: category.name });
  const Icon = iconMap[category.name as keyof typeof iconMap] || iconMap.defaultIcon;

  return (
    <div
      className={classNames(styles.card, activeCategory === category.name && styles.active, {
        [styles.vertical]: isVertical,
      })}
      onClick={() => navigate(categoryPath)}
    >
      {Icon && <Icon fontSize={40} color={category.color} />}
      <p className={styles.name}>{category.name}</p>
    </div>
  );
}
