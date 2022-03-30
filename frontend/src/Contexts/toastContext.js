import { createContext, useContext, useState } from "react";
import Toast from "../Components/Toast";
import "../Components/Styles/toast.scss";

const ToastContext = createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (newToast) => {
    setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...newToast }]);
  };

  const removeToast = (idToRemove) => {
    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter(({ id: prevId }) => prevId !== idToRemove)
      );
    }, 200);
  };

  const value = { toasts, addToast, removeToast };
  return (
    <ToastContext.Provider value={value}>
      {children}

      {toasts.length > 0 && (
        <ul className={`stacked-list toast-list`}>
          {toasts.map(({ id, message, type }) => (
            <li key={id} className="toast-item">
              <Toast
                message={message}
                type={type}
                removeToast={() => removeToast(id)}
              />
            </li>
          ))}
        </ul>
      )}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
