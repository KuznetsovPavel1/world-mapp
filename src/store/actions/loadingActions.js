export const loading = (status = true) => (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: status,
  });
};
