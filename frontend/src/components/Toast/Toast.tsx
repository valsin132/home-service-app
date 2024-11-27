import { ReactElement, useRef } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { IoIosInformationCircleOutline, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { ToastTypes, ToastProps } from "@/types/toast";
import { useToastClosing } from "./hooks/useToastClosing";
import styles from "./Toast.module.scss";

const getIcon = (toastType: ToastTypes): ReactElement | null => {
  switch (toastType) {
    case "info":
      return <IoIosInformationCircleOutline />;
    case "success":
      return <IoIosCheckmarkCircleOutline />;
    case "warning":
      return <MdErrorOutline />;
    default:
      return null;
  }
};

const toastCubicBezier = cubicBezier(0.06, 0.14, 0.49, 1.6);

export function Toast({ isVisible, content, toastType, onClick }: ToastProps): ReactElement {
  const toastRef = useRef<HTMLDivElement | null>(null);
  useToastClosing(onClick);

  const handleAnimationComplete = () => {
    if (toastRef.current) {
      toastRef.current.focus();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`${styles.toast} ${styles[`toast--color-${toastType}`]}`}
          initial={{ y: "calc(-100% - 24px)", x: "-50%" }}
          animate={{ y: 0, x: "-50%" }}
          exit={{ y: "calc(-100% - 24px)", transition: { easings: toastCubicBezier } }}
          onAnimationComplete={handleAnimationComplete}
          role="alert"
          tabIndex={-1}
          ref={toastRef}
        >
          <div className={styles.toast__icon}>{getIcon(toastType)}</div>
          <p className={styles.toast__text}>{content}</p>
          <button
            className={styles.toast__close}
            type="button"
            aria-label="Close"
            onClick={onClick}
          >
            <IoClose className={styles.toast__iconClose} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
