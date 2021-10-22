import React from "react";
import { SidebarConstData, SidebarData } from "./SidebarData";
import Logo from "./logo.png";
import Sidelink from "./SideLink";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="logo" href="/">
        <img src={Logo} alt="bluecube" width="25" />
        bluecube
      </a>
      <ul className="sidebarList">
        {SidebarConstData.map((val, key) => {
          return <Sidelink val={val} key={key} />;
        })}
      </ul>
      <ul className="sidebarList">
        <h4 className="share">SHARE</h4>
        {SidebarData.map((val, key) => {
          return <Sidelink val={val} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
