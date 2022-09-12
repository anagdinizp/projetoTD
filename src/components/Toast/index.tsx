import { createContext, useContext, useState } from "react";

type colorType = "green" | "yellow" | "red" | "nude";

interface toastType {
  color: colorType;
}

type ContentType = {
  showToast: (message: string, color: colorType) => void;
};

const ToastContext = createContext<ContentType>({
  showToast: () => {},
});

function Toast({ children }: { children: any }) {
  const [message, setMessage] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState("");

  function showToast(message: string, color: colorType) {
    setVisible(true);
    setMessage(message);
    getColor(color);
    setTimeout(() => {
      setVisible(false);
      setMessage("");
    }, 3000);
  }

  function getColor(color: colorType) {
    switch (color) {
      case "red": {
        setStyle(
          "bg-red-300 fixed top-5 right-5 justify-center text-center p-4 text-black rounded"
        );
        break;
      }
      case "green": {
        setStyle(
          "bg-green-300 fixed top-5 right-5 justify-center text-center p-4 text-black rounded"
        );
        break;
      }
      case "yellow": {
        setStyle(
          "bg-orange-300 fixed top-5 right-5 justify-center text-center p-4 text-black rounded"
        );
        break;
      } 
    }
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {visible && <div className={style}>{message}</div>}
      {children}
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Algo não está certo");
  }
  return context;
}

export { Toast, useToast };
