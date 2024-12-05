export type ToastTypes = "Info" | "Success" | "Warning";

export interface ToastProps {
  isVisible: boolean;
  content: string;
  toastType: ToastTypes;
  onClick: () => void;
}
