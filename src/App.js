import React from "react";
import MainTitle from "./components/MainTitle";
import Bubbles from "./components/Bubbles";
import Button from "./components/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingBasket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Home } from "./components/Pages/Home";
import { Hotels } from "./components/Pages/Hotels";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

library.add(faBars, faShoppingBasket, faTimes);

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Bubbles />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
          <Switch>
            <Route path='/hotels'>
              <Hotels/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
