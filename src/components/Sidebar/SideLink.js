import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidelink = ({ val }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        to={val.link}
        className={`row ${pathname === val.link ? "active" : ""}`}
      >
        {console.log(pathname)}
        <div id="icon">{val.icon}</div>
        <div id="title">{val.title}</div>
      </Link>
    </li>
  );
};

export default Sidelink;
