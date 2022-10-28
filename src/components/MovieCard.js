import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div>
      <img
        width={250}
        src={`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}`}
      ></img>
    </div>
  );
};

export default MovieCard;
