import React, { useEffect } from "react";
import "./MovieDetail.css";
import Badge from "react-bootstrap/Badge";
import star from "../img/star.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = (item) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMoviesDetail(id));
  }, []);

  const { reviewList, genreList, movieList } = useSelector(
    (state) => state.movie
  );
  console.log("뭐양ㅇ", reviewList);
  console.log("뭐양ㅇㅎㅎ", genreList);
  console.log("뭐양zzzzz", movieList);

  return (
    <div className="movie-detail-container">
      <div className="Movie-detail-area">
        <div className="movie-datail-img">
          <img
            width={440}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieList.poster_path}`}
          ></img>
        </div>
        <div>
          <div className="badge-area">
            {movieList?.genres?.map((genre) => (
              <div className="movie-genre-badge">{genre.name}</div>
            ))}
          </div>
          <div className="movie-detail-title">{movieList.title}</div>
          <div className="movie-detail-vote">
            <div className="movie-detail-star">
              <img className="star" src={star} width={15}></img>
              {movieList.vote_average}
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} className="people" />
              <span className="attendance">{movieList.popularity}</span>
            </div>
            <div className="movie-detail-adult">Under 18</div>
          </div>
          <div className="movie-story">{movieList.overview}</div>
          <div className="movie-info">
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Budget
              </Badge>
              <span>${movieList.budget}</span>
            </div>
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Revenue
              </Badge>
              <span>${movieList.revenue}</span>
            </div>
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Release Day
              </Badge>
              <span>{movieList.release_date}</span>
            </div>
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Time
              </Badge>
              <span>{movieList.runtime}</span>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faFilm} className="trailer" />
            Watch Trailer
          </div>
        </div>
      </div>
      <div className="review-container">
        <Button className="review-button" variant="danger">
          REVIEWS ({reviewList.length})
        </Button>
        <div className="ft">
          <div className="review-area">
            {reviewList.map((item) => (
              <div className="reviw-text">
                <div>{item?.author}</div>
                <div>{item?.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
