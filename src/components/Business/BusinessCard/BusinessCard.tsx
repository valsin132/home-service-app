import { Button } from "../../Button/Button";
import { FaHeart } from "react-icons/fa6";
import { useLocalStorage } from 'usehooks-ts';
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
    const [likedCards, setLikedCards] = useLocalStorage<BusinessCardProps[]>('liked-businesses', []);

    const handleLikeClick = () => {
        const isAlreadyLiked = likedCards.some(card => card._id === _id);
        if (isAlreadyLiked) {
            setLikedCards(likedCards.filter(card => card._id !== _id));
        } else {
            setLikedCards([...likedCards, { _id, name, address, category, contactPerson, imageUrls }]);
        }
    };

  return (
    <div className={styles.card}>
        <FaHeart className={styles.likeIcon} onClick={handleLikeClick} style={{ color: likedCards.some(card => card._id === _id) ? 'red' : 'grey' }} />
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