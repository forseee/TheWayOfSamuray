import React from 'react';
import Post1 from './Post1/Post1';
import classcss from './MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';


const MyPosts= (props)=> {
   
    let postsElements = props.posts.map(
        (m) => (<Post1 message={m.message} like={m.likes} />)
    )

    let newPostElement = React.createRef();

    function addPost(){
        props.dispatch(addPostActionCreator())  
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))

    }

    return (
        <div className={classcss.postBlock}>
            <h2>MyPosts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement} 
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Добавить пост</button>
                </div>

            </div>
            <div className={classcss.massageBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;