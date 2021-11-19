import React, { useState, useEffect } from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";

const WomenContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://wit-spotlight.herokuapp.com/blogs")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <Header />
      {data[0]
        ? data.map(info => <Home key={info.id} data={info} />)
        : <h1 className="loading">Loading...</h1>}
    </>
  );
};
export default WomenContainer;
