import { BusinessCard } from "../BusinessCard/BusinessCard";
import { useBusinesses } from "./hooks";
import classNames from "classnames";
import styles from "./BusinessList.module.scss";

interface BusinessListProps {
  category?: string;
  className?: string;
}

export function BusinessList({ category, className }: BusinessListProps) {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  const filteredBusinesses = category
    ? businesses.filter((business) => business.category === category)
    : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusinesses.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
}
