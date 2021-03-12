import React from 'react';
import Preloader from '../../Users/Preloader';
import ProfileStatus from './ProfileStatus';


const  ProfileInfo = ({profile, ...props }) =>  {
    if(!profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
            </div>
            <div>
                <img src = {profile.photos.large}/> 
                <ProfileStatus status={props.status} updateStatus= {props.updateStatus}/>
            </div>
        </div>
    )
}


export default ProfileInfo