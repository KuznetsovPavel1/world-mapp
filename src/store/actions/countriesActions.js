import axios from "axios";

export const getAllCountries = () => async (dispatch) => {
  try {
    dispatch(loading());

    const res = await axios.get(
      "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;region"
    );

    dispatch({
      type: "GET_COUNTRIES",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_COUNTRIES",
      payload: [],
    });

    dispatch({
      type: "GET_ERRORS",
      payload: error?.response?.data,
    });
  }
};

export const getCountryByName = (name) => async (dispatch) => {
  try {
    dispatch(loading());

    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}?fields=name;alpha2Code;capital;region;subregion;population;area;timezones;nativeName;currencies;languages;flag;fullText=true`
    );

    dispatch({
      type: "GET_COUNTRY",
      payload: res.data[0],
    });
  } catch (error) {
    dispatch(clearCountry());

    dispatch({
      type: "GET_ERRORS",
      payload: error?.response?.data,
    });
  }
};

export const clearCountry = () => (dispatch) => {
  dispatch({
    type: "GET_COUNTRY",
    payload: {},
  });
};

export const loading = () => (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
};
