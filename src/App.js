import React from "react";
import MainTitle from "./components/MainTitle"; 
import Bubbles from "./components/Bubbles";
import Button from "./components/Button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



library.add(faBars, faShoppingBasket, faTimes);



function App(){

return(
  <div> 
     <Router>
      <Sidebar /> 
      <Switch>
        <Route path="/" />
      </Switch>
    </Router> 
    
    
    <div className="container">
      <MainTitle />
      <Button />
    </div>
    <Bubbles />
  </div>
)

}

export default App;
