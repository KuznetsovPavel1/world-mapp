const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return action.payload;

    default:
      return state;
  }
}
