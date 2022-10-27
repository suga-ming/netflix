import { combineReducers } from "redux";
import movieReducer from "./movieReducr";

export default combineReducers({
  movie: movieReducer,
});
