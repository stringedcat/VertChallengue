import { SET_AUTH } from "../reducer/actionNames";

export function getCodeToken() {
  return (dispatch) => {
    const url = window.location.href;
    dispatch({ type: SET_AUTH, payload: url });
  };
}
