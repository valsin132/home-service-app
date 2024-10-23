import styles from "./CategoryCard.module.scss";

export default function CategoryCard({ category }) {
    const { name, icon } = category;
    const Icon = icon;
  
    return (
      <div className={styles.card}>
        <Icon fontSize={48} color={category.color} />
        <p className={styles.name}>{name}</p>
      </div>
    );
  };