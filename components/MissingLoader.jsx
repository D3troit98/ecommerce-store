import React from "react";
import styles from "./MissingProduct.module.css";

const MissingLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.text}>
        Sorry, this product is temporarily unavailable.
      </div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default MissingLoader;
