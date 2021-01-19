import { userApi } from "../Components/api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_TO_LOADER = 'TOGGLE_TO_LOADER'



let initialState = {

    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,

}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }


        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalUsers,
            }

        case TOGGLE_TO_LOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;

    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUser = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers })
export const toggleToLoader = (isFetching) => ({ type: TOGGLE_TO_LOADER, isFetching })


export const getUserThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleToLoader(true))
        userApi.getUser(currentPage, pageSize)
            .then(data => {
                dispatch(toggleToLoader(false))
                dispatch(setUser(data.items))
                dispatch(setTotalUsers(data.totalCount))
            })
    }
}

export const unFollowUserThankCreator = (userId) => {
    return (dispatch) => {
        userApi.deleteUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
            })
    }
}

export const followUserThankCreator = (userId) => {
    return (dispatch) => {
        userApi.postUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
            })
    }
}


export default usersReducer;


