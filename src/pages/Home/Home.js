import React, { useState, useEffect } from "react";

// compoenents import
import Card from "../../components/HomeComponents/Card/Card";
import Filter from "../../components/HomeComponents/Filter/Filter";
import Header from "../../components/HomeComponents/Header/Header";

import "./Home.scss";

const Home = () => {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState("Loading");

  // onChange function fetching API
  const onChange = (val) => {
    if (!val) val = "black man";
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${val}&client_id=bqvADWcNc_1KeDsSVoLmH3AuZ6NoL5VYHRTN1jQnsnk&orientation=portrait`
    )
      .then((res) => res.json())
      .then((res) => setImgs(res.results))
      .catch((error) => setLoading(error.message));
  };

  // renders on pageLoad/reload
  useEffect(() => {
    onChange();
  }, []);

  return (
    <div id="home">
      <Header onChange={onChange} />
      <Filter />

      {/* cards */}
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
