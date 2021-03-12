import { profileApi } from "../Components/api/api";

const ADD_POST = "samurai-network/profile/ADD_POST";
const SET_PROPFILE_INFO = "samurai-network/profile/SET_PROPFILE_INFO";
const SET_STATUS = "samurai-network/profile/SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hey man what a you doing", likes: 10 },
    { id: 2, message: "You a losser man", likes: 51 },
    { id: 3, message: "React easy", likes: 25 },
    { id: 4, message: "React easy", likes: 25 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: action.text, likes: 10 }],
      };

    case SET_PROPFILE_INFO:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setProfileInfo = (profile) => ({
  type: SET_PROPFILE_INFO,
  profile,
});

export const getStatusThankCreator = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatusThankCreator = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
