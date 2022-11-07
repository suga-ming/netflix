let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
  genreList: [],
  reviewList: [],
  movieList: [],
  relatedMovieList: [],
  movieVedioList: [],
  searchMovieList: [],
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading: false,
        searchMovieList: payload.searchMovieList,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "GET_MOVIES_DETAIL_SUCCESS":
      return {
        ...state,
        reviewList: payload.reviewList,
        movieList: payload.movieList,
        relatedMovieList: payload.relatedMovieList,
        movieVedioList: payload.movieVedioList,
      };

    default:
      return { ...state };
  }
}

export default movieReducer;
