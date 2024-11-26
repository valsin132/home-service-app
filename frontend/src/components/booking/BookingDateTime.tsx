import { useState } from "react";
import { add, format, isBefore, isToday, setHours, setMinutes, setSeconds } from "date-fns";
import Calendar from "react-calendar";
import classNames from "classnames";
import { Button } from "../Button/Button";
import "react-calendar/dist/Calendar.css";
import "./BookingDateTime.Calendar.scss";
import styles from "./BookingDateTime.module.scss";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

export function BookingDateTime() {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
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

  const times = getTimes();
  const now = new Date();

  const handleBooking = () => {
    if (!date.justDate || !date.dateTime) {
      setError("Please select date and time before booking.");
    } else {
      setError(null);
      console.log(`Booked: ${format(date.dateTime, "yyyy-MM-dd HH:mm")}`);
    }
  };

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
    </div>
  );
}
