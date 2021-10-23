import React from "react";

// icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

import "./Card.scss";

const Card = ({ img }) => {
  const { urls, user } = img;

  // capitalizes first letter of a word
  const capitalizeFirstLetter = (word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  };

  return (
    <div className="card">
      <div className="card-body">
        <img src={urls.thumb} alt="Avatar" />
        <div className="overlay">
          <div className="text">
            <h3>
              <b>{`${capitalizeFirstLetter(user.first_name)}, ${img.likes}`}</b>
            </h3>
            <span>
              <RoomOutlinedIcon />{" "}
              {user.location
                ? capitalizeFirstLetter(user.location)
                : "New York"}
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
    </div>
  );
};

export default Card;
