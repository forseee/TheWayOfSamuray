const SET_USER_AUTH = 'SET_USER_AUTH'

let initialState = {
    id: null,
    email: null,
    login: null,
    auth: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {

    case SET_USER_AUTH:
        return {
            ...state,
            ...action.data,
            auth: true,
        }

    default :
        return state
    }
}  

export const setAuthUser = (id, email, login ) => ({type:SET_USER_AUTH, data :{id, email, login}})

export default authReducer