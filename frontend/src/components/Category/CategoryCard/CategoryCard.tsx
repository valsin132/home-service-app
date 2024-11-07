import { useNavigate, generatePath, useParams } from 'react-router-dom';
import { IconType } from 'react-icons';
import { ROUTES } from '../../../constants';
import classNames from 'classnames';
import styles from './CategoryCard.module.scss';

interface Category {
  name: string;
  icon: IconType;
  color: string;
}

interface CategoryCardProps {
  category: Category;
  isVertical?: boolean;
}

export function CategoryCard({ category, isVertical }: CategoryCardProps) {
  const params = useParams();
  const navigate = useNavigate();
  const { name, icon: Icon, color } = category;
  const activeCategory = params.category;
  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });

  return (
    <div
      className={classNames(styles.card, activeCategory === name && styles.active, {
        [styles.vertical]: isVertical,
      })}
      onClick={() => navigate(categoryPath)}
    >
      <Icon fontSize={40} color={color} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
