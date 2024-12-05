import styles from "./AboutUs.module.scss";
import service from "../../assets/service.jpeg";

export function AboutUs() {
  return (
    <div className={styles.aboutWrapper}>
      <h2>About</h2>
      <div className={styles.container}>
        <img className={styles.serviceImage} src={service} alt="service photo" />
        <p className={styles.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni provident amet iste quia consequatur esse recusandae at dignissimos blanditiis? Ut nam sit at quidem deleniti, amet vero suscipit dolor? Velit, culpa placeat. Dolore ad harum fugit, molestiae tempore, cupiditate dicta perspiciatis similique illum architecto ducimus quis, consequatur iure accusamus nam maxime quaerat atque. Quibusdam, blanditiis officia reprehenderit voluptatem, recusandae eligendi molestias dolorum numquam, aspernatur inventore sequi ad iusto repellendus!</p>
      </div>
    </div>
  );
}
