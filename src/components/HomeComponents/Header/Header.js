import React, { useCallback, useContext } from "react";

// icons from material ui
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

// avatar image
import Avatar from "../../../images/avatar.jpg";
import { ThemeContext } from "../../../App";

// styles
import "./Header.scss";

// Notification Dropdown Component
const DropdownItem = ({ text, icon }) => (
  <span className="dropdown-item">
    <img src={Avatar} className="avatar" alt="" />
    <span className="text">
      <p>{text}</p>
      <p className="small">About 20 minutes ago</p>
    </span>
    {icon}
  </span>
);

// debounce function for for effective live search
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

const Header = ({ onChange }) => {
  const { setOpenSidebar } = useContext(ThemeContext);

  const debounceOnChange = useCallback(debounce(onChange, 400), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header>
      <span className="open-btn" onClick={() => setOpenSidebar(true)}>
        &#9776;{" "}
      </span>
      <div className="search">
        <SearchIcon fontSize="large" />
        <input type="text" onChange={(e) => debounceOnChange(e.target.value)} />
        <button type="submit">Search</button>
      </div>
      {/* notification */}
      <span className="notification">
        <span>
          <NotificationsIcon fontSize="large" />{" "}
        </span>
        <span className="badge">3</span>
        <div className="dropdown-content">
          <DropdownItem
            icon={<FavoriteBorderIcon />}
            text="Micheal liked you!"
          />
          <DropdownItem icon={<FavoriteBorderIcon />} text="Jack liked you!" />
          <DropdownItem
            icon={<ChatBubbleIcon />}
            text="Martin commented on your Photo!"
          />
        </div>
      </span>
      {/* profile */}
      <div className="profile">
        <span className="item">
          <span className="notify-badge">o</span>
          <img src={Avatar} className="avatar" alt="" />
        </span>
        <KeyboardArrowDownIcon />
      </div>
    </header>
  );
};

export default Header;
