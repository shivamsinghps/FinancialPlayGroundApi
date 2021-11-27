import axios from "axios";

import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../actionTypes";

export const register =
  ({ email, password, lastName, firstName, navigate }) =>
  (dispatch) => {
    dispatch({
      type: REGISTER_LOADING,
    });

    axios
      .post("http://localhost:9001/api/signup", {
        email,
        password,
        firstName,
        lastName,
      })
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: null,
        });
        navigate("/details");
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_ERROR,
          payload: error.response.data.userFriendlyMessage,
        });
      });
  };
