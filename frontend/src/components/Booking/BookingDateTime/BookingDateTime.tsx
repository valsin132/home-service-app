import { useContext, useState } from "react";
import { add, format, isBefore, isToday, setHours, setMinutes, setSeconds } from "date-fns";
import Calendar from "react-calendar";
import classNames from "classnames";
import { Button } from "../../Button/Button";
import { UserContext } from "@/contexts/UserContext";
import { usePostBooking } from "../hooks";
import { NewBooking } from "@/types/booking";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "@/components/Toast/Toast";
import { ToastTypes } from "@/types/toast";
import { ROUTES } from "@/constants";
import "react-calendar/dist/Calendar.css";
import "./BookingDateTime.Calendar.scss";
import styles from "./BookingDateTime.module.scss";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

export function BookingDateTime() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastContent, setToastContent] = useState<string>("");
  const [toastType, setToastType] = useState<ToastTypes>("Info");
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  const { user } = useContext(UserContext);
  const { mutateAsync: postBooking } = usePostBooking();
  const [error, setError] = useState<string | null>(null);

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const startOfDay = setHours(setMinutes(setSeconds(justDate, 0), 0), 0);
    const start = add(startOfDay, { hours: 9 });
    const end = add(startOfDay, { hours: 20 });
    const interval = 60;

    const times = [];
    for (let i = start; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const handleBooking = async () => {
    if (!id) return;

    const booking: NewBooking = {
      businessId: id,
      date: date.justDate,
      time: format(date.dateTime!, "kk:mm"),
      userEmail: user!.email,
      userName: user!.name,
      status: "confirmed",
    };
    try {
      await postBooking(booking);
      setToastType("Success");
      setToastContent("Booking successful!");
      setToastVisible(true);

      setTimeout(() => {
        setToastVisible(false);
        navigate(ROUTES.HOME);
      }, 2000);
      setDate({ justDate: null, dateTime: null });
    } catch (error) {
      setToastType("Warning");
      setToastContent("Error booking appointment. Please try again.");
      setToastVisible(true);
      console.error("Error booking:", error);
    }
  };

  const times = getTimes();
  const now = new Date();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Book a Service</h3>
        <p className={styles.text}>Select Date and Time slot to book a service</p>
        <p className={styles.selectDate}>Select Date</p>
      </div>
      <div className="calendar-container">
        <Calendar
          minDate={new Date()}
          view="month"
          onChange={(selectedDate) =>
            setDate({
              justDate: selectedDate as Date,
              dateTime: null,
            })
          }
        />
      </div>
      <div>
        <p className={styles.selectTime}>Select Time Slot</p>
        <div className={styles.dateTimesContainer}>
          <div className={styles.timesWrapper}>
            {times?.map((time, index) => {
              const isPast = isToday(date.justDate ?? new Date()) && isBefore(time, now);
              return (
                <div key={index} className={styles.times}>
                  <button
                    type="button"
                    onClick={() => {
                      if (!isPast) {
                        setDate((prev) => ({
                          ...prev,
                          dateTime: time,
                        }));
                        setError(null);
                      }
                    }}
                    className={classNames(styles.timeButton, {
                      [styles.active]: date.dateTime?.getTime() === time.getTime(),
                      [styles.disabled]: isPast,
                    })}
                    disabled={isPast}
                  >
                    {format(time, "HH:mm")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.bookButtonContainer}>
        <Button onClick={handleBooking} className={styles.bookButton}>
          Book Now
        </Button>
      </div>
      <Toast
        isVisible={toastVisible}
        content={toastContent}
        toastType={toastType}
        onClick={() => setToastVisible(false)}
      />
    </div>
  );
}
