import { toast, Slide } from "react-toastify";
import { closeIcon } from "../icons/mobileMenuIcons";

const showToast = (message, type = "success") => {
  const CloseButton = ({ closeToast }) => (
    <i
      className="absolute top-[11px] md:top-4 left-2.5 md:left-3 scale-90 md:scale-100"
      onClick={closeToast}
    >
      {closeIcon}
    </i>
  );
  const config = {
    position: "top-center",
    theme: "colored",
    icon: false,
    transition: Slide,
    closeButton: CloseButton,
    autoClose: 1500,
    rtl: true,
  };
  
  const toastId = message + type;
  config.toastId = toastId;

  if (type === "success") {
    toast.success(message, {
      ...config,
      style: { ...config.style, background: "#417F56", color: "#fff" },
    });
  } else if (type === "error") {
    toast.error(message, { ...config });
  }
};

export default showToast;
