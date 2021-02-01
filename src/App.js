import React from "react";
import Bubbles from "./components/shared_components/Bubbles";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingBasket,
  faTimes,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/shared_components/Sidebar";
import { Home } from "./components/Home/Home";
import Hotels from "./components/Hotels/Hotels";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

library.add(faBars, faShoppingBasket, faTimes, faStar);

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
