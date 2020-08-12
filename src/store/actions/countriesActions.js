import axios from "axios";

export const getAllCountries = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_COUNTRIES",
      payload: "loading",
    });

    const res = await axios.get(
      "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code"
    );

    dispatch({
      type: "GET_COUNTRIES",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS",
      payload: error?.response?.data,
    });
  }
};

export const getCountryByName = (name) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_COUNTRY",
      payload: "loading",
    });

    const res = await axios.get(
      // `https://restcountries.eu/rest/v2/name/${name}?fullText=true;fields=name;alpha2Code;capital;region;subregion;population;area;timezones;nativeName;currencies;languages;flag`
      `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    );

    dispatch({
      type: "GET_COUNTRY",
      payload: res.data[0],
    });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS",
      payload: error?.response?.data,
    });
  }
};
