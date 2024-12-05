import { Business } from "@/types/business";
import styles from "./BusinessSimilarBusinesses.module.scss";

interface BusinessSimilarBusinessesProps {
  business: Business;
}

export function BusinessSimilarBusinesses({ business }: BusinessSimilarBusinessesProps) {
  if (!business) {
    return <></>;
  }

  return (
    <div className={styles.similarBusinessesWrapper}>
      <h2 className={styles.title}>Similar Businesses</h2>
      <div className={styles.similarBusinessContainer}>
        <div className={styles.businessSimilarBlock}>
          <img src={business.images[0].url} alt="Business" className={styles.similarImage} />
          <div className={styles.businessSimilarInfo}>
            <h3 className={styles.name}>{business.name}</h3>
            <p className={styles.contactPerson}>{business.contactPerson}</p>
            <p className={styles.address}>{business.address}</p>
          </div>
        </div>
        <div className={styles.businessSimilarBlock}>
          <img src={business.images[0].url} alt="Business" className={styles.similarImage} />
          <div className={styles.businessSimilarInfo}>
            <h3 className={styles.name}>{business.name}</h3>
            <p className={styles.contactPerson}>{business.contactPerson}</p>
            <p className={styles.address}>{business.address}</p>
          </div>
        </div>
        <div className={styles.businessSimilarBlock}>
          <img src={business.images[0].url} alt="Business" className={styles.similarImage} />
          <div className={styles.businessSimilarInfo}>
            <h3 className={styles.name}>{business.name}</h3>
            <p className={styles.contactPerson}>{business.contactPerson}</p>
            <p className={styles.address}>{business.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
