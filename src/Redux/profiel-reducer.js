import { profileApi } from "../Components/api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_PROPFILE_INFO = 'SET_PROPFILE_INFO'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Hey man what a you doing', likes: 10 },
        { id: 2, message: 'You a losser man', likes: 51 },
        { id: 3, message: 'React easy', likes: 25 },
        { id: 4, message: 'React easy', likes: 25 }
    ],
    newPostText: '',
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost = state.newPostText
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: newPost, likes: 10 }],
                newPostText: '',
            }

        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_PROPFILE_INFO:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setStatus = (status) =>
    ({ type: SET_STATUS, status })

export const setProfileInfo = (profile) =>
    ({ type: SET_PROPFILE_INFO, profile })




export const getStatusThankCreator = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusThankCreator = (status) => {
    return dispatch => {
        profileApi.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;