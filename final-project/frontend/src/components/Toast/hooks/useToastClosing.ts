import { useEffect } from "react";

export function useToastClosing(onClose: () => void) {
  useEffect(() => {
    const closeTimeoutId = setTimeout(() => {
      onClose();
    }, 2000);
    return () => {
      clearTimeout(closeTimeoutId);
    };
  }, [onClose]);
}
