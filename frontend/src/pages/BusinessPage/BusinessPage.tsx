import { useBusiness } from "@/components/Business/hooks";
import { useParams } from "react-router-dom";
import { Business } from "@/types/business";
import { BusinessHeader } from "@/components/Business/BusinessHeader/BusinessHeader";
import { BusinessDescription } from "@/components/Business/BusinessDescription/BusinessDescription";
import { BusinessGallery } from "@/components/Business/BusinessGallery/BusinessGallery";
import { BusinessSimilarBusinesses } from "@/components/Business/BusinessSimilarBusinesses/BusinessSimilarBusinesses";
import { Button } from "@/components/Button/Button";
import { PiNotePencil } from "react-icons/pi";
import { useContext, useState } from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { BookingDateTime } from "@/components/booking/BookingDateTime";
import { Toast } from "@/components/Toast/Toast";
import { UserContext } from "@/contexts/UserContext";
import styles from "./BusinessPage.module.scss";

export function BusinessPage() {
  const { isLoggedIn } = useContext(UserContext);
  const { id } = useParams();
  const { data: business } = useBusiness(id) as { data: Business };
  const [toastVisible, setToastVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  const handleBookingClick = () => {
    if (!isLoggedIn) {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    } else {
      openSidebar();
    }
  };

  return (
    <>
      <div className={styles.businessContainer}>
        <BusinessHeader business={business} />
        <div className={styles.businessBody}>
          <div className={styles.businessBodyLeftCol}>
            <BusinessDescription business={business} />
            <BusinessGallery business={business} />
          </div>
          <div className={styles.businessBodyRightCol}>
            <Button onClick={handleBookingClick} className={styles.bookingBtn}>
              <PiNotePencil className={styles.bookingIcon} />
              <span>Book Appointment</span>
            </Button>
            <BusinessSimilarBusinesses business={business} />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} onClose={closeSidebar}>
        <BookingDateTime />
      </Sidebar>
      <Toast
        isVisible={toastVisible}
        content="Please log in to book an appointment."
        toastType="Warning"
        onClick={() => setToastVisible(false)}
      />
    </>
  );
}
