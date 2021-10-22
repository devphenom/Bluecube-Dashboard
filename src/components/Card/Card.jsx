import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

import React from "react";
import Avatar from "../../images/avatar.jpg";
import "./Card.scss";

const Card = () => {
  return (
    <div class="card">
      <img src={Avatar} alt="Avatar" />
      <div class="overlay">
        <div className="text">
          <h3>
            <b>William, 28</b>
          </h3>
          <span>
            <RoomOutlinedIcon /> New York
          </span>
        </div>
        <div className="buttons">
          <button>
            {" "}
            <FavoriteBorderIcon />{" "}
          </button>
          <button>
            <ThumbDownAltOutlinedIcon />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
