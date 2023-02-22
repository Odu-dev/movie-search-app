import React from "react";
import "./Card.css";

const Card = (props) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <div className="poster">
        <img src={API_IMG + props.poster_path} alt="Poster Images" />
      </div>

      <div className="movie_info">
        <p className="movie_title">Title: {props.title}</p>
        <p className="votes">Release Date: {props.release_date}</p>
        <p className="votes">Average votes: {props.vote_average}</p>

        <div className="overview">
          <h2 className="overview_heading">Overview:</h2>
          <h3 className="overview_content">{props.overview}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
