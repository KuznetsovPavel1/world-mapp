const initialState = { list: [], selected: {}, loading: false };

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };

    case "GET_COUNTRIES":
      return { ...state, list: action.payload, loading: false };

    case "GET_COUNTRY":
      return { ...state, selected: action.payload, loading: false };

    default:
      return state;
  }
}
