import { Switch, Route, Link, Redirect } from "react-router-dom";
import CreatingRows from "./DOM/CreatingRows";
import Sidebar from "../components/Sidebar";

import * as styles from "./styles.module.scss";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dom/creating-rows" />
          </Route>
          <Route path="/dom/creating-rows">
            <CreatingRows />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default App;
