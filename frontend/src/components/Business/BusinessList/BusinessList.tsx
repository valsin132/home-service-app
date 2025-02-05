import { BusinessCard } from "../BusinessCard/BusinessCard";
import { useBusinesses } from "../hooks";
import classNames from "classnames";
import styles from "./BusinessList.module.scss";

interface BusinessListProps {
  category?: string;
  className?: string;
  search?: string;
}

export function BusinessList({ category, className, search }: BusinessListProps) {
  const { data } = useBusinesses(search?.trim() ?? "");
  const businesses = data ?? [];

  const filteredBusinesses = category
    ? businesses.filter((business) => business.category === category)
    : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusinesses.length > 0 ? (
        filteredBusinesses.map((business) => (
          <BusinessCard key={business._id} business={business} />
        ))
      ) : (
        <div className={styles.noBusinesses}>No services found</div>
      )}
    </div>
  );
}
