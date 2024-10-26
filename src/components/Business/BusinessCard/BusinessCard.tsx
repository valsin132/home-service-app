import { Button } from "../../Button/Button";
import styles from "./BusinessCard.module.scss";

interface BusinessProps {
    _id: number;
    name: string;
    address: string;
    category: string;
    contactPerson: string;
    email: string;
    imageUrls: string[];
  }

export function BusinessCard ({ _id, name, address, category, contactPerson, email, imageUrls }: BusinessProps) {
  return (
    <div className={styles.card}>
        {imageUrls && <img
          src={imageUrls[0]}
          alt={name}
          className={styles.image}
        />
        }
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.contactPerson}>{contactPerson}</p>
        <p className={styles.address}>{address}</p>
        <Button title="Book now" />
      </div>
    </div>
  );
};