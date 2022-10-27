import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    console.log("시작");
    dispatch(movieAction.getMovies());
  }, []);
  // 로딩이 true면 loading 스피너를 보여주고
  // loading이 false면 데이터를 보여주고

  //true : 데이터 도착 전
  //false : 데이터 도착 후, 에러가 났을 때
  if (loading) {
    return <ClipLoader color="#e50914" loading={loading} size={150} />;
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <h1>popularMovie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>topRatedMovie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>upcomingMovie</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
};

export default Home;
