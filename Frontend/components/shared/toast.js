import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import "../../app/style/toast-custom.css";

export function showToast(message, type = "info") {
  const ToastContent = () => (
    <div className="toast-wrapper">
      {/* Large Mascot Image Outside */}
      <div className="toast-mascot">
        <Image
          src={type === "error" ? "/AG - error.png" : "/AG - success.png"}
          alt={type === "error" ? "Error" : "Success"}
          width={120}
          height={120}
          className="object-contain"
          unoptimized
        />
      </div>
      
      {/* Toast Box with Message */}
      <div className="toast-content">
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );

  toast[type](<ToastContent />, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon: false,
    style: { backgroundColor: "transparent", padding: "0", boxShadow: "none" },
  });
}

export function ToastRoot() {
  return <ToastContainer position="bottom-right" />;
}
