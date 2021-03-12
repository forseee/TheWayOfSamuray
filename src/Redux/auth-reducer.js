import { profileApi } from "../Components/api/api";

const SET_USER_AUTH = "samurai-network/auth/SET_USER_AUTH";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUser = (id, email, login, isAuth) => ({
  type: SET_USER_AUTH,
  payload: { id, email, login, isAuth },
});

export const getAuthUserTC = () => async (dispatch) => {
  let response = await profileApi.authme();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUser(id, email, login, true));
  }
};

export const LoginUserTC = (email, password, rememberMe) => async (
  dispatch
) => {
  let response = await profileApi.login(email, password, rememberMe);
  if (response.data.resultCode === 0) dispatch(getAuthUserTC());
};

export const LogoutUserTC = () => async (dispatch) => {
  let response = await profileApi.logout();
  if (response.data.resultCode === 0)
    dispatch(setAuthUser(null, null, null, false));
};

export default authReducer;
