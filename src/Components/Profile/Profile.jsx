import React from 'react';
import MyPostsConteiner from './MyPosts/PostConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile (props) {

    return (
        <div>
            < ProfileInfo profile={props.profile} />
            < MyPostsConteiner/>
        </div>
    )     
}

export default Profile;