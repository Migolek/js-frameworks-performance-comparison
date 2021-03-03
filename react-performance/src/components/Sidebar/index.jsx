import React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./styles.module.scss";

export default function Sidebar() {
  return (
    <section className={styles.section}>
      <p className={styles.groupTitle}>DOM tests</p>
      <NavLink to="/dom/creating-rows" activeClassName={styles.active}>
        Creating rows
      </NavLink>
      <hr className={styles.divider} />
      <p className={styles.groupTitle}>Startup tests</p>
      <hr className={styles.divider} />
      <p className={styles.groupTitle}>RAM tests</p>
      <hr className={styles.divider} />
      <p className={styles.groupTitle}>Electricity tests</p>
    </section>
  );
}
