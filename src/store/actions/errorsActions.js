export const clearErrors = () => (dispatch) => {
  dispatch({
    type: "CLEAR_ERRORS",
    payload: errors,
  });
};
