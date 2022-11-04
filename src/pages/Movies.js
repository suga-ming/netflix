import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "../components/MoviesCard";
import { movieAction } from "../redux/actions/movieAction";
import "./Movies.css";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMovies());
  }, []);

  const { popularMovies } = useSelector((state) => state.movie);
  console.log("짠", popularMovies.results);
  return (
    <div className="movies-container">
      <div className="movies-card-category">
        <div className="sort">Sort</div>
        <div className="sort">Filter</div>
      </div>
      <div className="movies-card-area">
        <Row>
          {popularMovies.results.map((item) => (
            <Col lg={5}>
              <MoviesCard item={item} />
            </Col>
          ))}
        </Row>
      </div>

      {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
    </div>
  );
};

export default Movies;
