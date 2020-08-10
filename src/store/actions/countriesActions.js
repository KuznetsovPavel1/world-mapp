import axios from "axios";
import { loading } from "./loadingActions";

export const getAllCountries = () => async (dispatch) => {
  try {
    dispatch(loading());

    const res = await axios.get(
      "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;capital;region;subregion;population;area;timezones;nativeName;currencies;languages;flag"
    );

    dispatch({
      type: "GET_COUNTRIES",
      payload: res.data,
    });

    dispatch(loading(false));
  } catch (error) {
    dispatch({
      type: "GET_ERRORS",
      payload: error?.response?.data,
    });
  }
};
