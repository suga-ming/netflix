import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies(page) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
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

      const movieApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      const relatedMovieApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );

      const movieVedioApi = api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );

      let [reviewList, movieList, relatedMovieList, movieVedioList] =
        await Promise.all([
          reviewApi,
          movieApi,
          relatedMovieApi,
          movieVedioApi,
        ]);
      dispatch({
        type: "GET_MOVIES_DETAIL_SUCCESS",
        payload: {
          reviewList: reviewList.data.results,
          movieList: movieList.data,
          relatedMovieList: relatedMovieList.data.results,
          movieVedioList: movieVedioList.data.results,
        },
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIES_DETAIL_FAILURE" });
    }
  };
}

function getSearchMovies(searchQuery, page) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SEARCH_MOVIES_REQUEST" });
      const searchMovieApi = api.get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
      );

      let [searchMovieList] = await Promise.all([searchMovieApi]);
      dispatch({
        type: "GET_SEARCH_MOVIES_SUCCESS",
        payload: {
          searchMovieList: searchMovieList.data,
        },
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_SEARCH_MOVIES_FAILURE" });
    }
  };
}
// `https://api.themoviedb.org/3/search/movie?api_key=061fd4148b8e00ffff2a69c4b72b2d15&language=en-US&query=love&page=1&include_adult=false`

export const movieAction = { getMovies, getMoviesDetail, getSearchMovies };
