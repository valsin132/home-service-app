import { BusinessCard } from "../BusinessCard/BusinessCard";
import { fetchBusinesses } from "@/api/businessesApi";
import { useState, useEffect } from "react";
import { Business } from "@/types/business";
import classNames from "classnames";
import styles from "./BusinessList.module.scss";

interface BusinessListProps {
  category?: string;
  className?: string;
}

export function BusinessList({ category, className }: BusinessListProps) {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    fetchBusinesses()
      .then((response) => {
        setBusinesses(response);
      })
      .catch((error) => console.log(error));
  }, []);

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
