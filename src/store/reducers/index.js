import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  countries: countriesReducer,
  errors: errorsReducer,
});
