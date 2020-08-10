import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import countriesReducer from "./countriesReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  loading: loadingReducer,
  countries: countriesReducer,
  errors: errorsReducer,
});
