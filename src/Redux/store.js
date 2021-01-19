import profileReducer from "./profiel-reducer";
import dialogsReducer from "./dialogs-reducer";

let store={
_state : {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Leva' },
            { id: 2, name: 'Ved' },
            { id: 3, name: 'Lexa' },
            { id: 4, name: 'Nekit' },
            { id: 5, name: 'Kiril' },
        ],
        messages: [
            { id: 1, message: 'Hey man what a you doing'},
            { id: 2, message: 'You a losser man'},
            { id: 3, message: 'React easy'},
            { id: 4, message: 'React easy'}
        ],
        newMessageBody:''
    },
    profilePage: {
        posts: [
            { id: 1, message: 'Hey man what a you doing', likes: 10 },
            { id: 2, message: 'You a losser man', likes: 51 },
            { id: 3, message: 'React easy', likes: 25 },
            { id: 4, message: 'React easy', likes: 25 }
        ],
        newPostText:''
    }
},
_rerenderEntireTree () {
    console.log('State changed')
},
getState () {
    return this._state
},
subscribe (observer) {
    this._rerenderEntireTree = observer;
},
dispatch (action) {

this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

this._rerenderEntireTree(this._state);
}
}

export default store;