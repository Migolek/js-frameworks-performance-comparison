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
      <NavLink to="/dom/updating-rows" activeClassName={styles.active}>
        Updating rows
      </NavLink>
      <NavLink to="/dom/updating-nth-rows" activeClassName={styles.active}>
        Updating every 10 row
      </NavLink>
      <NavLink to="/dom/selecting-row" activeClassName={styles.active}>
        Selecting any row
      </NavLink>
      <NavLink to="/dom/swipe-rows" activeClassName={styles.active}>
        Swipe two rows
      </NavLink>
      <NavLink to="/dom/remove-rows" activeClassName={styles.active}>
        Remove random row
      </NavLink>
      <NavLink to="/dom/add-rows" activeClassName={styles.active}>
        Add 1000 rows
      </NavLink>
      <NavLink to="/dom/clear-rows" activeClassName={styles.active}>
        Clear 100 rows
      </NavLink>
      <hr className={styles.divider} />
      <p className={styles.groupTitle}>Startup tests</p>
      <hr className={styles.divider} />
      <p className={styles.groupTitle}>RAM tests</p>
      <NavLink to="/ram/render-rows" activeClassName={styles.active}>
        Render 1000 rows
      </NavLink>
      <NavLink to="/ram/add-rows" activeClassName={styles.active}>
        Add 1000 rows
      </NavLink>
      <hr className={styles.divider} />
      <p className={styles.groupTitle}>Electricity tests</p>
    </section>
  );
}
