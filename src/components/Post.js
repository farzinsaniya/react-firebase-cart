import React from 'react';

//function based component
function Post(props) {
    let postStyle = {
        color: 'red'
    }
    return(
        <li className='PostItem' style={postStyle} >

        </li>
    )

}

export default Post;
