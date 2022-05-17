import React from "react";
import styles from "./button.module.css";
export const ButtonComponent = (props) => {
  return (
    <div>
      {props.status === 0 ? (
        <button className={styles.btn } onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <div>
          <button className={styles.btn} onClick={props.stop}>
            Stop
          </button>
          <button className={styles.btn } onClick={props.reset}>Reset</button>{" "}
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className={styles.btn } onClick={props.resume}>Resume</button>
          <button className={styles.btn } onClick={props.reset}>Reset</button>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
