import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import star from "../img/star.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = (item) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleShow = () => alert("안녕");

  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMoviesDetail(id));
  }, []);

  const { reviewList, movieList, relatedMovieList } = useSelector(
    (state) => state.movie
  );
  console.log("reviewList", reviewList);
  console.log("movieList", movieList);
  console.log("relatedMovieList", relatedMovieList);

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
              {movieList.vote_average?.toFixed(1)}
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
          <div onClick={handleShow}>
            <FontAwesomeIcon icon={faFilm} className="trailer" />
            Watch Trailer
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>예고편 보러가기</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="button-area">
        <Button className="review-button" variant="danger">
          REVIEWS ({reviewList.length})
        </Button>
        <Button className="related-movie-button" variant="danger">
          RELATED MOVIES ({relatedMovieList.length})
        </Button>
      </div>
      <div className="review-container">
        <div className="review">
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
      <div className="related-movie-area">
        <div className="related-movie">
          {relatedMovieList.map((movie) => (
            <img
              className="related-movie-img"
              width={400}
              src={`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${movie.poster_path}`}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
