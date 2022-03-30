import { useEffect, useState } from "react";

const Toast = ({ message, type, removeToast }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      removeToast();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`toast toast--${type ? type : "primary"} ${
        closing ? "closing" : ""
      }`}
    >
      <i className="toast__icon fa-solid fa-circle-info"></i>
      <p className="toast__text">{message}</p>
    </div>
  );
};

export default Toast;
