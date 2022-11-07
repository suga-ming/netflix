import React, { useEffect, useState, Component } from "react";
import Pagination from "react-js-pagination";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "../components/MoviesCard";
import { movieAction } from "../redux/actions/movieAction";
import "./Movies.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMovies());
  }, []);

  const { popularMovies, searchMovieList } = useSelector(
    (state) => state.movie
  );
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  console.log("popularMovies", popularMovies.results);
  // console.log("searchMovieList", searchMovieList);
  return (
    <div className="movies-entire">
      <div className="movies-container">
        <div className="movies-card-category">
          <div className="sort">Sort</div>
          <div className="sort">Filter</div>
        </div>
        <div className="movies-card-area">
          {/* <Row>
            {popularMovies.results.map((item) => (
              <Col lg={5}>
                <MoviesCard item={item} />
              </Col>
            ))}
          </Row> */}
        </div>
      </div>
      <div>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
