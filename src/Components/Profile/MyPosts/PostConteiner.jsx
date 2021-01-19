import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profiel-reducer';
import MyPosts from './MyPosts'


// const MyPostsConteiner = (props) => {

//     return (
//         <StoreContext.Consumer>{

//             store => {

//                 function addPost() {
//                     store.dispatch(addPostActionCreator())
//                 }

//                 function onPostChange(text) {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }

//                 return (
//                     <MyPosts addPostAction={addPost}
//                         updateNewPostTextAction={onPostChange}
//                         posts={store.getState().profilePage.posts}
//                         newPostText={store.getState().profilePage.newPostText} />
//                 )
//             }}

//         </StoreContext.Consumer>)
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostAction: () => dispatch(addPostActionCreator()),
        updateNewPostTextAction: (text) => dispatch(updateNewPostTextActionCreator(text)),
    }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner;