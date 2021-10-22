import React from "react";
import { Link } from "react-router-dom";

import "./ComingSoon.scss";
const ComingSoon = () => (
  <div className="coming-soon">
    <h1> Coming Soon!</h1>
    <p>Page not available yet.</p>
    <p>
      Go to <Link to="/">home</Link>
    </p>
  </div>
);

export default ComingSoon;
