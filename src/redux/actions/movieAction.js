import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
function getMoviesDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_DETAIL_REQUEST" });
      const reviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      console.log("제발", reviewApi);

      // https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1

      // console.log("리뷰다2", genreApi);
      // console.log("리뷰다", reviewApi);

      let [reviewList] = await Promise.all([reviewApi]);
      dispatch({
        type: "GET_MOVIES_DETAIL_SUCCESS",
        payload: {
          reviewList: reviewList.data,
        },
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIES_DETAIL_FAILURE" });
    }
  };
}

export const movieAction = { getMovies, getMoviesDetail };
