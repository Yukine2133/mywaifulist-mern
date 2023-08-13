import { toast } from "react-toastify";

export const formValidation = (name: string, from: string, image: string) => {
  if (!name || !from || !image) {
    toast.error("Please fill in all fields!", {
      autoClose: 1500,
      position: toast.POSITION.TOP_CENTER,
      theme: "dark",
    });
    return false; // Validation failed
  }
  return true; // Validation passed
};

export const formSuccess = (text: string) => {
  toast.success(`${text}`, {
    autoClose: 1500,
    position: toast.POSITION.TOP_CENTER,
    theme: "dark",
  });
};

export const formFailure = (err: string) => {
  toast.error(String(err), {
    autoClose: 1500,
    position: toast.POSITION.TOP_CENTER,
  });
};
