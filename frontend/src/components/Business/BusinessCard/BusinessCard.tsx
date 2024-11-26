import { Button } from "../../Button/Button";
import { FaHeart } from "react-icons/fa6";
import { useLocalStorage } from "usehooks-ts";
import { Business } from "@/types/business";
import { useNavigate } from "react-router-dom";
import styles from "./BusinessCard.module.scss";

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  const [likedCards, setLikedCards] = useLocalStorage<Business[]>("liked-businesses", []);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/businesses/${business._id}`);
  };

  const handleLikeClick = () => {
    const isAlreadyLiked = likedCards.some((card) => card._id === business._id);
    if (isAlreadyLiked) {
      setLikedCards(likedCards.filter((card) => card._id !== business._id));
    } else {
      setLikedCards([...likedCards, business]);
    }
  };

  return (
    <div className={styles.card}>
      <FaHeart
        className={styles.likeIcon}
        onClick={handleLikeClick}
        style={{
          color: likedCards.some((card) => card._id === business._id) ? "red" : "grey",
        }}
      />
      {business.images?.length && (
        <img src={business.images[0].url} alt={business.name} className={styles.image} />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.category}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <Button title="Book now" onClick={handleBookNow} />
      </div>
    </div>
  );
}
