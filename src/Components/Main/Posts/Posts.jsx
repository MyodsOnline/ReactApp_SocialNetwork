import { useState } from 'react';
import p from './Posts.module.css'
import userImage from '../../assets/img/user-1.jpeg';
import PostComment from './PostComment';

const Posts = (props) => {
    const [like, setLike] = useState(Number(props.likes));

    function increment () {
        let cnt;
        console.log(cnt);
        if (cnt === 0) {
                setLike(like + 1);
                cnt = 1;
        } else {
                setLike(like - 1);
                cnt = 0;
        }
        console.log(cnt);
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