import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import YouTube from "react-youtube";

const MovieDetail = (item) => {
  const [show, setShow] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(true);
  const [youtubeVisible, setYoutubeVisible] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const previewShow = () => setYoutubeVisible(true);

  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMoviesDetail(id));
  }, []);

  useEffect(() => {
    console.log(reviewVisible);
  }, [reviewVisible]);

  useEffect(() => {
    console.log(youtubeVisible);
  }, [youtubeVisible]);

  const { reviewList, movieList, relatedMovieList, movieVedioList } =
    useSelector((state) => state.movie);
  console.log("reviewList", reviewList);
  console.log("movieList", movieList);
  console.log("relatedMovieList", relatedMovieList);
  console.log("movieVedioList", movieVedioList);
  // console.log("movieVedioList", movieVedioList[0].key);

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
            <Modal.Body>
              {youtubeVisible ? (
                <YouTube
                  className="youtube"
                  videoId={movieVedioList[0].key}
                  opts={{
                    width: "1000",
                    height: "570",
                    playerVars: {
                      autoplay: 1, //자동재생 O
                      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    },
                  }}
                  //이벤트 리스너
                  onEnd={(e) => {
                    e.target.stopVideo(0);
                  }}
                />
              ) : (
                <div className="modal-area">
                  <div className="modal-text">예고편을 보러가시겠습니까?</div>
                  <Button
                    variant="danger"
                    onClick={previewShow}
                    className="modal-button"
                  >
                    보러가기
                  </Button>
                </div>
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="button-area">
        <button
          className={
            reviewVisible ? "button-review-active" : "button-review-disabled"
          }
          onClick={() => setReviewVisible(true)}
        >
          REVIEWS ({reviewList.length})
        </button>
        <button
          className={
            !reviewVisible ? "button-related-active" : "button-related-disabled"
          }
          onClick={() => setReviewVisible(false)}
        >
          RELATED MOVIES ({relatedMovieList.length})
        </button>
      </div>
      {reviewVisible ? (
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
      ) : (
        <div className="related-movie-area">
          <div className="related-movie">
            {relatedMovieList.map((movie) => (
              <img
                className="related-movie-img"
                width={480}
                height={200}
                src={`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${movie.poster_path}`}
              ></img>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
