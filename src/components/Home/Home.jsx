import React, { useState, useEffect, useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import Avatar from "../../images/avatar.jpg";
import Card from "../Card/Card";
import { debounce } from "../../utils";
import "./Home.scss";

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

const Home = () => {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState("Loading");

  // onChange function
  const onChange = (val) => {
    if (!val) val = "youngman";
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${val}&client_id=bqvADWcNc_1KeDsSVoLmH3AuZ6NoL5VYHRTN1jQnsnk&orientation=portrait`
    )
      .then((res) => res.json())
      .then((res) => setImgs(res.results))
      .catch((error) => setLoading(error.message));
  };

  const debounceOnChange = useCallback(debounce(onChange, 400), []);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=man&client_id=bqvADWcNc_1KeDsSVoLmH3AuZ6NoL5VYHRTN1jQnsnk&orientation=portrait"
    )
      .then((res) => res.json())
      .then((res) => setImgs(res.results))
      .catch((error) => setLoading(error.message));
  }, []);
  return (
    <div id="home">
      <header>
        <div className="search">
          <SearchIcon fontSize="large" />
          <input
            type="text"
            onChange={(e) => debounceOnChange(e.target.value)}
          />
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
            <DropdownItem
              icon={<FavoriteBorderIcon />}
              text="Jack liked you!"
            />
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

      <section id="filter">
        <select>
          <option>World</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select>
          <option>World</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select>
          <option>World</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select>
          <option>World</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </section>

      <section className="cards">
        {imgs.length < 1 ? (
          <p>{loading}</p>
        ) : (
          imgs.map((img) => <Card img={img} />)
        )}
      </section>
    </div>
  );
};

export default Home;
