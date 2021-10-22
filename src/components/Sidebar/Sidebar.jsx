import React, { useContext } from "react";

import { SidebarConstData, SidebarData } from "./SidebarData";
import Logo from "../../images/logo.png";
import Sidelink from "./SideLink";
import { ThemeContext } from "../../App";
import "./Sidebar.scss";

const Sidebar = () => {
  const { setOpenSidebar, openSidebar } = useContext(ThemeContext);

  const onClick = (e) => {
    e.preventDefault();
    if (e.target.tagName === "SPAN") setOpenSidebar(false);
  };
  return (
    <div className={`sidebar ${openSidebar ? "opensidebar" : ""}`}>
      <a className="logo" href="/">
        <img src={Logo} alt="bluecube" width="25" />
        bluecube
        <span onClick={(e) => onClick(e)} className="close-btn">
          &times;
        </span>
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
