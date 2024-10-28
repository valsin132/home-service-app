import { Button } from "../../Button/Button";
import styles from "./BusinessCard.module.scss";

interface BusinessCardProps {
    _id: number;
    name: string;
    address: string;
    category: string;
    contactPerson: string;
    imageUrls: string[];
  }

export function BusinessCard ({ _id, name, address, category, contactPerson, imageUrls }: BusinessCardProps) {
  return (
    <div className={styles.card}>
        {imageUrls.length && <img
          src={imageUrls[0]}
          alt={name}
          className={styles.image}
        />
        }
      <div className={styles.infoContainer}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.contactPerson}>{contactPerson}</p>
        <p className={styles.address}>{address}</p>
        <Button title="Book now" />
      </div>
    </div>
  );
};