import React from "react";
import MainTitle from "../MainTitle";
import Bubbles from "../Bubbles";
import Logo from "../Logo";
import SidebarIcon from "../SidebarIcon";
import Button from "../Button";

export function MainPage() {
  return (
    <div>
      <SidebarIcon/>
      <Logo/>
      <MainTitle/>
      <Button/>
      <Bubbles/>
    </div>
  );
}
