import React from 'react';
import classcss from './Post1.module.css'

function Post1(props){
    return (
        <div className={classcss.content}>

        <div className={classcss.item}> 
                <img src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'/> 
               
                {props.message}

                <div>
                <span>Like</span>
                </div>
                
                <div>
               {props.like}
               </div>
               
        </div>
        
        </div>
    )     
}

export default Post1;