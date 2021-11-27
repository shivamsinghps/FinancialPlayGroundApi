import axios from "axios";
import { UPDATED_USER, LOGIN_ERROR, LOGIN_LOADING } from "../actionTypes";

export const updateuser =
  ({ url, reqParams, token }) =>
  (dispatch) => {
          dispatch({
      type: LOGIN_LOADING,
    });
    axios
      .post(
        url,
        { ...reqParams },
        {
          headers: {
            Authorization: `Brearer ${token}`,
          },
        }
      )
      .then((res) => {
        localStorage.data = JSON.stringify(res.data.data);
        dispatch({
          type: UPDATED_USER,
          payload: res.data.data.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: err.response ? err.response.data : "COULD NOT CONNECT",
        });
      });
  };
