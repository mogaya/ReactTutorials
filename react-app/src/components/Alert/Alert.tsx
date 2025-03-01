import React, { ReactNode } from "react";
import { MdCancel } from "react-icons/md";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className={styles.alert}>
      {children}
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button> */}
      <MdCancel
        // className={styles.alert}
        onClick={onClose}
        color="red"
        size="20"
      />
    </div>
  );
}

export default Alert;
