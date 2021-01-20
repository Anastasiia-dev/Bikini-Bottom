import React from "react";
import {Basket} from './components/basket/basket';
import Logo from './components/Logo';
import { MainPage } from './components/main-page/main-page';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarIcon from './components/SidebarIcon';

library.add(faBars);

function App() {
  return (
    <Router>
      <header className="navbar">
        <SidebarIcon />
        <Logo />
      </header>

      <div className="container">
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route path='/basket'>
            <Basket/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
