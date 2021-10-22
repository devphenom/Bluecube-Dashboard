import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Sidelink = ({ val }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const goToPage = (link) => history.push(link);
  return (
    <li onClick={() => goToPage(val.link)}>
      <Link
        to={val.link}
        className={`row ${
          history.location.pathname === val.link ? "active" : ""
        }`}
      >
        {console.log(pathname)}
        <div id="icon">{val.icon}</div>
        <div id="title">{val.title}</div>
      </Link>
    </li>
  );
};

export default Sidelink;
