import axios from "axios"
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "../actionTypes";

export const signin =
  ({ password, email, remember }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    axios
      .post(
        "http://localhost:9001/api/signin",
        {
          password,
          email,
        },
      )
      .then((res) => {
        if(remember == 'true')
        localStorage.data = JSON.stringify(res.data.data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          payload:  error.response.data.userFriendlyMessage,
        });
      });
  };
