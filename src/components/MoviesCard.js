import React from "react";
import star from "../img/star.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";

const MoviesCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  // console.log("뉴", genreList);
  // console.log("wow", item);
  return (
    <div>
      <div
        className="movies-card-container"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}` +
            ")",
        }}
      >
        <div className="movies-card">
          <div className="flex-center">
            <img
              width={50}
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
            ></img>
            <div className="movies-card-title">{item.title}</div>
          </div>
          <div>
            {item.genre_ids.map((genre) => (
              <Badge bg="danger">
                {genreList.find((item) => item.id == genre).name}
              </Badge>
            ))}
          </div>
          <div>{item.overview}</div>
          <div className="flex-center">
            <div className="movie-detail-star">
              <img className="star" src={star} width={15}></img>
              {item.vote_average?.toFixed(1)}
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} className="people" />
              <span className="attendance">{item.popularity}</span>
            </div>
            <div>{item.ault ? "청소년 관람불가" : "under 18"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
