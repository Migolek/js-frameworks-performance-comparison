import React from "react";

import * as styles from "./styles.module.scss";

export default function StartTestBtn(props) {
  return (
    <section className={styles.section}>
      <button type="button" className={styles.testBtn} onClick={props.onClick}>
        {props.rendered ? "Reset test" : "Start test"}
      </button>
    </section>
  );
}
