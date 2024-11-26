import { useBusiness } from "@/components/Business/hooks";
import { useParams } from "react-router-dom";
import { Business } from "@/types/business";
import { BusinessHeader } from "@/components/Business/BusinessHeader/BusinessHeader";
import { BusinessDescription } from "@/components/Business/BusinessDescription/BusinessDescription";
import { BusinessGallery } from "@/components/Business/BusinessGallery/BusinessGallery";
import { BusinessSimilarBusinesses } from "@/components/Business/BusinessSimilarBusinesses/BusinessSimilarBusinesses";
import { Button } from "@/components/Button/Button";
import { PiNotePencil } from "react-icons/pi";
import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { BookingDateTime } from "@/components/booking/BookingDateTime";
import styles from "./BusinessPage.module.scss";

export function BusinessPage() {
  const { id } = useParams();
  const { data: business } = useBusiness(id) as { data: Business };
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

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
            <Button onClick={openSidebar} className={styles.bookingBtn}>
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
    </>
  );
}
