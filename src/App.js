import React from "react";
import Bubbles from "./components/shared_components/Bubbles";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingBasket,
  faTimes,
  faStar,
  faWifi,
  faBed,
  faUsers,
  faBath,
  faPaw
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/shared_components/Sidebar";
import { Home } from "./components/Home/Home";
import Hotels from "./components/Hotels/Hotels";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


library.add(faBars, faShoppingBasket, faTimes, faStar, faWifi,
  faBed, faUsers, faBath, faPaw);

function App() {
  return (
    <div>
      <Router>
        
        <Sidebar />
          <Switch>
            <Route exact path="/">
               <div className="container"> 
               <Home/>
               </div>
            </Route>
          </Switch>
          <Switch>
            <Route path='/hotels'>
              <Hotels/>
            </Route>
          </Switch>
          
        <Bubbles />
      </Router>
      
    </div>
  );
}

export default App;
