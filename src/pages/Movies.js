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
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  // const [popular, setPopular] = useState("");
  const { popularMovies, searchMovieList } = useSelector(
    (state) => state.movie
  );

  const getSearchMovies = () => {
    let searchQuery = query.get("q") || "";
    setQuery(searchQuery);
    dispatch(movieAction.getSearchMovies(query, page));
  };

  useEffect(() => {
    if (query == "") {
      dispatch(movieAction.getMovies(page));
      setTotal(popularMovies?.results?.length);
    }
  }, [page]);

  useEffect(() => {
    if (query != "") {
      getSearchMovies();
      setTotal(searchMovieList?.results?.length);
    }
  }, [query, page]);

  const handlePageChange = (e) => {
    setPage(e);
  };

  // const voteUp = () => {
  //   let popular1 = [...popular];
  //   popular1.results.sort(function (a, b) {
  //     if (a.vote_average > b.vote_average) {
  //       return 1;
  //     }
  //     if (a.vote_average < b.vote_average) {
  //       return -1;
  //     }
  //     // a must be equal to b
  //     return 0;
  //   });
  //   setPopular(popular1);
  // };

  console.log("popularMovies", popularMovies);
  console.log("searchMovieList", searchMovieList);
  return (
    <div className="movies-entire">
      <div className="movies-container">
        <div className="movies-card-category">
          <DropdownButton id="dropdown-basic-button" title="인기순">
            <Dropdown.Item onClick={voteUp}>평점</Dropdown.Item>
            <Dropdown.Item href="#/action-1">평점</Dropdown.Item>
            <Dropdown.Item href="#/action-2">관객수</Dropdown.Item>
            <Dropdown.Item href="#/action-2">관객수</Dropdown.Item>
          </DropdownButton>
          {/* <div className="sort">Sort</div>
          <div className="sort">Filter</div> */}
        </div>
        <div className="movies-card-area">
          {searchMovieList ? (
            <Row>
              {searchMovieList?.results?.map((item) => (
                <Col lg={5}>
                  <MoviesCard item={item} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row>
              {popularMovies?.results?.map((item) => (
                <Col lg={5}>
                  <MoviesCard item={item} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
      <div>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={50}
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
