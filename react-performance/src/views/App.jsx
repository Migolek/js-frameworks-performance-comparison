import { Switch, Route, Redirect } from "react-router-dom";
import CreatingRows from "./DOM/CreatingRows";
import UpdatingRows from "./DOM/UpdatingRows";
import UpdatingNthRows from "./DOM/UpdatingNthRows";
import SelectingRow from "./DOM/SelectingRow";
import SwipeTwoRows from "./DOM/SwipeTwoRows";
import RemoveRandomRow from "./DOM/RemoveRandomRow";
import AddAmountOfRows from "./DOM/AddAmountOfRows";
import ClearRows from "./DOM/ClearRows";
import RenderRows from "./RAM/RenderRows";
import AddRows from "./RAM/AddRows";
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
          <Route path="/dom/swipe-rows">
            <SwipeTwoRows />
          </Route>
          <Route path="/dom/remove-rows">
            <RemoveRandomRow />
          </Route>
          <Route path="/dom/add-rows">
            <AddAmountOfRows />
          </Route>
          <Route path="/dom/clear-rows">
            <ClearRows />
          </Route>

          <Route path="/ram/render-rows">
            <RenderRows />
          </Route>
          <Route path="/ram/add-rows">
            <AddRows />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default App;
