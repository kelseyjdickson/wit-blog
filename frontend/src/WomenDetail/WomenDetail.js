import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./_womenDetail.scss";

const WomenDetail = () => {
  const [womenDetail, setWomenDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://wit-spotlight.herokuapp.com/blogs/${id}`)
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
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
        <div className="women-container">
          <img className="women-image"src={female.image} alt="showing" />
          <h1 className="women-name">{female.name} </h1>
          <h2>Job Title: {female.job_title}</h2>
          <h3>Company: {female.company}</h3>
          <a href={female.contact_link}>
            <i class="fab fa-linkedin fa-2x"></i>
          </a>

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
