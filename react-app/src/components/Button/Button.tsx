import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: String;
  color?: String;
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    // <button type="button" className={"btn btn-" + color} onClick={onClick}>
    //   {children}
    // </button>
    <button
      type="button"
      className={[styles.button, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
