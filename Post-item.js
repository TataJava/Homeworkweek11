import React from "react";
import { Link } from "react-router-dom";
const PostItem = (props) =>{
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Link to ="/product">Back</Link>
        </div>
    );
}
export default PostItem;