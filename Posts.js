import React from "react";
import { useParams,useLocation } from "react-router-dom";
import PostItem from "./Post-item";
const Posts = (props) =>{
    const {id}=useParams();
    const urlstring=new URLSearchParams(useLocation().search);
    const fname=urlstring.get("name");
    const lname=urlstring.get("price");
    // const id2=urlstring.get("id");
    return(
        <div>
            {id}
            <PostItem title={fname} content={lname}/>
        </div>
    );
}
export default Posts;