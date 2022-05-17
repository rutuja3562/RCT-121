import React from "react";
import styles from "./button.module.css"
export const DisplayComponent = (props) => {
  const { h, m, s, ms } = props.time;
  const H = () => {
    if (h === 0) {
      return "";
    } else {
      return <span>{h >= 10 ? h : "0" + h}</span>;
    }
  };
  return (
    <div className={styles.main}>
    <div className={styles.spanDiv}>
      {H()} 
      <span>{m >= 10 ? m : "0" + m} </span>
      <span>{s >= 10 ? s : "0" + s} </span>
      <span>{ms >= 10 ? ms : "0" + ms} </span>
    </div>
    </div>
  );
};
