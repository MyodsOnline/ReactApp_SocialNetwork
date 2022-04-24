import { useState } from 'react';
import p from './Posts.module.css'
import userImage from '../../assets/img/user-1.jpeg';
import PostComment from './PostComment';

const Posts = (proops) => {
    const [like, setLike] = useState(Number(proops.likes))

    function increment () {
        setLike(like + 1)
    }

    return (
        <div className={p.post_style}>
            <img src={userImage} alt="user avatar"/>
            <div className={p.postBody}>
                <div className={p.postBodyTitle}>
                    <h4>Author Name</h4>
                    <p>{like}<span onClick={increment}>♡</span></p>
                </div>
                <div className={p.postBodyText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                    <PostComment message="Hi! Very funny!" />
                    <PostComment message="Dont be shine!" />
                </div>
            </div>
        </div>
    )
}

export default Posts