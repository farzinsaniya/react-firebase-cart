import React from 'react';
import axios from 'axios';

//class based component
class PostsList extends React.Component {
    constructor(props){
        //parent prop
        super(props);
        this.state={
            posts:[]
        }
        //calling the class's instance
        this.getPosts();
    }

        getPosts(){
            axios.get('http://localhost:8000/api/v1/posts').then{(data) =>{this.setState}}
        }

    render(){
        return(
        <div>
            <h1>
                Codeial Posts
            </h1>
            <ul>

            </ul>
        </div>
        );
    }

}

export default PostsList;
