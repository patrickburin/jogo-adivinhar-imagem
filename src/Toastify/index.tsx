import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const widthToast = {
    width: "auto",
  };

  return (
    <ToastContainer
      style={widthToast}
      pauseOnFocusLoss={true}
      transition={Zoom}
      position={"top-center"}
      closeOnClick={false}
    />
  );
};

export default Toastify;
