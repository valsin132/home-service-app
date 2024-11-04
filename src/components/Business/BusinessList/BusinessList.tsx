import { businesses } from "../../../data/business";
import { BusinessCard } from "../BusinessCard/BusinessCard";
import classNames from "classnames";
import styles from "./BusinessList.module.scss";

interface BusinessListProps {
    category?: string;
    className?: string;
  }

export function BusinessList ({ category, className }: BusinessListProps) {
  
  return (
    <div className={classNames(styles.container, className)}>
      {businesses
        .filter(business => !category || business.category === category)
        .map(business => (
        <BusinessCard
            key={business._id}
            _id={business._id}
            name={business.name}
            address={business.address}
            category={business.category}
            contactPerson={business.contactPerson}
            imageUrls={business.images.map(image => image.url)}
          />
      ))}
    </div>
  );
};