import { Business } from "@/types/business";
import styles from "./BusinessDescription.module.scss";

interface BusinessDescriptionProps {
  business: Business;
}

export function BusinessDescription({ business }: BusinessDescriptionProps) {
  if (!business) {
    return <></>;
  }

  return (
    <div className={styles.businessDescription}>
      <h2 className={styles.descriptionTitle}>Description</h2>
      <p className={styles.description}>{business.about}</p>
    </div>
  );
}
