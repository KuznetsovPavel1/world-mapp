const initialState = { list: [], selected: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return { ...state, list: action.payload };

    case "GET_COUNTRY":
      return { ...state, selected: action.payload };

    default:
      return state;
  }
}
