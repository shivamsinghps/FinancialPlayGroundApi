import { LOGIN_LOADING, LOGIN_SUCCESS,LOGIN_ERROR ,AUTOLOGIN_ERROR} from "../actionTypes";

export const autoLogin = () => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  let data = localStorage.getItem('data')
  data = JSON.parse(data)
  console.log(data);
  if (data){
  dispatch({
    type: LOGIN_SUCCESS,
    payload: data,
  });
}
  else{
    dispatch({
        type: AUTOLOGIN_ERROR,
      });
  }
};
