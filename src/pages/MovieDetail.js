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

const MovieDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMovies(id));
  }, []);
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  return (
    <div className="movie-detail-container">
      <div className="Movie-detail-area">
        <div className="movie-datail-img">
          <img
            width={400}
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cC1wNkQpvdkQPqmY5Io9HzglrlB.jpg"
          ></img>
        </div>
        <div>
          <div className="badge-area">
            <div className="movie-genre-badge">Action</div>
            <div className="movie-genre-badge">Action</div>
            <div className="movie-genre-badge">Action</div>
          </div>
          <div className="movie-detail-title">Sonics</div>
          <div className="movie-detail-vote">
            <div className="movie-detail-star">
              <img className="star" src={star} width={15}></img>7.8
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleGroup} className="people" />
              <span className="attendance">640,333</span>
            </div>
            <div className="movie-detail-adult">Under 18</div>
          </div>
          <div className="movie-story">
            dfjklaa umerating objects: 25, done. Counting objects: 100% (25/25),
            done. Delta compression using up to 2 threads Compressing objects:
            100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB | 1.82
            MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
            remote: Resolving deltas: 100% (6/6), completed with 6 local
            objects. To https://github.com/suga-ming/netflix.git
            9f9f629..813e375 master maste
          </div>
          <div className="movie-info">
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Budget
              </Badge>
              <span>$1999999</span>
            </div>
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Revenue
              </Badge>
              <span>$2999999</span>
            </div>
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Release Day
              </Badge>
              <span>2022-03-30</span>
            </div>
            <div className="movie-info-badge-area">
              <Badge className="movie-info-badge" bg="danger">
                Time
              </Badge>
              <span>12</span>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faFilm} className="trailer" />
            Watch Trailer
          </div>
        </div>
      </div>
      <Button className="review-button" variant="danger">
        REVIEWS (3)
      </Button>{" "}
      <div className="review-area">
        <div className="reviw-text">
          dfjklaa umerating objects: 25, done. Counting objects: 100% (25/25),
          done. Delta compression using up to 2 threads Compressing objects:
          100% dfjklaa umerating objects: 25, done. Counting objects: 100%
          (25/25), done. Delta compression using up to 2 threads Compressing
          objects: 100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB |
          1.82 MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused
          0 remote: Resolving deltas: 100% (6/6), completed with 6 local 100%
          dfjklaa umerating objects: 25, done. Counting objects: 100% (25/25),
          done. Delta compression using up to 2 threads Compressing objects:
          100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB | 1.82
          MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
          remote: Resolving deltas: 100% (6/6), completed with 6 local 100%
          dfjklaa umerating objects: 25, done. Counting objects: 100% (25/25),
          done. Delta compression using up to 2 threads Compressing objects:
          100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB | 1.82
          MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
          remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
          To https://github.com/suga-ming/netflix.git 9f9f629..813e375 master
          maste
        </div>
        <div className="reviw-text">
          dfjklaa umerating objects: 25, done. Counting objects: 100% (25/25),
          done. Delta compression using up to 2 threads Compressing objects:
          100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB | 1.82
          MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
          done. Delta compression using up to 2 threads Compressing objects:
          100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB | 1.82
          MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
          done. Delta compression using up to 2 threads Compressing objects:
          100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB | 1.82
          MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
          remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
          To https://github.com/suga-ming/netflix.git 9f9f629..813e375 master
          maste
        </div>
        <div className="reviw-text">
          dfjklaa umerating objects: 25, done. Counting objects: 100% (25/25),
          done. Delta compression using up to 2 threads Compressing objects:
          100% (12/12), done. Writing objects: 100% (13/13), 1.82 KiB | 1.82
          MiB/s, done. Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
          remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
          To https://github.com/suga-ming/netflix.git 9f9f629..813e375 master
          maste
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
