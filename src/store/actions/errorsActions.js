// export const getErrors = (errors) => async (dispatch) => {
//     try {
//       dispatch({
//         type: "GET_ERRORS",
//         payload:errors
//       });
//     } catch (error) {
//       console.log("getErrors error", error);
//     }
//   };

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: "CLEAR_ERRORS",
    payload: errors,
  });
  // } catch (error) {
  //   console.log("clearErrors error", error);
  // }
};
