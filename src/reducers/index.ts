import { combineReducers } from "redux";
import moviesReduser from "./movies";

const rootReducer = combineReducers({
  movies: moviesReduser,
});

export default rootReducer;
