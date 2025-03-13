import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface ToastNotificationProps {
  message: string;
  description?: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

export default function ToastNotification({ 
  message, 
  description, 
  type = "success", 
  duration = 5000 
}: ToastNotificationProps) {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  const getIconClass = () => {
    switch (type) {
      case "success":
        return "fas fa-check-circle text-green-500";
      case "error":
        return "fas fa-exclamation-circle text-red-500";
      case "info":
        return "fas fa-info-circle text-blue-500";
      default:
        return "fas fa-check-circle text-green-500";
    }
  };
  
  const handleClose = () => {
    setVisible(false);
  };
  
  if (!visible) return null;
  
  return (
    <div 
      className={`fixed bottom-4 right-4 bg-white text-[#4A4A4A] p-4 rounded-lg shadow-lg z-50 flex items-center transition-transform transform ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <i className={`${getIconClass()} mr-3 text-lg`}></i>
      <div>
        <p className="font-medium">{message}</p>
        {description && <p className="text-sm">{description}</p>}
      </div>
      <button 
        className="ml-4 text-[#4A4A4A]/80 hover:text-[#4A4A4A]" 
        onClick={handleClose}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}
