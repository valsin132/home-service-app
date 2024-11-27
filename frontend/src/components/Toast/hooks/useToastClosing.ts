import { useEffect } from "react";

export function useToastClosing(onClose: () => void) {
  useEffect(() => {
    const closeTimeoutId = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(closeTimeoutId);
    };
  }, [onClose]);
}
