import React from "react";
import "../App.css";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  console.log(genreList);
  return (
    <div
      className="cards"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}` +
          ")",
      }}
    >
      <div className="hover-card">
        <div>{item.title}</div>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div>{item.vote_average}</div>
        <div>{item.adult ? "청소년 관람불가" : "adult 18"}</div>
      </div>
    </div>
  );
};

export default MovieCard;
