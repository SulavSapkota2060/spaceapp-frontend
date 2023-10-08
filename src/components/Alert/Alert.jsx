import React, { useState, useEffect } from "react";
import "./Alert.css";

const Alert = ({ type, message }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowAlert(false);
  };

  let alertClassName = "alert";

  if (type === "success") {
    alertClassName += " alert-success";
  } else if (type === "error") {
    alertClassName += " alert-error";
  }

  return (
    showAlert && (
      <div className={alertClassName}>
        <span className="alert-message">{message}</span>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
      </div>
    )
  );
};

export default Alert;
