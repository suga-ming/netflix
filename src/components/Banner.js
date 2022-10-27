import React from "react";
import "./Banner.css";

const Banner = ({ movie }) => {
  return (
    <div className="banner-area">
      <img
        className="banner-img"
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
      ></img>
      <div className="banner-title">{movie.original_title}</div>
      <div className="banner-content">{movie.overview}</div>
    </div>
  );
};

export default Banner;
