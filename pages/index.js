import BookingButton from "../components/BookingButton";
import styles from "./styles/index.module.css";

export default () => {
  return (
    <main className={styles.main}>
      <img className={styles.image} src="/images/texas-gold.jpg" />
      <BookingButton />
    </main>
  );
};
