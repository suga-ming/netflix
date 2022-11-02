import React from "react";
import "./MovieCard.css";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  // console.log("item이다", item);
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const goDetailMovie = () => {
    navigate(`/movie/:${item.id}`);
  };

  return (
    <div
      onClick={goDetailMovie}
      className="cards"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}` +
          ")",
      }}
    >
      <div className="hover-card">
        <div className="cards-title">{item.title}</div>
        <div className="card-genre">
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div className="card-vote">{item.vote_average}</div>
        <div className="card-adult">
          {item.adult ? "청소년 관람불가" : "adult 18"}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
