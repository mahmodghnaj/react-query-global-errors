import { TypeOptions, toast } from "react-toastify";

function useNotification() {
  const showNotification = (message: string, type: TypeOptions) => {
    toast(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      type: type,
    });
  };

  const handleErrorResponse = (error: any) => {
    showNotification("Error Test", "error");
  };
  const showSuccess = (message: string) => {
    showNotification(message, "success");
  };

  const showError = (message: string) => {
    showNotification(message, "error");
  };

  const showInfo = (message: string) => {
    showNotification(message, "info");
  };

  return {
    showSuccess,
    showError,
    showInfo,
    handleErrorResponse,
  };
}

export default useNotification;
