import React from "react";
import MainTitle from "./components/MainTitle";
import Bubbles from "./components/Bubbles";
import Logo from "./components/Logo";
import SidebarIcon from "./components/SidebarIcon";
import Button from "./components/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

function App() {
  return (
    <div>
      <SidebarIcon />
      <Logo />
      <MainTitle />
      <Button />
      <Bubbles />
    </div>
  );
}

export default App;
