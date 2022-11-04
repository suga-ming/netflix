import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      {/* {popularMovies.results.map((item) => {
        item.title;
      })} */}
      <div>sort</div>
      <div>
        <div className="movies-card">
          <div>
            <img src=""></img>
            <div>title</div>
          </div>
          <div>
            <div>action</div>
            <div>action</div>
            <div>action</div>
          </div>
          <div>content</div>
          <div>
            <div>평점</div>
            <div>관객수</div>
            <div>청불여부</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
