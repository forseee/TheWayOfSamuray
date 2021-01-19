import React from 'react';
import Dialogs from './Dialogs'
import { sendMassageCreator, updateNewMessageBadyCreator } from '../../../Redux/dialogs-reducer'
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../../Components/HOC/WithAuthRedirect'
import { compose } from 'redux';


// function DialogsContainer(props) {

//     return (
//         <StoreContext.Consumer>{
//             store => {

//                 function sendMessage() {
//                     store.dispatch(sendMassageCreator())
//                 }

//                 function onMessageChange(bady) {
//                     store.dispatch(updateNewMessageBadyCreator(bady));

//                 }

//                 return (
//                     <Dialogs state={store.getState().dialogsPage}
//                         sendMassageCreator={sendMessage}
//                         updateNewMessageBadyCreator={onMessageChange} />)

//             }

//         }
//         </StoreContext.Consumer>
//     )
// }

    let MapStateToProps = (state) => {

        return {
            state: state.dialogsPage,
            isAuth: state.auth.auth,
        }
    }


     {
    // let MapDispatchToProps = (dispatch) => {

    //     return {
    //         sendMassageCreator: () => dispatch(sendMassageCreator()),
    //         updateNewMessageBadyCreator: (bady) => dispatch(updateNewMessageBadyCreator(bady)),
    //         }
    //     }

    // compose (connect ( MapStateToProps, {sendMassageCreator, updateNewMessageBadyCreator} ),
    //     WithAuthRedirect)(Dialogs)

    // let AuthRedirectComponent = WithAuthRedirect(Dialogs)

    // const DialogsContainer = connect ( MapStateToProps, {sendMassageCreator, updateNewMessageBadyCreator} )(AuthRedirectComponent)
     }

export default compose (connect ( MapStateToProps, {sendMassageCreator, updateNewMessageBadyCreator} ),
WithAuthRedirect)(Dialogs);