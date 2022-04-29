import { useState } from 'react';
import p from './Posts.module.css'
import userImage from '../../assets/img/user-1.jpeg';
import PostComment from './PostComment';

const Posts = (props) => {
    const [like, setLike] = useState(Number(props.likes))

    console.log(props);

    function increment () {
        setLike(like + 1)
    }

    return (
        <div className={p.post_style}>
            <img src={userImage} alt="user avatar"/>
            <div className={p.postBody}>
                <div className={p.postBodyTitle}>
                    <h4>{props.author}</h4>
                    <p>{like}<span onClick={increment}>♡</span></p>
                </div>
                <div className={p.postBodyText}>
                    <p>{props.text}</p>
                    <PostComment message="Hi! Very funny!" />
                    <PostComment message="Dont be shine!" />
                </div>
            </div>
        </div>
    )
}

export default Posts