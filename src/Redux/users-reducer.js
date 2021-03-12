import { userApi } from "../Components/api/api";
import { updateObjInArray } from "../utilits/object-helpers";

const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USERS = "samurai-network/users/SET_USERS";
const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "samurai-network/users/SET_TOTAL_USERS";
const TOGGLE_TO_LOADER = "samurai-network/users/TOGGLE_TO_LOADER";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, "id", {
          followed: false,
        }),
        
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.totalUsers,
      };

    case TOGGLE_TO_LOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUser = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsers = (totalUsers) => ({
  type: SET_TOTAL_USERS,
  totalUsers,
});
export const toggleToLoader = (isFetching) => ({
  type: TOGGLE_TO_LOADER,
  isFetching,
});

export const getUserThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleToLoader(true));
    let data = await userApi.getUser(currentPage, pageSize);
    dispatch(toggleToLoader(false));
    dispatch(setUser(data.items));
    dispatch(setTotalUsers(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
};

export const unFollowUserThankCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userApi.deleteUser.bind(userApi),
      unfollow
    );
  };
};

export const followUserThankCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userApi.postUser.bind(userApi),
      follow
    );
  };
};

export default usersReducer;

