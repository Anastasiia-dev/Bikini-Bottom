import React from "react";
import {Basket} from './components/basket/basket';
import { MainPage } from './components/main-page/main-page';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

library.add(faBars);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path='/basket'>
          <Basket/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
