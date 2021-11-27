import { LOGOUT_USER } from "../actionTypes";

export default () => (dispatch) => {
  console.log('logged out');
  localStorage.removeItem("data");
  dispatch({
    type: LOGOUT_USER,
  });
};
