import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      {/* <h1>popularMovie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>topRatedMovie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>upcomingMovie</h1>
      <MovieSlide movies={upcomingMovies} /> */}
    </div>
  );
};

export default Home;
