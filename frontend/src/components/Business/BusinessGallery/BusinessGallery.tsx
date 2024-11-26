import { Business } from "@/types/business";
import styles from "./BusinessGallery.module.scss";

interface BusinessGalleryProps {
  business: Business;
}

export function BusinessGallery({ business }: BusinessGalleryProps) {
  if (!business) {
    return <></>;
  }

  return (
    <div className={styles.businessGallery}>
      <h2 className={styles.galleryTitle}>Gallery</h2>
      <div className={styles.galleryImagesBlock}>
        {business.images.map((image, index) => (
          <img
            className={styles.galleryImage}
            key={index}
            src={image.url}
            alt={`${business.name} image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
