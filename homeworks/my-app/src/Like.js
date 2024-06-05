import React, {useState} from "react";
import "./like.css";

const Like = () => {
    const [likes, setLikes] = useState(100);
    const [liked, setLiked] = useState(false);
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);

    const addLike = () => {
        setLikes(likes + 1);
        setLiked(true);
    }
    const removeLike = () => {
        setLikes(likes - 1);
        setLiked(false);
    }
    const swap = (a, b) =>{
        setA(b);
        setB(a);
    }
    return (
        <div>
        <h1>Like</h1>
        <button className={liked ? "liked" : null}
        onClick={liked ? removeLike : addLike}>Like
        
        </button>
        <p>Like | {likes}</p>
        <button onClick = {()=>swap(a, b)}>swap</button>
        {a},
         {b}
        
        </div>
    );
    }

export default Like;

// Using React 18, create a "like/dislike" component for news articles. The component should display the number of likes and dislikes, and have buttons to increment the number of likes and dislikes. The component should also display the total number of likes and dislikes. The component should be reusable and should be able to be used multiple times on the same page. The component should be the default export.

// Reqirements:
// 1. The component should render a Like button:
// The button should have the "like-button" class.
// The initial number of likes should be 100.
// THe number of likes should be wrapped in a <span> element with the className set to "likes-counter".

// 2.Clicking the Like button should:
//  increment the number of likes by 1.
//  add the "liked" class to the button.

 