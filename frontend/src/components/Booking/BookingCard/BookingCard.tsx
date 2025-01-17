import { GoPerson } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { PostBooking } from "@/types/booking";
import styles from "./BookingCard.module.scss";
import { Button } from "@/components/Button/Button";

interface BookingCardProps {
  bookingsData: PostBooking[];
  isLoading: boolean;
  isError: boolean;
}

export function BookingCard({ bookingsData, isLoading, isError }: BookingCardProps) {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error loading bookings.</div>
      ) : (
        bookingsData.map((booking) => (
          <div key={booking._id} className={styles.bookingCard}>
            <img
              src={booking.businessId?.images?.[0]?.url || "default-image-url.jpg"}
              alt="Business"
            />
            <div className={styles.info}>
              <strong className={styles.category}>
                {booking.businessId?.category || "Category not available"}
              </strong>
              <p className={styles.personName}>
                <GoPerson className={styles.icon} />
                {booking.businessId?.contactPerson || "Contact person not available"}
              </p>
              <p>
                <CiLocationOn className={styles.icon} />
                {booking.businessId?.address || "Address not available"}
              </p>
              <p>
                <CiCalendar className={styles.icon} />
                Service on: {booking.date ? new Date(booking.date).toLocaleDateString() : "N/A"}
              </p>
              <p>
                <LuClock4 className={styles.icon} />
                Service on: {booking.time || "Time not available"}
              </p>
              <Button className={styles.deleteButton} children="Delete" />
            </div>
          </div>
        ))
      )}
    </>
  );
}
