import { Switch, Route, Redirect } from "react-router-dom";
import CreatingRows from "./DOM/CreatingRows";
import UpdatingRows from "./DOM/UpdatingRows";
import UpdatingNthRows from "./DOM/UpdatingNthRows";
import SelectingRow from "./DOM/SelectingRow";
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
          <Route path="/dom/updating-rows">
            <UpdatingRows />
          </Route>
          <Route path="/dom/updating-nth-rows">
            <UpdatingNthRows />
          </Route>
          <Route path="/dom/selecting-row">
            <SelectingRow />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default App;
