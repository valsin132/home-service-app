import { BookingCard } from "../BookingCard/BookingCard";
import classNames from "classnames";
import { useState } from "react";
import { useUserBookings } from "../hooks";
import { BookingStatus } from "@/types/booking";
import styles from "./BookingList.module.scss";

export function BookingList() {
  const [status, setStatus] = useState<BookingStatus>("confirmed");

  const { data: bookings, isLoading, isError } = useUserBookings(status);
  const bookingsData = bookings ?? [];

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.header}>
          <h2>My Bookings</h2>
        </div>
        <div className={styles.bookingsContainer}>
          <div className={styles.tabs}>
            <button
              className={classNames({
                [styles.active]: status === "confirmed",
              })}
              onClick={() => setStatus("confirmed")}
            >
              Booked
            </button>
            <button
              className={classNames({
                [styles.active]: status === "completed",
              })}
              onClick={() => setStatus("completed")}
            >
              Completed
            </button>
          </div>
          <div className={styles.bookings}>
            <BookingCard bookingsData={bookingsData} isLoading={isLoading} isError={isError} />
          </div>
        </div>
      </section>
    </div>
  );
}
