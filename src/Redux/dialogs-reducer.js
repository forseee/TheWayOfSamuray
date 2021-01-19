const UPDATE_NEW_MESSAGE_BADY = 'UPDATE_NEW_MESSAGE_BADY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BADY:
            return {
                ...state,
                newMessageBody:action.newBady,
                }
        
        case SEND_MESSAGE:
            let newMassage = state.newMessageBody  
            return {
                ...state,
                messages:[...state.messages, {id:6, message: newMassage}],
                newMessageBody:'',
            };
        
        default:
            return state;
    }
}

export const sendMassageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBadyCreator = (bady) => ({ type: UPDATE_NEW_MESSAGE_BADY, newBady: bady });


export default dialogsReducer;