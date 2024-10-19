import { toast } from "react-toastify";

const showToast = (type, msg = "", autoCloseTime = 1500) => {
  switch (type) {
    case "success":
      toast.success(msg, { duration: autoCloseTime });
      break;
    case "error":
      toast.error(msg, { duration: autoCloseTime });
      break;
    case "warn":
      toast.warn(msg, { duration: autoCloseTime });
      break;
    case "info":
      toast.info(msg, { duration: autoCloseTime });
      break;
    default:
      console.error("Unsupported snackbar type!");
  }
};

export const errorMessage = (msg, duration = 1500) =>
  showToast("error", msg, duration);
export const successMessage = (msg, duration = 1500) =>
  showToast("success", msg, duration);
export const warningMessage = (msg, duration = 1500) =>
  showToast("warn", msg, duration);
export const infoMessage = (msg, duration = 1500) =>
  showToast("info", msg, duration);
