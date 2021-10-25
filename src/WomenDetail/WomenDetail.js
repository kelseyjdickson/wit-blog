import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./_womenDetail.scss";

const WomenDetail = () => {
  const [womenDetail, setWomenDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setWomenDetail(data);
      })
      .catch(err => console.log(err));
  }, [id]);
  const { female } = womenDetail;

  return (
    <div>
      {!female ? (
        "Loading..."
      ) : (
        <>
        <div className="women-container">
          <img className="women-image"src={female.image} alt="showing" />
          <h1 className="women-name">{female.name} </h1>
          <h2>Job Title: {female.job_title}</h2>
          <h3>Company: {female.company}</h3>

          <div className="women-text">
            <p>{female.women_text}</p>
          </div>
          <div>
            <a className="women-link"href={female.website} target="_blank" rel="noopener noreferrer">
              {female.website}
            </a>
          </div>
          </div>
        </>
      )}
    </div>
  );
};
export default WomenDetail;
