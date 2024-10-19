import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({
  type = "button",
  onClick,
  children,
  className,
  icon,
  iconPosition = "left",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
