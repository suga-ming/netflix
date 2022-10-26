import api from "../api";

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(
      `/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
    );
    console.log(popularMovieApi);

    // let url = `/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
    // let response = await axios(url);
    // let data = await response.json();

    // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
    // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;
  };
}

export const movieAction = { getMovies };
