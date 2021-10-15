import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";

const WomenContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
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
        : "Loading..."}
    </>
  );
};
export default WomenContainer;
