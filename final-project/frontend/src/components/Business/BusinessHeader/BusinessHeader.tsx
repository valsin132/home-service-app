import { Business } from "@/types/business";
import { TbUpload } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { Button } from "@/components/Button/Button";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./BusinessHeader.module.scss";

interface BusinessHeaderProps {
  business: Business;
}

export function BusinessHeader({ business }: BusinessHeaderProps) {
  if (!business) {
    return <></>;
  }

  return (
    <div className={styles.businessHeader}>
      <div className={styles.leftBusinessBlock}>
        <img className={styles.businessImg} src={business.images[0].url} alt="business" />
        <div className={styles.businessInfoBlock}>
          <p className={styles.category}>{business.category}</p>
          <h1 className={styles.name}>{business.name}</h1>
          <div className={styles.businessAddressEmailBlock}>
            <div className={styles.businessAddressBlock}>
              <GrLocation className={styles.addressIcon} />
              <p className={styles.address}>{business.address}</p>
            </div>
            <div className={styles.businessEmailBlock}>
              <HiOutlineMail className={styles.emailIcon} />
              <p className={styles.email}>{business.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightBusinessBlock}>
        <Button className={styles.uploadingBtn}>
          <TbUpload className={styles.uploadIcon} />
        </Button>
        <div className={styles.businessNameTimeBlock}>
          <div className={styles.businessNameBlock}>
            <GoPerson className={styles.nameIcon} />
            <p className={styles.contactPerson}>{business.contactPerson}</p>
          </div>
          <div className={styles.businessTimeBlock}>
            <FiClock className={styles.timeIcon} />
            <p>Available 9:00 AM to 8:PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
